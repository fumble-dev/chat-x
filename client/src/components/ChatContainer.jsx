import React, { useEffect, useRef } from 'react';
import assets, { messagesDummyData } from '../assets/assets';
import { formatMessageTime } from '../lib/utils';

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef();

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  if (!selectedUser) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-zinc-900 text-gray-400 max-md:hidden">
        <img src={assets.logo} alt="logo" className="w-20 opacity-80" />
        <p className="text-xl font-medium mt-4">Chat anytime, anywhere</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-zinc-800">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 border-b border-zinc-700 bg-zinc-800 h-16 flex-shrink-0">
        <img
          src={assets.profile_martin}
          alt="profile"
          className="w-10 h-10 rounded-full object-cover border border-zinc-600"
        />
        <p className="flex-1 text-sm font-medium text-gray-100">
          Martin Johnson
          <span className="inline-block ml-2 w-2 h-2 rounded-full bg-emerald-400"></span>
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt="back"
          className="md:hidden w-5 cursor-pointer opacity-70"
        />
      </div>

      {/* Messages - scrollable */}
      <div className="flex-grow overflow-y-auto p-6">
        {messagesDummyData.map((message, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 my-2 ${
              message.senderId === '680f50e4f10f3cd28382ecf9' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.image ? (
              <div
                className={`relative ${
                  message.senderId === '680f50e4f10f3cd28382ecf9' ? 'mr-10' : 'ml-10'
                }`}
              >
                <img
                  src={assets.image}
                  alt="message content"
                  className="max-w-[250px] rounded-2xl shadow"
                />
                <span className="absolute bottom-1 right-2 text-[10px] text-gray-300 bg-black/50 px-2 py-0.5 rounded-full">
                  {formatMessageTime(message.createdAt)}
                </span>
              </div>
            ) : (
              <p
                className={`px-4 py-2 max-w-[70%] text-sm rounded-2xl break-words text-white shadow
                  ${
                    message.senderId === '680f50e4f10f3cd28382ecf9'
                      ? 'bg-indigo-600 rounded-br-sm'
                      : 'bg-zinc-700 rounded-bl-sm'
                  }`}
              >
                {message.text}
              </p>
            )}
            {!message.image && (
              <div className="text-center text-[10px] text-gray-400 space-y-1">
                <img
                  src={
                    message.senderId === '680f50e4f10f3cd28382ecf9'
                      ? assets.avatar_icon
                      : assets.profile_martin
                  }
                  alt="avatar"
                  className="w-7 h-7 rounded-full object-cover border border-zinc-600"
                />
                <p>{formatMessageTime(message.createdAt)}</p>
              </div>
            )}
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 px-6 border-t border-zinc-700 bg-zinc-800 h-16 flex-shrink-0">
        <div className="flex items-center bg-zinc-700 px-4 rounded-full flex-grow">
          <input
            type="text"
            placeholder="Send a message..."
            className="bg-transparent outline-none text-sm p-3 text-gray-100 flex-grow placeholder-gray-400"
          />
          <input type="file" id="image" accept="image/png, image/jpeg" hidden />
          <label htmlFor="image">
            <img
              src={assets.gallery_icon}
              alt="upload"
              className="w-6 mr-2 cursor-pointer opacity-70"
            />
          </label>
        </div>
        <img
          src={assets.send_button}
          alt="send"
          className="w-8 cursor-pointer opacity-80"
        />
      </div>
    </div>
  );
};

export default ChatContainer;
