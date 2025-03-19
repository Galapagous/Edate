// ------- version 2 -------
import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useMakerequest } from "../hook/useMakeRequest";
import { LOGIN_URL } from "../constant/resources";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext"; // Adjust the import path to where your AppContext is
import { useDispatch } from "react-redux";
import { signinUser } from "../redux/auth/user.slice";

function Login() {
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const makeRequest = useMakerequest();
  const { setUserInfo, setIsloggedIn } = useContext(AppContext); // Directly use useContext
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    makeRequest(
      LOGIN_URL,
      "POST",
      userDetails,
      (data) => {
        localStorage.setItem("_dl_token", JSON.stringify(data?.metadata));
        localStorage.setItem("userId", data?.user?.userId);
        dispatch(signinUser(data?.profile));
        setUserInfo(data); // Update user info in context

        setIsloggedIn(true); // Set login status in context
        navigate("/entry");
      },
      (error) => {
        console.log(error);
      },
      () => {
        setLoading(false);
      }
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-sm text-gray-600 mt-1">
              Please login to your account
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="support@freeslab.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                />
              </div>
            </div>

            <button
              type="submit" // Changed to type="submit" instead of onClick
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>

            <Link
              to="/register"
              className="w-full flex justify-center items-center border border-gray-300 text-blue-600 py-2.5 rounded-md font-medium hover:bg-blue-50 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Forgot password?{" "}
            <Link
              to="/reset"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Reset here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
