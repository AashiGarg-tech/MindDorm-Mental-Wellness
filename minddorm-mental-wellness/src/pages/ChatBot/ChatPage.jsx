import React, { useState } from 'react';

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey, I'm here for you whenever you need. How are you feeling right now?",
      isBot: true
    }
  ]);

  const moreOptions = [
    "Conduct a meditation session with me",
    "The feeling involves, can you help me calm down?",
    "I'm feeling lonely, can we talk?",
    "I'm stressed about work, what can I do?"
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: message, isBot: false }]);
      setMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: "I understand how you're feeling. Let's work through this together.",
          isBot: true
        }]);
      }, 1000);
    }
  };

  const handleOptionClick = (option) => {
    setMessages([...messages, { id: messages.length + 1, text: option, isBot: false }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: "That's a great choice. Let me help you with that.",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Mood Buttons */}
        <div className="flex justify-center gap-3 mb-6">
          <button className="bg-[#E8B4F5] text-[#000459] px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#D8A4E5] transition">
            Need Motivation
          </button>
          <button className="bg-[#FFB347] text-[#000459] px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#EFA337] transition">
            Not feeling good
          </button>
          <button className="bg-[#A8E6CF] text-[#000459] px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#98D6BF] transition">
            I need some tips
          </button>
        </div>

        {/* Chat Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-[#D6E6F2] p-6 mb-6">
          {/* Chat Messages */}
          <div className="h-64 overflow-y-auto mb-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-md px-5 py-3 rounded-2xl ${
                  msg.isBot 
                    ? 'bg-[#C8E6F5] text-[#000459]' 
                    : 'bg-[#2B3990] text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex items-center gap-3 bg-[#F4F8FB] rounded-full px-4 py-3 border border-[#D6E6F2]">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type here..."
              className="flex-1 bg-transparent outline-none text-[#000459] placeholder-slate-400"
            />
            <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-slate-100 transition">
              <svg className="w-4 h-4 text-[#000459]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-slate-100 transition">
              <svg className="w-4 h-4 text-[#000459]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <button 
              onClick={handleSendMessage}
              className="w-8 h-8 rounded-full bg-[#4A9FF5] flex items-center justify-center hover:bg-[#3A8FE5] transition"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* More Options Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#000459] mb-4">More Options</h2>
          <div className="bg-white rounded-3xl shadow-lg border border-[#D6E6F2] p-6">
            <div className="space-y-3">
              {moreOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full bg-[#5EBDAC] hover:bg-[#4EAD9C] text-white text-left px-5 py-3 rounded-lg font-medium transition flex items-center gap-2"
                >
                  <span className="text-xl">▶</span>
                  <span>"{option}"</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-lg text-[#47708F] py-8 mt-12">
        Don't worry Be happy
      </footer>
    </div>
  );
};

export default ChatPage;