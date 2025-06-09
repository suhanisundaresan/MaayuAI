
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mic, Send, PhoneCall } from "lucide-react";

interface Message {
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
}

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hey, how can I help you today?",
      type: 'ai',
      timestamp: new Date(Date.now() - 480000) // 8 minutes ago
    },
    {
      content: "Create a JD for Senior Dev ops engineer, Reston VA",
      type: 'user',
      timestamp: new Date(Date.now() - 60000) // 1 minute ago
    },
    {
      content: "I received your message! I'll help you create a job description for a Senior DevOps Engineer in Reston, VA. Let's start by filling in the basic information section with the job title, location, and employment type.",
      type: 'ai',
      timestamp: new Date()
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessage: Message = {
      content: inputMessage,
      type: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, newMessage]);
    setInputMessage("");
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        content: "I received your message! This is a sample response.",
        type: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="flex flex-col h-full bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src="/lovable-uploads/5eaac4f5-c21d-4508-ac86-3dbe3008c93f.png" alt="Maayu" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold text-white">Maayu Assistant</h3>
            <p className="text-sm text-green-400 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
              Online
            </p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full text-gray-300 hover:text-white hover:bg-gray-700"
        >
          <PhoneCall className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-700/50">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className="flex flex-col max-w-[80%]">
              {message.type === 'ai' && (
                <div className="flex items-center mb-1">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src="/lovable-uploads/5eaac4f5-c21d-4508-ac86-3dbe3008c93f.png" alt="Maayu" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-gray-300">maayu</span>
                </div>
              )}
              
              <div className={`px-4 py-3 rounded-2xl ${
                message.type === 'user' 
                  ? 'bg-purple-600 text-white ml-auto' 
                  : 'bg-gray-600 text-gray-100'
              }`}>
                {message.content}
              </div>
              
              <span className={`text-xs text-gray-400 mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-gray-700 p-3">
        <div className="flex items-center bg-gray-600 rounded-full overflow-hidden pr-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 focus:outline-none bg-gray-600 text-white placeholder-gray-400 text-base"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleVoiceInput} 
              className={`rounded-full text-gray-300 hover:text-white ${isListening ? 'text-purple-400' : ''}`}
            >
              <Mic className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleSendMessage} 
              className="rounded-full text-purple-400"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
