import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Mic } from 'lucide-react';
import CommunityHeader from './CommunityHeader';

const ReachOutPage = () => {
  const [messageText, setMessageText] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'USER 1',
      text: "I've been dealing with depression for a while. Some days are really hard, but sharing here makes me feel less isolated.",
      likes: 12,
      isLiked: false,
      replies: []
    },
    {
      id: 2,
      user: 'USER 2',
      text: "Sending you strength. It's brave to open up like this.",
      likes: 8,
      isLiked: false,
      isResponse: true,
      parentId: 1
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
        : post
    ));
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Import CommunityHeader component here with activeTab="reach-out" */}
        <CommunityHeader activeTab="ReachOut" />
        {/* Content Area */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 min-h-96">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#2B5A7A]">Reach Out & Be Heard</h2>
            <div className="w-16 h-16">
              <span className="text-4xl">💬</span>
            </div>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className={post.isResponse ? 'ml-12' : ''}>
                <div className="mb-2">
                  <p className="font-bold text-sm text-[#2B5A7A]">{post.user}</p>
                </div>
                <div className="bg-[#EDF3F8] rounded-2xl p-5 relative">
                  <p className="text-sm text-slate-700">{post.text}</p>
                  <button className="absolute top-3 right-3 text-slate-400 hover:text-slate-600">
                    ⋮
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-3 ml-2">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-2 ${
                      post.isLiked ? 'text-red-500' : 'text-slate-400 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  {post.isResponse && (
                    <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="mt-8 flex items-center gap-3 bg-slate-50 rounded-full px-5 py-3 border border-slate-200">
            <input
              type="text"
              placeholder="Type here..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-sm"
            />
            <button className="text-slate-500 hover:text-slate-700">
              <Mic className="w-5 h-5" />
            </button>
            <button className="text-blue-500 hover:text-blue-600">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-lg text-[#2B5A7A] mt-8 py-4">
          Don't worry Be happy
        </footer>
      </div>
    </div>
  );
};

export default ReachOutPage;