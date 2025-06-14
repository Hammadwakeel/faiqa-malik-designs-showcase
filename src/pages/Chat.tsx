
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { handleChatRequest } from '@/api/chat';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Faiqa's AI assistant. I can answer questions about her fashion design background, skills, experience, and contact information. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await handleChatRequest(currentMessage);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-midnight-navy">
            Chat with Faiqa's AI Assistant
          </h1>
          <p className="text-xl text-slate-gray font-inter max-w-3xl mx-auto">
            Ask me anything about Faiqa's fashion design background, skills, experience, and more!
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-dusty-lavender/20 overflow-hidden animate-fade-in">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                } animate-fade-in`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isUser 
                    ? 'bg-dusty-lavender text-white' 
                    : 'bg-midnight-navy text-white'
                }`}>
                  {message.isUser ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isUser
                    ? 'bg-dusty-lavender text-white ml-auto'
                    : 'bg-lavender-bg text-midnight-navy'
                }`}>
                  <p className="text-sm font-inter">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.isUser ? 'text-white/70' : 'text-slate-gray'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start space-x-3 animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-midnight-navy text-white flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="bg-lavender-bg text-midnight-navy px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-midnight-navy rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-midnight-navy rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-midnight-navy rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-dusty-lavender/20 p-4">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Faiqa's experience, skills, education..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-midnight-navy hover:bg-midnight-navy/90 text-white px-4"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Sample Questions */}
        <div className="mt-8 text-center animate-fade-in">
          <h3 className="text-lg font-playfair font-semibold text-midnight-navy mb-4">
            Try asking:
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "What is Faiqa's educational background?",
              "What are her key skills?",
              "Tell me about her work experience",
              "How can I contact Faiqa?"
            ].map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setInputMessage(question)}
                className="text-sm border-dusty-lavender text-midnight-navy hover:bg-dusty-lavender hover:text-white transition-all duration-200"
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
