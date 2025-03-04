import { useState } from 'react';
import { FiMessageSquare, FiMessageCircle, FiHeart } from 'react-icons/fi'; // Icons for chat, comment, like
import Modal from '../modals';
import { BiUser } from 'react-icons/bi';
import { useMakerequest } from '../../hook/useMakeRequest';
import { ADMIRER_URL, INVITE_URL } from '../../constant/resources';
import { useStore } from '../../hook/useContext';

const Card = ({ user }) => {
  const [activeSelection, setActiveSelection] = useState({})
  // Function to get first 6 words of bio
  const [showModal, setShowModal] = useState(false)
  const getShortBio = (bio) => {
    return bio?.split(' ').slice(0, 6).join(' ') + (bio?.split(' ').length > 6 ? '...' : '');
  };
  const makeRequest = useMakerequest()
  const userData = useStore()
  const [loading, setLoading] = useState(false)

  // console.log('first -->', userData?.userInfo?.profile?.slug)


  const handleInvite = ()=>{
    setLoading(true)
    makeRequest(
      INVITE_URL,
      "POST",
      {
        slug: activeSelection
      },
      (data)=>{console.log(data)},
      (error)=>{console.log(error)},
      ()=>{
        setLoading(false)
        setShowModal(false)
      }
    )
  }

  const handleLike = (user)=>{
    setLoading(true)
    makeRequest(
      ADMIRER_URL,
      "POST",
      {
        slug: user
      },
      (data)=>{console.log(data)},
      (error)=>{console.log(error)},
      ()=>{
        setLoading(false)
        setShowModal(false)
      }
    )
  }

  const handleSelection = (slug)=>{
    setShowModal(true)
    setActiveSelection(slug)
  }


  return (
    <div className="">
      {/* Background Image */}
      <img className='w-full h-100px' src={user?.pictures[0]} alt="profile" />
      {/* User Info and Bio */}
      <div className="p-4 bg-gray-700">
        <div className="flex gap-3">
          <button onClick={()=>{handleSelection(user?.slug)}} className="hover:text-orange-400">
            <FiMessageCircle size={18} />
          </button>
          <button onClick={()=>{handleLike(user?.slug)}} className="hover:text-orange-400">
            <FiHeart size={18} />
          </button>
        </div>
        <p className="py-2">{ user?.profile?.bio ? getShortBio(user?.bio) : 'N/A'}</p>

        {/* Profile Image and Name */}
        <div className="flex items-start justify-start gap-2">
          <img
            src={user?.pictures[0]}
            alt={user?.profile?.firstName}
            className="w-8 h-8 rounded-full object-cover border-2 border-orange-300 shadow-sm"
          />
          <div className='flex items-center justify-start gap-2'>
            <h2 className="">{user?.profile?.firstName}</h2>
            <p className=''>{user?.profile.lastName}</p>
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={()=>{setShowModal(!showModal)}}>
        <div className='flex items-center justify-center flex-col'>
            <BiUser className='mb-2 text-2xl text-main_200 text-center font-bold'/>
            <h1 className='text-xl text-main_200 font-semibold'>You dont have this person as friend</h1>
            <p className='text-lg text-gray-700'>Send them a friend request to proceed</p>
            <button onClick={handleInvite} className='mt-2 px-4 py-2 bg-main_200 text-white font-semibold'>{loading ? '...loading' : "send request"}</button>
        </div>
      </Modal>
    </div>
  );
};

export default Card;