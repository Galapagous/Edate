import { FaBars, FaCog } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import im2 from "../assets/date/dating.jpeg";
import im from "../assets/date/companion.jpeg";
import im5 from "../assets/date/thank-you.jpeg";
import im4 from "../assets/date/companion.jpeg";
import im3 from "../assets/date/one-night.jpeg";
import { Link, useNavigate } from "react-router-dom";

const profiles = [
  { id: 1, name: "Rohini", age: 25, distance: "10 miles away", img: im4 },
  { id: 2, name: "Anika", age: 23, distance: "5 miles away", img: "https://i.pinimg.com/474x/cb/bb/f0/cbbbf0b2455667f73391ab0adfb65a3e.jpg" },
  { id: 3, name: "Shreya", age: 27, distance: "8 miles away", img: "https://i.pinimg.com/474x/0b/5f/ae/0b5faef69a686e48e3501ac36489c8f5.jpg" },
  { id: 4, name: "Lilly", age: 26, distance: "15 miles away", img: "https://i.pinimg.com/474x/de/f5/09/def50984b698ac5c2ac5a741ecd5c47c.jpg" },
];


const Index = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full min-h-screen bg-main_100 flex flex-col items-center p-4 relative">
      {/* Header */}
      <div className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-main_100 to-main_200 text-white rounded-lg">
        <FaBars size={24} />
        <h2 className="text-lg font-semibold">Discover</h2>
        <FaCog size={24} />
      </div>

      {/* Profile Card Carousel */}
      <div className="w-full max-w-lg mt-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {profiles.map((profile) => (
            <SwiperSlide key={profile.id}>
              <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
                <img
                  src={profile.img}
                  alt={profile.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{profile.name}</h3>
                  <p className="text-sm text-gray-600">{profile.age} years</p>
                  <p className="text-xs text-gray-500">{profile.distance}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Preferences */}
      <h3 className="text-lg font-semibold mt-6">What would you like?</h3>
      <div className="grid grid-cols-2 gap-4 w-full mt-2">
        {[
          { img: im, label: "Companion", link: "companion" },
          { img: im2, label: "Dating", link: "dating" },
          { img: im3, label: "One Night Stand", link: "one_night" },
          { img: im5, label: "Thanks for Coming", link: "thanks" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative w-full h-24 rounded-lg shadow-sm font-medium overflow-hidden bg-black flex items-center justify-center"
          >
            <img
              src={item.img}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            {/* <button onClick={()=>{navigate(`${item?.link}`)}} className="relative z-10 text-white text-lg font-bold">{item.label}</button> */}
            <Link to={`/${item.link}`} className="relative z-10 text-white text-lg font-bold">{item.label}</Link>
          </div>
        ))}
      </div>

      {/* Interests Section */}
      <h3 className="text-lg font-semibold mt-6">Interests</h3>
      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {["Play", "Dancing", "Fighting", "Gisting", "Reading", "Cooking"].map(
          (interest, index) => (
            <span
              key={index}
              className="px-6 py-3 text-white rounded-full text-sm shadow-md"
              style={{
                backgroundColor: index % 2 === 0 ? "#27667B" : "#4635B1",
              }}
            >
              {interest}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Index;
