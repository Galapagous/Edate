import { FaPeopleGroup } from 'react-icons/fa6';
import Profile from '../../assets/date/one-night.jpeg';
import { BiCompass, BiSearch, BiUser } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi2';
import { MdChatBubble } from 'react-icons/md';
import { BsGear } from 'react-icons/bs';
// import { useEffect, useState } from 'react';
// import { useMakerequest } from '../../hook/useMakeRequest';
import { useStore } from '../../hook/useContext';
import { GET_ADMIRER, GET_INVITATION } from '../../constant/resources';
import { useFetchData } from '../../hook/useFetchData';
import { useState } from 'react';
import Modal from '../../component/modals';
import AdmirerList from '../../component/dating/AdmirerList';

// Navigation options for filtering within the page
const navigationLink = [
  { title: 'All', icon: () => <HiHome/>},
  { title: 'Location', icon: () => <BiCompass/> },
  { title: 'Matches', icon: () => <BiUser/> },
  { title: 'Chat', icon: () => <MdChatBubble/> },
  { title: 'Settings', icon: () => <BsGear/> },
];
const Navigation = ({ setSearchParams }) => {
  const [showAdmirers, setShowAdmirers] = useState(false);
  const {data:admirerData } = useFetchData(GET_ADMIRER)
  const {data:requestData } = useFetchData(GET_INVITATION)

  console.log('first --->', requestData)

  const handleFilterClick = (filter) => {
    setSearchParams({ filter });
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
      <button onClick={()=>{setShowAdmirers(true)}} className="relative cursor-pointer flex items-center justify-center gap-2">
      <div className='relative border-2'>
          {admirerData?.admirersCount > 0 ? 
          <span className='absolute top-0 left-0 w-5 h-5 flex items-center justify-center text-white bg-red-500 p-[2px] rounded-full'>{admirerData?.admirersCount}</span>
          :
          null  }
          {admirerData?.admirersCount > 0 ? 
          <span className='absolute top-0 left-10 w-5 h-5 flex items-center justify-center text-white bg-blue-500 p-[2px] rounded-full'>{admirerData?.admirersCount}</span>
          :
          null  }
        </div>
        <img
          className="w-8 h-8 rounded-full object-cover border-2 border-orange-300 shadow-sm"
          src={Profile}
          alt="profile"
        />
        <p className="text-sm font-semibold text-gray-800">Imaculate</p>
      </button>
      <Modal showModal={showAdmirers} setShowModal={()=>{setShowAdmirers(false)}}>
        <div className="flex flex-col items-center justify-center gap-4">
          <AdmirerList admirers={admirerData?.admirers} requests={[]}/>
        </div>
      </Modal>
    </div>
  );
};

export default Navigation;