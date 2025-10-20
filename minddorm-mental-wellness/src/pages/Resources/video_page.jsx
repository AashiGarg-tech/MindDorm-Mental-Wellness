import SupportOptions from "./support_condition";
import { Clock, PlayCircle } from "lucide-react";

export default function VideosPage() {
  const videos = [
    {
      title: "Full Self Healing Meditation - OM SHANTI",
      views: "2.8M views",
      time: "15:40",
      desc: "This 15-minute basic meditation video is ideal for inner peace and calm.",
      thumb: "https://i.ytimg.com/vi/abc123/default.jpg",
      link: "https://www.youtube.com/watch?v=Jv_MZQkswPQ",
    },
    {
      title: "Morning Surya Namaskar Meditation",
      views: "803K views",
      time: "22:22",
      desc: "Practice the 12 postures of Surya Namaskar with sacred Vedic chants.",
      thumb: "https://i.ytimg.com/vi/XYZ456/default.jpg",
      link: "https://www.youtube.com/watch?v=QGHJ9pWzuLk",
    },
    {
      title: "Progressive Muscle Relaxation",
      views: "3.9M views",
      time: "15:53",
      desc: "Learn this evidence-based technique to release physical tension and stress.",
      thumb: "https://i.ytimg.com/vi/GHI789/default.jpg",
      link: "https://www.youtube.com/watch?v=1ZrE8GJ7v7s",
    },
    {
      title: "10-Minute Gayatri Mantra for Mind & Soul",
      views: "3M views",
      time: "10:50",
      desc: "Chanting Gayatri Mantra regularly can establish and stabilize the mind.",
      thumb: "https://i.ytimg.com/vi/DEF012/default.jpg",
      link: "https://www.youtube.com/watch?v=29CrZ8KcIks",
    },
    {
      title: "Exam Success Meditation",
      views: "1.6M views",
      time: "10:01",
      desc: "Quick breathing techniques to calm pre-exam nerves.",
      thumb: "https://i.ytimg.com/vi/PQR678/default.jpg",
      link: "https://www.youtube.com/watch?v=DaGpS8VH7yQ",
    },
    {
      title: "10-Minute Morning Yoga for Mental Clarity",
      views: "68K views",
      time: "10:01",
      desc: "Start your day with gentle movements to center your mind and body.",
      thumb: "https://i.ytimg.com/vi/STU901/default.jpg",
      link: "https://www.youtube.com/watch?v=8GQK4e2mDqg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-center text-blue-900 mb-2">
        Campus Mental Health Resources
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Watch mindfulness and relaxation videos designed to help you de-stress and focus.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <div className="relative">
              <img src={v.thumb} alt={v.title} className="w-full h-40 object-cover" />
              <a
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex justify-center items-center bg-black/40 hover:bg-black/60 transition"
              >
                <PlayCircle size={48} className="text-white" />
              </a>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{v.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{v.desc}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{v.views}</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {v.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SupportOptions />
    </div>
  );
}
