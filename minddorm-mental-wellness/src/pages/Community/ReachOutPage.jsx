import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Mic, Flag } from 'lucide-react';
import CommunityHeader from './CommunityHeader';

const ReachOutPage = () => {
  const [messageText, setMessageText] = useState('');
  const [showFlagModal, setShowFlagModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [flagReason, setFlagReason] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'USER 1',
      avatar: 'https://via.placeholder.com/40',
      timestamp: '2 days ago',
      text: "I've been dealing with depression for a while. Some days are really hard, but sharing here makes me feel less isolated.",
      likes: 12,
      isLiked: false,
      isFlagged: false,
      isResponse: false,
      parentId: null
    },
    {
      id: 2,
      user: 'USER 2',
      avatar: 'https://via.placeholder.com/40',
      timestamp: '1 day ago',
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
        ? {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked
          }
        : post
    ));
  };

  const handleFlagClick = (postId) => {
    setSelectedPostId(postId);
    setShowFlagModal(true);
    setFlagReason('');
  };

  const handleReasonChange = (e) => {
    const value = e.target.value;
    if (value === 'other') {
      setFlagReason('other:');
    } else {
      setFlagReason(value);
    }
  };

  const handleFlagSubmit = () => {
    if (!flagReason.trim()) return;
    
    setPosts(posts.map(post =>
      post.id === selectedPostId
        ? {
            ...post,
            isFlagged: true,
            flagReason: flagReason.trim()
          }
        : post
    ));
    setShowFlagModal(false);
    setSelectedPostId(null);
    setFlagReason('');
  };

  const handleFlagCancel = () => {
    setShowFlagModal(false);
    setSelectedPostId(null);
    setFlagReason('');
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <CommunityHeader activeTab="ReachOut" />

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-10 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <img src="/reach-out.png" alt="Reach Out" className="w-20 h-20 object-contain" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#2B5A7A]">Reach Out & Be Heard</h2>
                <p className="text-sm text-gray-500">A supportive environment for sharing experiences</p>
              </div>
            </div>
          </div>

          {/* Support Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { title: "Share Experiences", desc: "Express your thoughts" },
              { title: "Community Support", desc: "Connect with others" },
              { title: "Professional Resources", desc: "Access guidance" }
            ].map((action, index) => (
              <div key={index} className="bg-[#EDF3F8] p-4 rounded-xl">
                <h3 className="font-semibold text-[#2B5A7A] mb-1">{action.title}</h3>
                <p className="text-sm text-slate-600">{action.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className={`rounded-2xl p-5 bg-[#EDF3F8] relative ${
                  post.isResponse ? 'ml-10 border-l-4 border-[#B5D8EB] pl-4' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={post.avatar}
                    alt={post.user}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-sm text-[#2B5A7A]">{post.user}</p>
                    <p className="text-xs text-slate-500">{post.timestamp}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 mb-3">{post.text}</p>

                <div className="flex items-center gap-4 mt-3">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-2 ${
                      post.isLiked ? 'text-red-500' : 'text-slate-400 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>

                  <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Reply</span>
                  </button>

                  <button
                    onClick={() => handleFlagClick(post.id)}
                    className={`flex items-center gap-2 ${
                      post.isFlagged
                        ? 'text-yellow-500'
                        : 'text-slate-400 hover:text-yellow-500'
                    }`}
                    title={post.isFlagged ? 'Post has been flagged' : 'Flag this post'}
                  >
                    <Flag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Flag Modal */}
          {showFlagModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                <h3 className="text-lg font-semibold text-[#2B5A7A] mb-4">
                  Flag this post
                </h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Please select a reason for flagging:
                  </label>
                  <select
                    value={flagReason.startsWith('other:') ? 'other' : flagReason}
                    onChange={handleReasonChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a reason</option>
                    <option value="inappropriate">Inappropriate Content</option>
                    <option value="harassment">Harassment</option>
                    <option value="spam">Spam</option>
                    <option value="hate_speech">Hate Speech</option>
                    <option value="misinformation">Misinformation</option>
                    <option value="other">Other</option>
                  </select>
                  {flagReason.startsWith('other:') && (
                    <textarea
                      placeholder="Please specify the reason..."
                      className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows="3"
                      value={flagReason.replace('other:', '').trim()}
                      onChange={(e) => setFlagReason(`other: ${e.target.value}`)}
                    />
                  )}
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={handleFlagCancel}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleFlagSubmit}
                    disabled={!flagReason}
                    className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
                      flagReason
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Submit Flag
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Message Input */}
          <div className="mt-10 pt-6 border-t border-slate-200">
            <label className="block text-sm font-medium text-[#2B5A7A] mb-2">
              Share what's on your mind
            </label>
            <div className="flex items-center gap-3 bg-slate-50 rounded-full px-5 py-3 border border-slate-200">
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
        </div>

        <footer className="text-center mt-10 text-gray-600 text-sm">
                <p>Don't worry Be happy</p>
            </footer>
      </div>
    </div>
  );
};

export default ReachOutPage;
