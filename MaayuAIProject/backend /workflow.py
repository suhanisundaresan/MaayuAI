#imports
import requests 
from bs4 import BeautifulSoup 
from langchain.schema import Document 
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from typing_extensions import Optional, TypedDict, Annotated 
from langgraph.graph import StateGraph, add_messages, END 
from langchain_together import ChatTogether 
from langchain_core.messages import AIMessage, HumanMessage 
from dotenv import load_dotenv  
import os

#scraper + embedding to chromadb
CHROMA_DIR = "./chroma_store"

#pulls job title and description (clean reading for search)
def scrape_greenhouse(url):
    try:
        r = requests.get(url)
        soup = BeautifulSoup(r.text, "html.parser")
        jd_content = soup.find("div", class_="content")
        title = soup.find("h1").text.strip() if soup.find("h1") else ""
        body = jd_content.get_text(separator="\n", strip=True) if jd_content else ""
        return f"{title}\n\n{body}"
    except Exception as e:
        print(f"Failed on {url}: {e}")
        return None

#scraping and wrapping into doc format for db 
def build_docs_from_urls(url_list):
    docs = []
    for url in url_list:
        jd = scrape_greenhouse(url)
        if jd:
            docs.append(Document(page_content=jd))
    return docs

#embedding and storing in vector db 
def get_vectorstore(docs=None):
    embedding_model = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    if os.path.exists(CHROMA_DIR) and not docs:
        return Chroma(persist_directory=CHROMA_DIR, embedding_function=embedding_model)
    elif docs:
        vs = Chroma.from_documents(docs, embedding_model, persist_directory=CHROMA_DIR)
        vs.persist()
        return vs
    else:
        raise ValueError("No docs provided and no existing vector DB found.")

#chatbot setup 
load_dotenv()
api_key = os.getenv("TOGETHER_API_KEY")

llm = ChatTogether(
    model="mistralai/Mistral-7B-Instruct-v0.2",
    together_api_key=api_key,
)

class BasicChatState(TypedDict):
    messages: Annotated[list, add_messages]

#retriever for sample JDs 
urls = [
    "https://optiver.com/working-at-optiver/career-opportunities/7794394002/?gh_jid=7794394002",
    "https://careers.airbnb.com/positions/5661451/?gh_jid=5661451",
    "https://careers.onepeloton.com/en/all-jobs/6495827/software-engineer-ii-swiftui/?gh_jid=6495827",
    "https://www.databricks.com/company/careers/engineering/staff-software-engineer---backend-5408888002?gh_jid=5408888002",
    "http://careers.upstart.com/jobs/software-engineer-consumer-platform-ee70b657-681f-4845-8f3b-1dbe6f42d387?gh_jid=6856146",
    "https://www.yotpo.com/careers/gid-6879751/?gh_jid=6879751",
    "https://www.kaseya.com/careers/jobs/id/5538132004/?gh_jid=5538132004",
    "https://www.hashicorp.com/en/career/6836551?gh_jid=6836551",
    "https://careers.toasttab.com/jobs/full-stack-software-engineer-ii-dublin-county-dublin-ireland?gh_jid=6725256",
    "https://job-boards.greenhouse.io/stirlingpdf/jobs/5351730004",
    "https://www.okta.com/company/careers/business-technology/staff-full-stack-engineer-federal-business-technology-6713083/",
    "https://www.zipline.com/careers/open-roles/5515759003",
    "https://buildops.com/careers/job-application/?gh_jid=5504937004"
]

#scraping and storing 
docs = build_docs_from_urls(urls)
vectorstore = get_vectorstore(docs)
retriever = vectorstore.as_retriever(search_kwargs={"k": 2})

#edit the prompt here 
#prompting llm to generate JD based on sample JDs and user input 
def chatbot(state: BasicChatState):
    # All prior messages are already in state["messages"]
    history = state["messages"]

    # Get the latest human message
    user_msg = history[-1].content

    # Retrieve context from vectorstore
    jd_results = retriever.get_relevant_documents(user_msg)
    jd_context = "\n\n".join([doc.page_content for doc in jd_results])

    # Include full message history in prompt
    full_prompt = [
        *history,
        HumanMessage(content=f"You are a job description writer. Please write a job description that includes the following components: 1. job title with small one sentence description, 2. basic information such as employment type, experience, or work authorization, skill requirements, compnay and job description as well as company mission statement, internal information like salary range, and a pre-qualification survey. Please use the following sample JDs to reference:\n\n{jd_context}\n\nUser input: {user_msg}")
    ]
    ai_response = llm.invoke(full_prompt)

    return {
        "messages": [ai_response]  # Will be auto-added to history
    }

#build langgraph 
graph = StateGraph(BasicChatState)
graph.add_node("chatbot", chatbot)
graph.set_entry_point("chatbot")
graph.add_edge("chatbot", END)

app = graph.compile()

#chat loop for back and forth 
config = {
    "configurable": {
        "thread_id": "1"
    }
}

while True:
    user_input = input("User: ")
    if user_input.lower() in ["exit", "end"]:
        break
    result = app.invoke({
        "messages": [HumanMessage(content=user_input)]
    }, config=config)
    print("AI:", result["messages"][-1].content)