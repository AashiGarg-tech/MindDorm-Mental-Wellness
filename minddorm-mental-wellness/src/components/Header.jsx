
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smile } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/HomePage' },
    { name: 'Support', href: '/support' },
    { name: 'Chat', href: '/ChatPage' },
    { name: 'Community', href: '/AnnouncementsPage' },
    { name: 'Resources', href: '/ArticlesPage' },
    { name: 'Track Mood', href: '/wellness' },
    { name: 'Dashboard', href: '/WellnessDashboard' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo/Brand Name */}
        <div className="flex items-center space-x-2 text-blue-600 font-semibold text-lg">
          <Smile className="w-6 h-6" />
          <span>BetterX</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-gray-600 hover:text-blue-500 transition duration-150 ${
                location.pathname === item.href
                  ? 'font-bold text-blue-700 border-b-2 border-blue-700'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;