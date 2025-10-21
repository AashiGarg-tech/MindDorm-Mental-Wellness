import React from "react";
import { NavLink } from "react-router-dom";

export default function ResourcesNav() {
  const navItems = [
    { name: "Articles", path: "/ArticlesPage" },
    { name: "Videos", path: "/VideoPage" },
    { name: "Audios", path: "/AudioPage" },
  ];

  return (
    <nav className="w-[400px] mx-auto bg-white shadow-sm border border-gray-200 rounded-xl py-2 mt-12">
      <div className="flex justify-center space-x-6">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `text-base font-medium px-3 py-1 rounded-md transition-all duration-200 ${
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
