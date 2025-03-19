import { BiHome, BiUser } from "react-icons/bi";
import { FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userImage = "";
  return (
    <div className="flex items-center justify-between p-3 bg-red-500 text-white">
      {/* ---- left ----- */}
      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center gap-[2px]">
          <h1>Welcome, Galapagous</h1>
        </div>
        <div>
          {userImage ? <img src={userImage} alt="profile" /> : <BiUser />}
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        {/* <BsGear/> */}
        <Link
          to="/entry"
          className="px-3 py-[5px] rounded-sm text-white text-sm"
        >
          <BiHome className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
