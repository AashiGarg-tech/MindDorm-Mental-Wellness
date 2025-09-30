import React from 'react';
import { Home, Smile } from 'lucide-react'; 

const Header = () => {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Chat', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Track Mood', href: '#' },
    { name: 'Dashboard', href: '#' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo/Brand Name */}
        <div className="flex items-center space-x-2 text-blue-600 font-semibold text-lg">
          <Smile className="w-6 h-6" />
          <span>MindDorm</span> {/* Placeholder Brand Name */}
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-gray-600 hover:text-blue-500 transition duration-150 ${
                item.name === 'Dashboard' ? 'font-bold text-blue-700 border-b-2 border-blue-700' : ''
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;