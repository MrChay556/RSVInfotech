import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      message: "Hello! How can I help you with your IT needs today?"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      sender: "user",
      message: newMessage
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    
    // Simulate bot response after delay
    setTimeout(() => {
      const botResponse = {
        sender: "bot",
        message: "Thank you for your message. One of our representatives will get back to you shortly. Is there anything else you'd like to know about our services?"
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div id="chat-bot" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-80 sm:w-96 bg-card/90 backdrop-blur-lg rounded-xl border border-white/10 shadow-2xl shadow-primary/10 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
              <h3 className="font-orbitron font-semibold text-white">RSV Assistant</h3>
              <button onClick={toggleChat} className="text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 h-80 overflow-y-auto">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex items-start mb-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-orbitron font-bold text-xs text-white">AI</span>
                    </div>
                  )}
                  <div className={`p-3 rounded-lg max-w-[80%] ${
                    msg.sender === 'bot' 
                      ? 'bg-muted text-foreground/90' 
                      : 'bg-gradient-to-r from-primary to-secondary text-white'
                  }`}>
                    <p>{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-white/10">
              <form className="flex items-center" onSubmit={handleSendMessage}>
                <Input 
                  type="text" 
                  placeholder="Type your message..." 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg bg-background border border-white/20 text-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <Button 
                  type="submit"
                  className="ml-2 p-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                >
                  <Send className="h-5 w-5 text-white" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button 
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
      >
        <MessageSquare className="h-8 w-8 text-white" />
      </motion.button>
    </div>
  );
};

export default Chatbot;
