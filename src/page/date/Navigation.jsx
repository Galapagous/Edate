// import React from 'react';
// import { navigationLink } from './data';
// import Profile from '../../assets/date/one-night.jpeg';
// import { BiSearch } from 'react-icons/bi';

// const Navigation = () => {
//   return (
//     <div className="flex sticky top-0 left-0 items-center justify-between w-full bg-white text-orange-600 border-b-2 border-orange-300 p-4 shadow-md">
//       {/* Left - Search Bar */}
//       <div className="w-72 sm:flex hidden">
//         <form className="flex items-center bg-gray-100 border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-orange-200 transition-all">
//           <input
//             className="w-full bg-transparent outline-none px-3 py-2 text-gray-700 placeholder-gray-500"
//             type="text"
//             placeholder="Search..."
//           />
//           <button className="p-2 text-orange-600 hover:text-orange-800 transition-colors">
//             <BiSearch size={20} />
//           </button>
//         </form>
//       </div>

//       {/* Main - Navigation Links */}
//       <div className="flex items-center justify-center gap-8">
//         {navigationLink.map((navigationData, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center group cursor-pointer"
//           >
//             <div className="text-2xl text-orange-600 group-hover:text-orange-800 transition-colors">
//               <navigationData.icon />
//             </div>
//             <button className="text-sm font-medium text-orange-600 group-hover:text-orange-800 transition-colors">
//               {navigationData.title}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Right - Profile */}
//       <div className="flex items-center justify-center gap-2">
//         <img
//           className="w-8 h-8 rounded-full object-cover border-2 border-orange-300 shadow-sm"
//           src={Profile}
//           alt="profile"
//         />
//         <p className="text-sm font-semibold text-gray-800">Imaculate</p>
//       </div>
//     </div>
//   );
// };

// export default Navigation;

// ------- version 2 ----------
import { FaPeopleGroup } from 'react-icons/fa6';
import Profile from '../../assets/date/one-night.jpeg';
import { BiCompass, BiSearch, BiUser } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi2';
import { MdChatBubble } from 'react-icons/md';
import { BsGear } from 'react-icons/bs';

// Navigation options for filtering within the page
const navigationLink = [
  { title: 'All', icon: () => <HiHome/>},
  { title: 'Location', icon: () => <BiCompass/> },
  { title: 'Matches', icon: () => <BiUser/> },
  { title: 'Chat', icon: () => <MdChatBubble/> },
  { title: 'Settings', icon: () => <BsGear/> },
];

const Navigation = ({ setSearchParams }) => {
  const handleFilterClick = (filter) => {
    setSearchParams({ filter }); // Update searchParams with the selected filter
  };

  return (
    <div className="flex sticky top-0 left-0 items-center justify-between w-full bg-white text-orange-600 border-b-2 border-orange-300 p-4 shadow-md">
      {/* Left - Search Bar */}
      <div className="w-72 sm:flex hidden">
        <form className="flex items-center bg-gray-100 border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-orange-200 transition-all">
          <input
            className="w-full bg-transparent outline-none px-3 py-2 text-gray-700 placeholder-gray-500"
            type="text"
            placeholder="Search..."
          />
          <button className="p-2 text-orange-600 hover:text-orange-800 transition-colors">
            <BiSearch size={20} />
          </button>
        </form>
      </div>

      {/* Main - Navigation Links */}
      <div className="flex items-center justify-center gap-8">
        {navigationLink.map((navigationData, index) => (
          <div
            key={index}
            onClick={() => handleFilterClick(navigationData.title)}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="sm:text-2xl text-base text-orange-600 group-hover:text-orange-800 transition-colors">
              <navigationData.icon />
            </div>
            <button className="text-sm font-medium text-orange-600 group-hover:text-orange-800 transition-colors">
              {navigationData.title}
            </button>
          </div>
        ))}
      </div>

      {/* Right - Profile */}
      <div className="flex items-center justify-center gap-2">
        <img
          className="w-8 h-8 rounded-full object-cover border-2 border-orange-300 shadow-sm"
          src={Profile}
          alt="profile"
        />
        <p className="text-sm font-semibold text-gray-800">Imaculate</p>
      </div>
    </div>
  );
};

export default Navigation;