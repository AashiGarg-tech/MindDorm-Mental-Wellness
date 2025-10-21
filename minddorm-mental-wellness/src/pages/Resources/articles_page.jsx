// import SupportOptions from "../components/SupportOptions";
// import { Clock, Star } from "lucide-react";

// export default function ArticlesPage() {
//   const articles = [
//     {
//       title: "Understanding Anxiety: A Student’s Guide",
//       time: "8 min",
//       rating: 4.8,
//       desc: "Learn practical strategies to manage anxiety during exams and daily college life.",
//       tags: ["Anxiety", "Stress Management", "Study Tips"],
//       link: "https://mindful.org/understanding-anxiety-guide/",
//     },
//     {
//       title: "Building Resilience in University",
//       time: "12 min",
//       rating: 4.9,
//       desc: "Develop mental strength and bounce back from academic and personal challenges.",
//       tags: ["Resilience", "Mental Strength", "Growth"],
//       link: "https://positivepsychology.com/build-resilience-students/",
//     },
//     {
//       title: "The Power Mindfulness for Students",
//       time: "6 min",
//       rating: 4.7,
//       desc: "Simple mindfulness techniques to improve focus and reduce stress.",
//       tags: ["Mindfulness", "Meditation", "Focus"],
//       link: "https://www.mindful.org/mindfulness-for-students/",
//     },
//     {
//       title: "The Art of Stillness: Ancient Wisdom for Inner Peace",
//       time: "8 min",
//       rating: 4.8,
//       desc: "Explore timeless techniques from Indian heritage to cultivate peace amidst academic pressure.",
//       tags: ["Peace", "Indian Wisdom", "Heritage"],
//       link: "https://www.artofliving.org/in-en/meditation/inner-peace",
//     },
//     {
//       title: "Finding Your Inner Shakti: A Guide to Self-Power",
//       time: "12 min",
//       rating: 4.9,
//       desc: "Tap into your innate ‘Shakti’ energy to build confidence and navigate university life.",
//       tags: ["Self Power", "Divine", "Growth"],
//       link: "https://isha.sadhguru.org/in/en/wisdom/article/finding-your-inner-shakti",
//     },
//     {
//       title: "Cosmic Calm: Easing Anxiety with a Broader View",
//       time: "6 min",
//       rating: 4.7,
//       desc: "Learn to reduce anxiety through cosmic philosophies and find your place in the universe.",
//       tags: ["Philosophy", "Cosmic", "Peace"],
//       link: "https://chopracentermeditation.com/",
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-semibold text-center text-blue-900 mb-2">
//         Campus Mental Health Resources
//       </h1>
//       <p className="text-center text-gray-600 mb-8">
//         From exam stress to social anxiety — find helpful articles designed for students navigating college life.
//       </p>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {articles.map((article, i) => (
//           <div key={i} className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
//             <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
//             <div className="flex items-center text-sm text-gray-500 mb-2">
//               <Clock size={14} className="mr-1" /> {article.time}
//               <Star size={14} className="ml-3 mr-1 text-yellow-500" /> {article.rating}
//             </div>
//             <p className="text-gray-600 text-sm mb-3">{article.desc}</p>

//             <div className="flex flex-wrap gap-2 mb-4">
//               {article.tags.map((tag) => (
//                 <span key={tag} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-md">
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <a
//               href={article.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-700 transition"
//             >
//               Read Article
//             </a>
//           </div>
//         ))}
//       </div>

//       <SupportOptions />
//     </div>
//   );
// }
import ResourcesNav from "../../components/ResourcesNav";



import { Clock, Star } from "lucide-react";
import SupportOptions from "./support_condition";

const ArticlesPage = () => {
  const articles = [
    {
      title: "Understanding Anxiety: A Student’s Guide",
      time: "8 min",
      rating: 4.8,
      desc: "Learn practical strategies to manage anxiety during exams and daily college life.",
      tags: ["Anxiety", "Stress Management", "Study Tips"],
      link: "https://mindful.org/understanding-anxiety-guide/",
    },
    {
      title: "Building Resilience in University",
      time: "12 min",
      rating: 4.9,
      desc: "Develop mental strength and bounce back from academic and personal challenges.",
      tags: ["Resilience", "Mental Strength", "Growth"],
      link: "https://positivepsychology.com/build-resilience-students/",
    },
    {
      title: "The Power of Mindfulness for Students",
      time: "6 min",
      rating: 4.7,
      desc: "Simple mindfulness techniques to improve focus and reduce stress.",
      tags: ["Mindfulness", "Meditation", "Focus"],
      link: "https://www.mindful.org/mindfulness-for-students/",
    },
    {
      title: "The Art of Stillness: Ancient Wisdom for Inner Peace",
      time: "8 min",
      rating: 4.8,
      desc: "Explore timeless techniques from Indian heritage to cultivate peace amidst academic pressure.",
      tags: ["Peace", "Indian Wisdom", "Heritage"],
      link: "https://www.artofliving.org/in-en/meditation/inner-peace",
    },
    {
      title: "Finding Your Inner Shakti: A Guide to Self-Power",
      time: "12 min",
      rating: 4.9,
      desc: "Tap into your innate ‘Shakti’ energy to build confidence and navigate university life.",
      tags: ["Self Power", "Divine", "Growth"],
      link: "https://isha.sadhguru.org/in/en/wisdom/article/finding-your-inner-shakti",
    },
    {
      title: "Cosmic Calm: Easing Anxiety with a Broader View",
      time: "6 min",
      rating: 4.7,
      desc: "Learn to reduce anxiety through cosmic philosophies and find your place in the universe.",
      tags: ["Philosophy", "Cosmic", "Peace"],
      link: "https://chopracentermeditation.com/",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-center text-blue-900 mb-2">
        Campus Mental Health Resources
      </h1>
      <p className="text-center text-gray-600 mb-8">
        From exam stress to social anxiety — find helpful articles designed for students navigating college life.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>

            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Clock size={14} className="mr-1" /> {article.time}
              <Star size={14} className="ml-3 mr-1 text-yellow-500" />{" "}
              {article.rating}
            </div>

            <p className="text-gray-600 text-sm mb-3">{article.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-700 transition"
            >
              Read Article
            </a>
          </div>
        ))}
      </div>

      <SupportOptions />
    </div>
  );
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">  {/* 👈 Outer layout */}

      {/* 👇 Step 2: Add the Resources navigation bar here */}
      <ResourcesNav />

      {/* 👇 Step 3: Your page title */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Articles
      </h1>

      {/* 👇 Step 4: Your existing content — article cards, links, etc. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example: */}
        <a
          href="https://example.com/article1"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-white shadow-md rounded-xl hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Mindfulness in Daily Life
          </h2>
          <p className="text-gray-500 text-sm">
            Simple ways to stay calm and present throughout your day.
          </p>
        </a>

        {/* Add more article links/cards here */}
      </div>
    </div>
  );
}
