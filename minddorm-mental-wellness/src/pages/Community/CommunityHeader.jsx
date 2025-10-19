import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CommunityHeader = ({ activeTab }) => {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    if (postText.trim()) {
      console.log('Posting:', postText);
      setPostText('');
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold text-[#1B4B6B] mb-1">MindDorm</h1>
          <h2 className="text-3xl font-bold text-[#2B5A7A]">Community</h2>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 mb-1">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-200">
              <span className="text-2xl">🏠</span>
            </div>
          </div>
          <p className="text-sm font-semibold text-[#2B5A7A]">MindDorm</p>
          <p className="text-xs text-slate-600">● xxxx members</p>
        </div>
      </div>

      {/* Post Input Section */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-slate-200">
        <input
          type="text"
          placeholder="what's on your mind...."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handlePost()}
          className="w-full px-4 py-3 border border-slate-300 rounded-full mb-3 text-sm focus:outline-none focus:border-[#E8A287]"
        />
        <button
          type="button"
          onClick={handlePost}
          className="bg-[#E8A287] text-white px-8 py-2 rounded-full font-medium hover:bg-[#D89277] transition"
        >
          POST
        </button>

        <div className="mt-4 pt-4 border-t border-slate-200">
          <button
            type="button"
            className="bg-[#E8A287] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#D89277] transition flex items-center gap-2"
          >
            Share your story
            <span className="text-lg">+</span>
          </button>
          <p className="text-xs text-[#2B5A7A] mt-2">
            Share your story, listen to others, or just breathe.<br />
            No pressure.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Link
          to="/AnnouncementsPage"
          className={`p-6 rounded-2xl transition ${
            activeTab === 'AnnouncementsPage'
              ? 'bg-[#FFF9E6] border-2 border-[#E8D4A0]'
              : 'bg-white border border-slate-200 hover:shadow-md'
          }`}
        >
          <h3 className="text-lg font-bold text-[#2B5A7A] mb-2">Announcements</h3>
          <p className="text-xs text-slate-600">
            Important announcements, news, important dates related to mental health
          </p>
        </Link>

        <Link
          to="/ListenLearnPage"
          className={`p-6 rounded-2xl transition ${
            activeTab === 'ListenLearnPage'
              ? 'bg-[#E8F0FF] border-2 border-[#B8D4F1]'
              : 'bg-white border border-slate-200 hover:shadow-md'
          }`}
        >
          <h3 className="text-lg font-bold text-[#2B5A7A] mb-2">Listen & Learn</h3>
          <p className="text-xs text-slate-600">
            Stories, insights, and gentle advice to feel understood and informed.
          </p>
        </Link>

        <Link
          to="/ReachOutPage"
          className={`p-6 rounded-2xl transition ${
            activeTab === 'ReachOutPage'
              ? 'bg-[#E8F5FF] border-2 border-[#B8D9F1]'
              : 'bg-white border border-slate-200 hover:shadow-md'
          }`}
        >
          <h3 className="text-lg font-bold text-[#2B5A7A] mb-2">Reach Out & Be Heard</h3>
          <p className="text-xs text-slate-600">
            Start a conversation, ask for support, or simply express what's on your mind.
          </p>
        </Link>
      </div>
    </>
  );
};

export default CommunityHeader;
