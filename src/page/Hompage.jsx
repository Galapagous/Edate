import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg">
          <FiHeart className="text-blue-500 text-2xl" />
        </div>
        <h1 className="ml-2 text-2xl font-semibold">
          E-<span className="text-red-500 italic">Dating</span>
        </h1>
      </div>
      <p className="text-gray-500 text-sm px-4 mb-6">
        By tapping Create Account or Sign In, you agree to our Terms. Learn how we process your data in our 
        <span className="text-blue-500"> Privacy Policy</span> and <span className="text-blue-500">Cookies Policy</span>.
      </p>
      <div className="bg-white rounded-xl shadow-md py-6 px-4">
        <h2 className="text-lg font-bold">Find Your Partner</h2>
        <p className="text-gray-500 text-sm mb-6">
          Browse up to 30,000+ food suggestions close to your location.
        </p>
        <Link to='/login' className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-3 hover:bg-blue-700 transition-all">
          Log In
        </Link>
        <Link to='/register' className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-all">
          Sign Up
        </Link>
      </div>
    </div>
  );
}


export default Homepage