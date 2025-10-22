import React, { useState } from 'react';
import { Heart, MessageCircle, Flag } from 'lucide-react';
import CommunityHeader from './CommunityHeader';

const ListenLearnPage = () => {
  const [showFlagModal, setShowFlagModal] = useState(false);
  const [selectedStoryId, setSelectedStoryId] = useState(null);
  const [flagReason, setFlagReason] = useState('');

  const [stories, setStories] = useState([
    {
      id: 1,
      user: 'USER 1',
      avatar: 'https://via.placeholder.com/40',
      timestamp: '2 days ago',
      text: "A few years ago, I was overwhelmed by depression and anxiety. It felt impossible to get through each day. But with therapy, support from friends, and self-care, I've gradually found my way back. It's still a journey, but I'm stronger now.",
      likes: 24,
      comments: 5,
      isLiked: false,
      isFlagged: false,
    },
    {
      id: 2,
      user: 'USER 2',
      avatar: 'https://via.placeholder.com/40',
      timestamp: '5 days ago',
      text: "For a long time, I ignored my feelings and pushed through the stress. Eventually, it caught up with me — I experienced burnout and panic attacks. Seeking help was hard, but therapy and mindfulness practices changed my life. Now, I prioritize my mental health and feel more balanced every day.",
      likes: 18,
      comments: 3,
      isLiked: false,
    },
  ]);

  const [expandedStories, setExpandedStories] = useState({});

  const handleLike = (storyId) => {
    setStories(
      stories.map((story) =>
        story.id === storyId
          ? {
              ...story,
              likes: story.isLiked ? story.likes - 1 : story.likes + 1,
              isLiked: !story.isLiked,
            }
          : story
      )
    );
  };

  const handleFlagClick = (storyId) => {
    setSelectedStoryId(storyId);
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
    
    setStories(
      stories.map((story) =>
        story.id === selectedStoryId
          ? {
              ...story,
              isFlagged: true,
              flagReason: flagReason.trim()
            }
          : story
      )
    );
    setShowFlagModal(false);
    setSelectedStoryId(null);
    setFlagReason('');
  };

  const handleFlagCancel = () => {
    setShowFlagModal(false);
    setSelectedStoryId(null);
    setFlagReason('');
  };

  const toggleExpand = (storyId) => {
    setExpandedStories((prev) => ({
      ...prev,
      [storyId]: !prev[storyId],
    }));
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <CommunityHeader activeTab="ListenLearnPage" />

        {/* Content Area */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 min-h-96 relative overflow-hidden">
          <div className="flex items-center justify-between mb-10 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <img src="/listen-learn.png" alt="Listen & Learn" className="w-15 h-15 object-contain" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#2B5A7A]">Listen & Learn</h2>
                <p className="text-sm text-gray-500">Share and discover stories of resilience</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <h3 className="text-lg font-semibold text-[#2B5A7A]">Shared Stories</h3>
            <div className="flex -space-x-3">
              <img src="/images/avatar-1.png" alt="Community Member" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="/images/avatar-2.png" alt="Community Member" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="/images/avatar-3.png" alt="Community Member" className="w-8 h-8 rounded-full border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-[#E3F2FA] border-2 border-white flex items-center justify-center text-xs font-medium text-[#2B5A7A]">
                +5
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {stories.map((story) => (
              <div
                key={story.id}
                className="bg-gradient-to-b from-[#EDF3F8] to-white rounded-2xl p-6 hover:shadow-lg transition-all transform hover:scale-[1.01] border border-[#E3F2FA]/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <img
                      src={`/images/avatar-${story.id}.png`}
                      alt={story.user}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#2B5A7A]">{story.user}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#2B5A7A]/30"></span>
                      {story.timestamp}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 mb-4">
                  {expandedStories[story.id]
                    ? story.text
                    : story.text.length > 150
                    ? story.text.slice(0, 150) + '...'
                    : story.text}
                </p>

                {story.text.length > 150 && (
                  <button
                    onClick={() => toggleExpand(story.id)}
                    className="text-xs text-blue-500 hover:underline"
                  >
                    {expandedStories[story.id] ? 'Show less' : 'Read more'}
                  </button>
                )}

                <div className="flex items-center gap-6 mt-4">
                  <button
                    onClick={() => handleLike(story.id)}
                    className={`flex items-center gap-2 ${
                      story.isLiked
                        ? 'text-red-500'
                        : 'text-slate-400 hover:text-red-400'
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${story.isLiked ? 'fill-current' : ''}`}
                    />
                    <span className="text-sm font-medium">{story.likes}</span>
                  </button>

                  <button className="flex items-center gap-2 text-slate-400 hover:text-blue-500">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{story.comments}</span>
                  </button>

                  <button
                    onClick={() => handleFlagClick(story.id)}
                    className={`flex items-center gap-2 ${
                      story.isFlagged
                        ? 'text-yellow-500'
                        : 'text-slate-400 hover:text-yellow-500'
                    }`}
                    title={story.isFlagged ? 'Story has been flagged' : 'Flag this story'}
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
                  Flag this story
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

          {/* Post Your Story Button */}
          <div className="mt-10 pt-6 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-[#2B5A7A] mb-4 text-center">
              Your Voice Matters
            </h3>
            <button className="w-full bg-[#E8A287] text-white py-3 rounded-full font-medium hover:bg-[#D89277] transition flex items-center justify-center gap-2">
              POST YOURS
              <span className="text-xl">+</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 text-gray-600 text-sm">
                <p>Don't worry Be happy</p>
            </footer>
      </div>
    </div>
  );
};

export default ListenLearnPage;
