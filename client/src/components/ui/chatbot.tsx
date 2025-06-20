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
      message: "Hello! 👋 Welcome to RSV Infotech. I'm here to help you with any questions about our IT services. How can I assist you today?"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || isLoading) return;
    
    // Add user message
    const userMessage = {
      sender: "user",
      message: newMessage
    };
    
    setMessages(prev => [...prev, userMessage]);
    const currentMessage = newMessage;
    setNewMessage("");
    setIsLoading(true);
    
    try {
      // Call the AI chat function
      const response = await fetch('/.netlify/functions/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentMessage }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        const botResponse = {
          sender: "bot",
          message: data.message
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        // Fallback response if AI fails
        const fallbackResponse = {
          sender: "bot",
          message: "I'm sorry, I'm having trouble processing your request. Please try again or contact our team directly at connectme@myrsv.com."
        };
        setMessages(prev => [...prev, fallbackResponse]);
      }
    } catch (error) {
      console.error('Error calling AI chat:', error);
      // Fallback response on error
      const errorResponse = {
        sender: "bot",
        message: "I'm sorry, I'm having trouble connecting right now. Please contact our team directly at connectme@myrsv.com for assistance."
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
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
                    <p style={{ whiteSpace: 'pre-line' }}>{msg.message}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-orbitron font-bold text-xs text-white">AI</span>
                  </div>
                  <div className="p-3 rounded-lg bg-muted text-foreground/90">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-white/10">
              <form className="flex items-center" onSubmit={handleSendMessage}>
                <Input 
                  type="text" 
                  placeholder="Type your message..." 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 rounded-lg bg-background border border-white/20 text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                />
                <Button 
                  type="submit"
                  disabled={isLoading || !newMessage.trim()}
                  className="ml-2 p-2 rounded-full bg-gradient-to-r from-primary to-secondary disabled:opacity-50"
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
