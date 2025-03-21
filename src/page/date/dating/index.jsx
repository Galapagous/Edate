import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../../../component/dating/Card";
import Navigation from "../Navigation";
import Chat from "../chat";
import { BASE_URL } from "../../../constant/resources";
import { useFetchData } from "../../../hook/useFetchData";
import { useStore } from "../../../hook/useContext";
import { useEffect } from "react";
// import { toast } from 'sonner';
import Settings from "../settings/Settings";
import SideBar from "../../listen/listen/SideBar";
// import { useMakerequest } from '../../../hook/useMakeRequest';

// ChatComponent with WhatsApp-style layout
const DatingHomepage = () => {
  const userData = useStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: allUsers, loading: loadingUser } = useFetchData(
    BASE_URL + "/get-datingusers"
  );
  const navigate = useNavigate();

  useEffect(() => {
    console.log("user -->", userData);
    if (!userData?.userInfo?.profile?.datingProfile) {
      navigate(`/dating?filter='Settings'`);
      // setSearchParams('filter', 'Settings')
    }
  }, []);

  const navItems = [
    { text: "Date", icon: "🏠", path: "/dating" },
    { text: "Companion", icon: "👥", path: "/companion" },
    { text: "Sugar Daddy", icon: "💬", path: "/sugar-daddy" },
    { text: "Sugar Mummy", icon: "🔔", path: "/sugar-mummy" },
    { text: "Listen", icon: "⚙️", path: "/listen" },
  ];

  // const chatUsers = [
  //   { name: "Sarah", lastMessage: "Hey, how are you?" },
  //   { name: "Mike", lastMessage: "Check this out!" },
  //   { name: "Emma", lastMessage: "See you later" },
  // ];

  const currentFilter = searchParams.get("filter") || "All";

  // Render view based on currentFilter
  const renderView = () => {
    if (currentFilter === "Chat") {
      return <Chat />;
    } else if (currentFilter === "Settings") {
      return <Settings />;
    } else {
      const users = allUsers; // Fallback to 'All'
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {users?.map((user, index) => (
            <Card key={index} user={user} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navigation setSearchParams={setSearchParams} />

      {/* Main Layout */}
      <div className="flex" style={{ height: "calc(100vh - 64px)" }}>
        {/* Left Sidebar */}
        {currentFilter === "Chat" ? null : ( // Chat-specific sidebar is handled within ChatComponent
          <aside className="sm:w-60 w-40 bg-white shadow-md p-4">
            {/* <nav className="flex flex-col items-start justify-start gap-3 w-full">
              {navItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.path}
                  className="flex w-full text-sm sm:text-base items-center p-2 hover:bg-gray-100 cursor-pointer transition-colors text-gray-700"
                >
                  <span>{item.text}</span>
                </Link>
              ))}
            </nav> */}
            <SideBar />
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">{renderView()}</main>
      </div>
    </div>
  );
};

export default DatingHomepage;
