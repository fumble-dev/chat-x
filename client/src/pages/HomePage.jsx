import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import ChatContainer from '../components/ChatContainer'
import RightSideBar from '../components/RightSideBar'

const HomePage = () => {
    const [selectedUser, setSelectedUser] = useState(false);

    return (
        <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
            <div
                className={`border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid grid-cols-1 relative 
        ${selectedUser
                        ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]'
                        : 'md:grid-cols-2'}`}
            >
                <SideBar setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
                {selectedUser && <ChatContainer setSelectedUser={setSelectedUser} selectedUser={selectedUser} />}
                <RightSideBar setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
            </div>
        </div>
    )
}

export default HomePage