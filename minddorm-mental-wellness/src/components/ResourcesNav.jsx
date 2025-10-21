import React from "react";
import { NavLink } from "react-router-dom";

export default function ResourcesNav() {
  const navItems = [
    { name: "Articles", path: "/articles_page" },
    { name: "Videos", path: "/video_page" },
    { name: "Audios", path: "/audio_page" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 mb-6">
      <div className="max-w-6xl mx-auto flex justify-center space-x-8 py-3">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `text-lg font-medium px-4 py-2 rounded-md transition-all duration-200 ${
                isActive
                  ? "text-white bg-blue-600 shadow-md"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
