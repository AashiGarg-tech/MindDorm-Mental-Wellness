
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Smile } from 'lucide-react';

// const Header = () => {
//   const location = useLocation();

//   const navItems = [
//     // 1. HOME & SUPPORT: Both should lead to /home (Your new Home Page)
//     { name: 'Home', href: '/home' },
//     { name: 'Support', href: '/home' }, // Directs to your new Home Page
    
//     // 2. EXISTING ROUTES (Fixing case sensitivity to match App.jsx routes)
//     { name: 'Chat', href: '/ChatPage' },
//     { name: 'Community', href: '/AnnouncementsPage' }, 
//     { name: 'Resources', href: '/ArticlesPage' },
    
//     // 3. TRACK MOOD: Mapped to WellnessDashboard in App.jsx
//     { name: 'Track Mood', href: '#' },
    
//     // 4. DASHBOARD: Mapped to a dashboard route (usually the user dashboard)
//     { name: 'Dashboard', href: '/WellnessDashboard' },
//   ];

//   return (
//     <header className="bg-white border-b border-gray-200 shadow-sm">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">

//         {/* Logo/Brand Name */}
//         <div className="flex items-center space-x-2 text-blue-600 font-semibold text-lg">
//           <Smile className="w-6 h-6" />
//           <span>BetterX</span>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-6 text-sm">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.href}
//               className={`text-gray-600 hover:text-blue-500 transition duration-150 ${
//                 // location.pathname check needs to be smarter for complex routing,
//                 // but for now, we rely on the defined href paths matching App.jsx
//                 location.pathname === item.href || (item.name === 'Support' && location.pathname === '/home')
//                   ? 'font-bold text-blue-700 border-b-2 border-blue-700'
//                   : ''
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smile, UserCircle, LogOut, LayoutDashboard, User } from 'lucide-react'; // Imported 'User' icon

// The component receives the onSignOut function from its parent (ProtectedLayout)
const Header = ({ onSignOut }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/HomePage' },
    { name: 'Support', href: '/SupportPage' },
    { name: 'Chat', href: '/ChatPage' },
    { name: 'Community', href: '/AnnouncementsPage' },
    { name: 'Resources', href: '/ArticlesPage' },
    { name: 'Track Mood', href: '/TrackMoodPage' },
    { name: 'Dashboard', href: '/WellnessDashboard' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Handles sign out action: calls the prop function and closes the menu
  const handleSignOutClick = () => {
    if (onSignOut) {
        onSignOut();
    }
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center h-14">

        {/* Logo/Brand Name */}
        <div className="flex items-center space-x-2 text-blue-600 font-semibold text-lg ml-4">
          <Smile className="w-6 h-6" />
          <Link to="/" className="hover:text-blue-800 transition-colors">BetterX</Link>
        </div>

        {/* Navigation Links and Profile Menu Container */}
        <div className="flex items-center space-x-6">
            {/* Main Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm px-2 py-4 text-gray-600 hover:text-blue-500 transition-colors ${
                    location.pathname === item.href
                      ? 'font-semibold text-blue-700 border-b-2 border-blue-700'
                      : 'border-b-2 border-transparent hover:border-blue-200'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* User Profile Icon and Dropdown */}
            <div className="relative">
                <button 
                    onClick={toggleMenu} 
                    className="p-1 rounded-full text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                    aria-expanded={isMenuOpen}
                    aria-haspopup="true"
                >
                    <UserCircle className="w-8 h-8" />
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-30 overflow-hidden">
                        
                        {/* 💥 NEW: My Profile Link */}
                        <Link 
                            to="/UserProfile" 
                            onClick={handleLinkClick} 
                            className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-100"
                        >
                            <User className="w-4 h-4" />
                            <span>My Profile</span>
                        </Link>

                        {/* My Dashboard Link */}
                        <Link 
                            to="/WellnessDashboard" 
                            onClick={handleLinkClick} 
                            className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-100"
                        >
                            <LayoutDashboard className="w-4 h-4" />
                            <span>My Dashboard</span>
                        </Link>

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-0"></div>

                        {/* Sign Out Button */}
                        <button
                            onClick={handleSignOutClick} 
                            className="flex items-center space-x-3 px-4 py-2 w-full text-left text-red-500 hover:bg-red-50 transition duration-100"
                        >
                            <LogOut className="w-4 h-4" />
                            <span>Sign Out</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
