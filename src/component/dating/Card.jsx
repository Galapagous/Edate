import { useState } from 'react';
import { FiMessageSquare, FiMessageCircle, FiHeart } from 'react-icons/fi'; // Icons for chat, comment, like
import Modal from '../modals';
import { BiUser } from 'react-icons/bi';
import { useMakerequest } from '../../hook/useMakeRequest';
import { ADMIRER_URL } from '../../constant/resources';
import { useStore } from '../../hook/useContext';

const Card = ({ user }) => {
  // Function to get first 6 words of bio
  const [showModal, setShowModal] = useState(false)
  const getShortBio = (bio) => {
    return bio.split(' ').slice(0, 6).join(' ') + (bio.split(' ').length > 6 ? '...' : '');
  };
  const makeRequest = useMakerequest()
  const userData = useStore()
  const [loading, setLoading] = useState(false)

  console.log('first -->', userData?.userInfo?.profile?.slug)


  const handleAdmire = ()=>{
    const slug = userData?.userInfo?.profile?.slug
    setLoading(true)
    makeRequest(
      ADMIRER_URL + `/${slug}`,
      "POST",
      {
        userId: "1234567"
      },
      (data)=>{console.log(data)},
      (error)=>{console.log(error)},
      ()=>{setLoading(false)}
    )
  }


  return (
    <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
      {/* Background Image */}
      <div
        className="w-full h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${user?.avatar})` }}
      >
        {/* Hover Overlay with Icons */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex justify-end items-start p-4 opacity-0 group-hover:opacity-100">
          <div className="flex flex-col gap-3">
            {/* <button className="text-white hover:text-orange-300 transition-colors">
              <FiMessageSquare size={24} />
            </button> */}
            <button onClick={()=>{setShowModal(true)}} className="text-white hover:text-orange-300 transition-colors">
              <FiMessageCircle size={24} />
            </button>
            <button className="text-white hover:text-orange-300 transition-colors">
              <FiHeart size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* User Info and Bio */}
      <div className="p-4">
        {/* Bio - First 6 words */}
        <p className="text-gray-600 text-sm mb-3">{getShortBio(user?.bio)}</p>

        {/* Profile Image and Name */}
        <div className="flex items-center gap-2">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-orange-300 shadow-sm"
          />
          <h2 className="text-lg font-semibold text-gray-800">{user?.name}</h2>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={()=>{setShowModal(!showModal)}}>
        <div className='flex items-center justify-center flex-col'>
            <BiUser className='mb-2 text-2xl text-main_200 text-center font-bold'/>
            <h1 className='text-xl text-main_200 font-semibold'>You dont have this person as friend</h1>
            <p className='text-lg text-gray-700'>Send them a friend request to proceed</p>
            <button onClick={handleAdmire} className='mt-2 px-4 py-2 bg-main_200 text-white font-semibold'>{loading ? '...loading' : "send request"}</button>
        </div>
      </Modal>
    </div>
  );
};

export default Card;