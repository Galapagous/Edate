import React from 'react'
import Profile from '../../../assets/date/companion.jpeg'

const Chat = () => {
    const chatUsers = [
      { id: 1, name: 'Sarah', lastMessage: 'Hey, how are you?', messages: [{ text: 'Hey, how are you?', sender: 'Sarah', time: '10:30 AM' }, { text: 'Good, you?', sender: 'You', time: '10:32 AM' }] },
      { id: 2, name: 'Mike', lastMessage: 'Check this out!', messages: [{ text: 'Check this out!', sender: 'Mike', time: 'Yesterday' }, { text: 'Cool!', sender: 'You', time: 'Yesterday' }] },
      { id: 3, name: 'Emma', lastMessage: 'See you later', messages: [{ text: 'See you later', sender: 'Emma', time: '9:15 AM' }] },
    ];
  
    const [selectedUser, setSelectedUser] = React.useState(chatUsers[0]); // Default to first user
  
    return (
      <div className="flex h-full">
        {/* Left - User List */}
        <div className="w-60 bg-white shadow-md p-4 overflow-y-auto border-r border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Conversations</h2>
          <div className="space-y-2">
            {chatUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
                  selectedUser.id === user.id ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
                }`}
              >
                <div className="bg-gray-300 rounded-full mr-3">
                  <img className='w-10 h-10 rounded-full object-cover' src={Profile} alt="user profile" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600 truncate w-40">{user.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Main - Chat Window */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="bg-white shadow-md rounded-lg p-4 flex-1 overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{selectedUser.name}</h3>
            <div className="space-y-3">
              {selectedUser.messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      msg.sender === 'You' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs mt-1 opacity-75">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 flex text-gray-800">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-l-lg outline-none focus:ring-2 focus:ring-orange-200"
            />
            <button className="p-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Chat