import { BiUser } from 'react-icons/bi'
import { FaNairaSign } from 'react-icons/fa6'

const Navbar = () => {
    const userImage = ''
  return (
    <div className="flex items-center justify-between p-3 bg-backgound_primary">
        {/* ---- left ----- */}
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center gap-[2px]">
            <h1>Welcome, Galapagous</h1>
          </div>
          <div>
            {userImage ? <img src={userImage} alt="profile" />
            : <BiUser/>}
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          {/* <BsGear/> */}
          <div>
            <div className='flex items-center justify-center text-md gap-2'>
                <p>Balance:</p>
                <p className='flex items-center justify-center text-sm'><FaNairaSign/>5000</p>
            </div>
          </div>
        <button className='px-3 py-[5px] rounded-sm bg-black text-white text-sm'>Fund Wallet</button>
        </div>
      </div>
  )
}

export default Navbar