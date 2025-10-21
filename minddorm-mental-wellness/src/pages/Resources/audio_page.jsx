import SupportOptions from "./support_condition";
import { Music2, Clock, Play } from "lucide-react";
import ResourcesNav from "../../components/ResourcesNav";

export default function AudioPage() {
  const audios = [
    {
      title: "Study Focus: Lo-Fi Beats",
      desc: "Gentle lofi music to help you concentrate while studying.",
      tracks: "500 tracks",
      duration: "18hr",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS",
    },
    {
      title: "Calming Nature Sounds",
      desc: "Peaceful sounds of rain, ocean waves, and forest ambiance for relaxation.",
      tracks: "305 tracks",
      duration: "14hr",
      link: "https://open.spotify.com/playlist/37i9dQZF1DWU0ScTcjJBdj",
    },
    {
      title: "Meditation & Mindfulness",
      desc: "Peaceful meditations and ambient sounds for mindfulness practice.",
      tracks: "182 tracks",
      duration: "8hr",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX3PIPIT6lEg5",
    },
    {
      title: "Ragas for Relaxation",
      desc: "Immerse yourself in the timeless beauty of Indian classical ragas.",
      tracks: "155 tracks",
      duration: "12hr",
      link: "https://open.spotify.com/playlist/37i9dQZF1DXb9LIXaj5WhL",
    },
    {
      title: "Sacred Flute Meditations",
      desc: "Serene and soulful melodies of the Bansuri (Indian bamboo flute).",
      tracks: "110 tracks",
      duration: "9hr",
      link: "https://open.spotify.com/playlist/37i9dQZF1DWYtBDn1WXj6B",
    },
    {
      title: "Echoes of the Himalayas",
      desc: "Grounding Vedic chants and resonant vibrations for mental focus.",
      tracks: "190 tracks",
      duration: "1hr",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-center text-blue-900 mb-2">
        Campus Mental Health Resources
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Listen to calming audio designed for study focus, relaxation, and mindfulness.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {audios.map((a, i) => (
          <div key={i} className="bg-gradient-to-b from-blue-50 to-blue-100 p-5 rounded-2xl shadow-md hover:shadow-lg transition text-center">
            <Music2 className="text-blue-600 mx-auto mb-3" size={24} />
            <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{a.desc}</p>
            <div className="flex justify-center gap-6 text-sm text-gray-500 mb-4">
              <span>{a.tracks}</span>
              <span className="flex items-center gap-1"><Clock size={14}/> {a.duration}</span>
            </div>
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
            >
              <Play size={16}/> Play
            </a>
          </div>
        ))}
      </div>

      <SupportOptions />
    </div>
  );
}
