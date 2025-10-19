import React, { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import CommunityHeader from './CommunityHeader';

const ListenLearnPage = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      user: 'USER 1',
      text: "A few years ago, I was overwhelmed by depression and anxiety. It felt impossible to get through each day. But with therapy, support from friends, and self-care, I've gradually found my way back. It's still a journey, but I'm stronger now.",
      likes: 24,
      comments: 5,
      isLiked: false,
    },
    {
      id: 2,
      user: 'USER 2',
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
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 min-h-96">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#2B5A7A]">Listen & Learn</h2>
            <div className="w-16 h-16">
              <span className="text-4xl">💡</span>
            </div>
          </div>

          <div className="space-y-6">
            {stories.map((story) => (
              <div key={story.id}>
                <div className="mb-2">
                  <p className="font-bold text-sm text-[#2B5A7A]">{story.user}</p>
                </div>

                <div className="bg-[#EDF3F8] rounded-2xl p-6 relative">
                  <p className="text-sm text-slate-700 pr-8">
                    {expandedStories[story.id]
                      ? story.text
                      : story.text.length > 150
                      ? story.text.slice(0, 150) + '...'
                      : story.text}
                  </p>

                  <button
                    onClick={() => toggleExpand(story.id)}
                    className="absolute bottom-4 right-4 text-slate-400 hover:text-slate-600"
                  >
                    {expandedStories[story.id] ? '⌃' : '⌄'}
                  </button>
                </div>

                <div className="flex items-center gap-6 mt-4 ml-2">
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
                </div>
              </div>
            ))}
          </div>

          {/* Post Your Story Button */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <button className="w-full bg-[#E8A287] text-white py-3 rounded-full font-medium hover:bg-[#D89277] transition flex items-center justify-center gap-2">
              POST YOURS
              <span className="text-xl">+</span>
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

export default ListenLearnPage;
