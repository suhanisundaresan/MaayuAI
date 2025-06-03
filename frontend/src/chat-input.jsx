import { useState } from "react"
import { Mic, Send } from "lucide-react"


export function ChatInput({ onSendMessage, onStartVoiceInput }) {
 const [message, setMessage] = useState("")


 const handleSubmit = (e) => {
   e.preventDefault()
   if (message.trim()) {
     onSendMessage(message)
     setMessage("")
   }
 }


 return (
   <form
     onSubmit={handleSubmit}
     style={{
       display: "flex",
       alignItems: "center",
       gap: "8px",
       background: "#f9f9f9",
       borderRadius: "8px",
       padding: "6px",
     }}
   >
     <input
       value={message}
       onChange={(e) => setMessage(e.target.value)}
       placeholder="Type a message..."
       style={{
         flex: 1,
         padding: "8px",
         fontSize: "14px",
         border: "1px solid #ccc",
         borderRadius: "6px",
       }}
     />
     <button
       type="button"
       onClick={onStartVoiceInput}
       style={{ background: "transparent", border: "none", cursor: "pointer" }}
     >
       <Mic size={20} />
     </button>
     <button
       type="submit"
       disabled={!message.trim()}
       style={{
         backgroundColor: "#8e44ad",
         color: "#fff",
         border: "none",
         borderRadius: "6px",
         padding: "6px 10px",
         cursor: "pointer",
       }}
     >
       <Send size={20} />
     </button>
   </form>
 )
}
