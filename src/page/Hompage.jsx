import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import HomeBackground from "../assets/date/home3.jpg";

function Homepage() {
  return (
    <div className="text-center w-screen h-screen border-2 bg-blue-950 text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg">
          <FiHeart className="text-blue-500 text-2xl" />
        </div>
        <h1 className="ml-2 text-2xl font-semibold">
          E-<span className="text-red-500 italic">Dating</span>
        </h1>
      </div>
      <div
        style={{
          backgroundImage: `url(${HomeBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
          overflow: "hidden",
        }}
        className="bg-inherit w-1/2 h-1/2 shadow-gray-800 rounded-xl shadow-md py-6 px-4"
      >
        <h2 className="text-lg font-bold">Find Your Partner</h2>
        <p className="text-white text-sm mb-6">
          Browse up to 30,000+ food suggestions close to your location.
        </p>
        <div className="flex flex-col items-center justify-center gap-2 w-2/3 mx-auto">
          <Link
            to="/login"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-3 hover:bg-blue-700 transition-all"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="w-full bg-backgound_primary border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <p className="text-gray-500 text-sm px-4 mb-6 w-1/2 mt-10">
        By tapping Create Account or Sign In, you agree to our Terms. Learn how
        we process your data in our
        <span className="text-blue-500"> Privacy Policy</span> and{" "}
        <span className="text-blue-500">Cookies Policy</span>.
      </p>
    </div>
  );
}

export default Homepage;
