
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



import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smile } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/HomePage' },
    { name: 'Support', href: '/SupportPage' },
    { name: 'Chat', href: '/ChatPage' },
    { name: 'Community', href: '/AnnouncementsPage' },
    { name: 'Resources', href: '/ArticlesPage' },
    { name: 'Track Mood', href: '/TrackMoodPage' },
    { name: 'Dashboard', href: '/WellnessDashboard' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center h-14">

        {/* Logo/Brand Name */}
        <div className="flex items-center space-x-2 text-blue-600 font-semibold text-lg ml-4">
          <Smile className="w-6 h-6" />
          <Link to="/HomePage" className="hover:text-blue-800 transition-colors">BetterX</Link>
        </div>

        {/* Navigation Links */}
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
      </div>
    </header>
  );
};

export default Header;
