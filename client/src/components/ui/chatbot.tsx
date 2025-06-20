import React, { useState, useRef, useEffect } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Card, CardContent } from './card';
import { Send, X, MessageCircle, User, Mail, Phone } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! 👋 I'm RSV Infotech's AI assistant. I'm here to help you with information about our IT services. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const addMessage = (text: string, isUser: boolean = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    addMessage(userMessage, true);
    setIsLoading(true);

    try {
      const response = await fetch('/.netlify/functions/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (data.success) {
        addMessage(data.message);
        
        // Check if the AI response suggests collecting contact info
        const contactKeywords = ['contact', 'reach out', 'get in touch', 'email', 'phone', 'details'];
        const shouldShowContactForm = contactKeywords.some(keyword => 
          data.message.toLowerCase().includes(keyword)
        );
        
        if (shouldShowContactForm && !showContactForm) {
          setShowContactForm(true);
        }
      } else {
        addMessage("I'm sorry, I'm having trouble processing your request. Please try again.");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage("I'm sorry, I'm having trouble connecting right now. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingContact) return;

    setIsSubmittingContact(true);

    try {
      const response = await fetch('/.netlify/functions/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'submit_contact',
          contactData: contactForm
        }),
      });

      const data = await response.json();

      if (data.success) {
        addMessage(data.message);
        setShowContactForm(false);
        setContactForm({ name: '', email: '', phone: '', message: '' });
      } else {
        addMessage(data.message || "I'm having trouble sending your message. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      addMessage("I'm sorry, I'm having trouble sending your message. Please try again.");
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 z-40 w-96 h-[500px] shadow-xl border-0">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">RSV Infotech AI</h3>
                    <p className="text-xs text-blue-100">Online • Ready to help</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:bg-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800 border'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 border rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Contact Form */}
            {showContactForm && (
              <div className="p-4 bg-white border-t">
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <User className="h-4 w-4" />
                    <span>Please provide your details:</span>
                  </div>
                  
                  <Input
                    placeholder="Your name *"
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="text-sm"
                  />
                  
                  <Input
                    type="email"
                    placeholder="Your email *"
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="text-sm"
                  />
                  
                  <Input
                    type="tel"
                    placeholder="Your phone (optional)"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="text-sm"
                  />
                  
                  <textarea
                    placeholder="Your message *"
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    required
                    className="w-full p-2 border rounded-md text-sm resize-none"
                    rows={3}
                  />
                  
                  <div className="flex space-x-2">
                    <Button
                      type="submit"
                      disabled={isSubmittingContact}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm"
                    >
                      {isSubmittingContact ? 'Sending...' : 'Send Message'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowContactForm(false)}
                      className="text-sm"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Input Area */}
            {!showContactForm && (
              <div className="p-4 bg-white border-t">
                <div className="flex space-x-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-blue-600 hover:bg-blue-700"
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}
