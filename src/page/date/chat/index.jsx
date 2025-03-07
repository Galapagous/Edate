import { useContext, useEffect, useRef, useState } from 'react'
import { useFetchData } from '../../../hook/useFetchData';
import { io } from 'socket.io-client';
import { CHATLIST } from '../../../constant/resources';
import { AppContext } from '../../../context/AppContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { chatSchema } from '../../../validation/chat';
// import { AppContext } from '../../../context/AppContext';

const Chat = () => {
    const socketRef = useRef(null)

    const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      reset,
    } = useForm({
      resolver: yupResolver(chatSchema),
    })

    const {data: conversations, loading} = useFetchData(CHATLIST);
    const [selectedUser, setSelectedUser] = useState(null);
    const [allConversations, setAllConversations] = useState(null); 

    const textContent = watch("content")

    useEffect(()=>{
      if(!socketRef.current) {
        socketRef.current = io('https://e-dates-backend.onrender.com')

        socketRef.current.on('newMessage', (payload) => {
          const updatedConversations = allConversations.map((chat) =>
            chat.conversationId === payload.conversationId? {...chat, messages: [...chat.messages, payload.content]} : chat
          );

          setAllConversations(updatedConversations)
        })
      }

      return () => {
        socketRef.current.disconnect()
      }
    }, [])


    useEffect(()=>{
      if(loading) return
      setSelectedUser(conversations[0])
      setAllConversations(conversations)
    }, [conversations, loading]);
    

    useEffect(()=>{
      if(textContent?.length > 0) {
        socketRef.current.emit('userTyping', {userId: localStorage.getItem('userId'), conversationId: selectedUser.conversationId })
      }
    }, [textContent, selectedUser])

    // -- on recieving new message ---
    socketRef?.current?.on('newMessage', (payload)=>{
      alert('hello new message')
      const updatedConversations = allConversations.map((chat) =>
        chat.conversationId === payload.conversationId? {...chat, messages: [...chat.messages, payload.message]} : chat
      );
      setAllConversations(updatedConversations)
    })
  
    const onSubmit = (data) => {
      const userId = localStorage.getItem('userId');
      const payload = {
        ...data,
        conversationId: selectedUser.conversationId,
        senderId:userId
      }

      console.log(payload)
      
      socketRef.current.emit('sendMessage', payload)
      reset();
    };
  
  
    return (
      <div className="flex h-full">
        {/* Left - User List */}
        <div className="w-60 bg-white shadow-md p-4 overflow-y-auto border-r border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Conversations</h2>
          <div className="space-y-2">
            {allConversations?.map((chat) => (
              <div
                key={chat?.conversationId}
                onClick={() => setSelectedUser(chat)}
                className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
                  selectedUser?.conversationId === chat?.conversationId ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
                }`}
              >
                <div className="bg-gray-300 rounded-full mr-3">
                  <img className='w-10 h-10 rounded-full object-cover' src={chat?.profilePicture} alt="user profile" />
                </div>
                <div>
                  <p className="text-gray-800 text-sm font-medium">{chat?.firstName}</p>
                  <p className="text-sm text-gray-600 truncate w-40">{chat?.messages[0] || ""}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Main - Chat Window */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="bg-white shadow-md rounded-lg p-4 flex-1 overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{selectedUser?.firstName}</h3>
            <div className="space-y-3">
              {selectedUser?.messages?.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg?.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      msg?.sender === 'You' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    <p>{msg?.text}</p>
                    <p className="text-xs mt-1 opacity-75">{msg?.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {errors.content ? <p className='text-red-500 text-sm'>{errors?.content?.message}</p> : null}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-3 flex text-gray-800">
            <input
              type="text"
              name="content"
              placeholder="Type a message..."
              {...register('content')}
              className="flex-1 p-2 border rounded-l-lg outline-none focus:ring-2 focus:ring-orange-200"
            />
            <button type='submit' className="p-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  };

export default Chat