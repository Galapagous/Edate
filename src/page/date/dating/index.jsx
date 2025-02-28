import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from '../../../component/dating/Card';
import Navigation from '../Navigation';
import Chat from '../chat';
import { DATING_USER_URL } from '../../../constant/resources';
import { useFetchData } from '../../../hook/useFetchData';
import { useStore } from '../../../hook/useContext';
import Settings from '../settings/Settings';
import { useEffect } from 'react';
import { toast } from 'sonner';


// ChatComponent with WhatsApp-style layout
const DatingHomepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {data, loading: loadingUser } = useFetchData(DATING_USER_URL)
  const navigate = useNavigate()

  const userData = useStore()

  console.log(userData)

  useEffect(()=>{
    console.log(userData)
    if(!userData?.userInfo?.profile?.datingProfile){
      navigate(`/dating?filter='Settings'`)
      // setSearchParams('filter', 'Settings')
    }
  }, [])

  const navItems = [
    { text: 'Date', icon: '🏠', path: '/dating' },
    { text: 'Companion', icon: '👥', path: '/companion' },
    { text: 'Sugar Daddy', icon: '💬', path: '/sugar-daddy' },
    { text: 'Sugar Mummy', icon: '🔔', path: '/sugar-mummy' },
    { text: 'Listen', icon: '⚙️', path: '/listen' },
  ];

  // User data for card-based views
  const allUsers = {
    All: [
      { name: 'John Doe', bio: 'Web Developer seeking fun dates', avatar: 'https://i.pinimg.com/474x/f7/3d/ae/f73dae28f83f861b37972ca4be640118.jpg' },
      { name: 'Jane Smith', bio: 'UI Designer looking for romance', avatar: 'https://i.pinimg.com/474x/15/e2/7f/15e27f095a20d0818c89d9446a6cd44f.jpg' },
      { name: 'Bob Johnson', bio: 'Photographer seeking adventure buddy', avatar: 'https://i.pinimg.com/474x/87/04/8f/87048f5db716637a2c27493e0825b76e.jpg' },
      { name: 'Alice Brown', bio: 'Writer looking for a friend', avatar: 'https://i.pinimg.com/474x/6c/d1/bb/6cd1bb01611e4aa136ec5335aef72490.jpg' },
    ],
    Location: [
      { name: 'Sarah Lee', bio: 'Therapist nearby to listen', avatar: 'https://via.placeholder.com/150' },
    ],
    Matches: [
      { name: 'Mike Rich', bio: 'Businessman matched with you', avatar: 'https://via.placeholder.com/150' },
      { name: 'Emma Lux', bio: 'Entrepreneur your perfect match', avatar: 'https://via.placeholder.com/150' },
    ],
  };

  const chatUsers = [
    { name: 'Sarah', lastMessage: 'Hey, how are you?' },
    { name: 'Mike', lastMessage: 'Check this out!' },
    { name: 'Emma', lastMessage: 'See you later' },
  ];

  const currentFilter = searchParams.get('filter') || 'All';

  // Render view based on currentFilter
  const renderView = () => {
    if (currentFilter === 'Chat') {
      return <Chat />;
    } else if (currentFilter === 'Settings') {
      return <Settings />;
    } else {
      const users = allUsers[currentFilter] || allUsers['All']; // Fallback to 'All'
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
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
      <div className="flex" style={{ height: 'calc(100vh - 64px)' }}>
        {/* Left Sidebar */}
        {currentFilter === 'Chat' ? (
          // Chat-specific sidebar is handled within ChatComponent
          null
        ) : (
          <aside className="sm:w-60 w-40 bg-white shadow-md p-4">
            <nav>
              {navItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.path}
                  className="flex text-sm sm:text-base items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors text-gray-700"
                >
                  <span className="mr-4 text-sm sm:text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </Link>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">{renderView()}</main>

        {/* Right Sidebar - Hidden when in Chat mode */}
        {currentFilter !== 'Chat' && (
          <aside className="w-80 bg-white shadow-md p-4 hidden sm:inline-block">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Messages</h2>
            <div className="space-y-3">
              {chatUsers.map((user) => (
                <div
                  key={user.name}
                  className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="text-gray-800 font-medium">{user.name}</p>
                    <p className="text-sm text-gray-600 truncate w-52">{user.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default DatingHomepage;