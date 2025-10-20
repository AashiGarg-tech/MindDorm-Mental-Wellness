
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smile } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const navItems = [
    // 1. HOME & SUPPORT: Both should lead to /home (Your new Home Page)
    { name: 'Home', href: '/home' },
    { name: 'Support', href: '/home' }, // Directs to your new Home Page
    
    // 2. EXISTING ROUTES (Fixing case sensitivity to match App.jsx routes)
    { name: 'Chat', href: '/ChatPage' },
    { name: 'Community', href: '/AnnouncementsPage' }, 
    { name: 'Resources', href: '/ArticlesPage' },
    
    // 3. TRACK MOOD: Mapped to WellnessDashboard in App.jsx
    { name: 'Track Mood', href: '/WellnessDashboard' },
    
    // 4. DASHBOARD: Mapped to a dashboard route (usually the user dashboard)
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
                // location.pathname check needs to be smarter for complex routing,
                // but for now, we rely on the defined href paths matching App.jsx
                location.pathname === item.href || (item.name === 'Support' && location.pathname === '/home')
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
