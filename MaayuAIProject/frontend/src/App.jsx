import { useState } from "react"
import { ChatInput } from "./components/chat-input"
import { X } from "lucide-react"


export default function App() {
 const [isOpen, setIsOpen] = useState(false)
 const [messages, setMessages] = useState([
   {
     id: "1",
     content: "Hi there! How can I help you with your job description?",
     sender: "assistant",
     timestamp: new Date(),
   },
 ])


 const handleSendMessage = (content) => {
   const userMessage = {
     id: Date.now().toString(),
     content,
     sender: "user",
     timestamp: new Date(),
   }
   setMessages((prev) => [...prev, userMessage])


   setTimeout(() => {
     const assistantMessage = {
       id: (Date.now() + 1).toString(),
       content: "Thanks for your message! This is a simulated response.",
       sender: "assistant",
       timestamp: new Date(),
     }
     setMessages((prev) => [...prev, assistantMessage])
   }, 1000)
 }


 return (
   <>
     {/* Chat Box */}
     {isOpen && (
       <div
         style={{
           position: "fixed",
           bottom: 80,
           right: 20,
           width: 360,
           height: 500,
           backgroundColor: "#fff",
           border: "1px solid #ddd",
           borderRadius: 12,
           display: "flex",
           flexDirection: "column",
           boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
           fontFamily: "'Inter', sans-serif",
           zIndex: 1000,
         }}
       >
         <div
           style={{
             padding: "12px 16px",
             borderBottom: "1px solid #eee",
             fontWeight: "600",
             fontSize: "16px",
             backgroundColor: "#f6f6f6",
             borderTopLeftRadius: 12,
             borderTopRightRadius: 12,
             display: "flex",
             justifyContent: "space-between",
             alignItems: "center",
           }}
         >
           MaayuAI Chat
           <button
             onClick={() => setIsOpen(false)}
             style={{
               background: "transparent",
               border: "none",
               cursor: "pointer",
             }}
           >
             <X size={20} />
           </button>
         </div>


         <div
           style={{
             flex: 1,
             overflowY: "auto",
             padding: "12px",
             display: "flex",
             flexDirection: "column",
             gap: "10px",
           }}
         >
           {messages.map((msg) => (
             <div
               key={msg.id}
               style={{
                 display: "flex",
                 alignItems: "flex-start",
                 justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
               }}
             >
               {msg.sender === "assistant" && (
                 <img
                   src="https://via.placeholder.com/32"
                   alt="Bot"
                   style={{ width: 32, height: 32, borderRadius: "50%", marginRight: 8 }}
                 />
               )}
               <div
                 style={{
                   maxWidth: "75%",
                   padding: "10px 14px",
                   borderRadius: "18px",
                   backgroundColor: msg.sender === "user" ? "#9b59b6" : "#e5e5ea",
                   color: msg.sender === "user" ? "#fff" : "#000",
                 }}
               >
                 {msg.content}
               </div>
             </div>
           ))}
         </div>


         <div style={{ padding: "12px", borderTop: "1px solid #eee" }}>
           <ChatInput onSendMessage={handleSendMessage} />
         </div>
       </div>
     )}


     {/* Avatar Button */}
     {!isOpen && (
       <div
         style={{
           position: "fixed",
           bottom: 20,
           right: 20,
           display: "flex",
           alignItems: "center",
           gap: 10,
           zIndex: 1000,
           cursor: "pointer",
         }}
         onClick={() => setIsOpen(true)}
       >
         <div
           style={{
             backgroundColor: "#9b59b6",
             width: 60,
             height: 60,
             borderRadius: "50%",
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
           }}
         >
           <img
             src="https://via.placeholder.com/40"
             alt="Chat Bot"
             style={{ borderRadius: "50%" }}
           />
         </div>
         <div
           style={{
             background: "#fff",
             padding: "8px 12px",
             borderRadius: 10,
             boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
             fontSize: "14px",
             fontFamily: "Inter, sans-serif",
             border: "1px solid #ddd",
           }}
         >
           Click to discuss your job description!
         </div>
       </div>
     )}
   </>
 )
}
