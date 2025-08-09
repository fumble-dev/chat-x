import React from 'react'
import assets, { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const SideBar = ({ selectedUser, setSelectedUser }) => {
    const navigate = useNavigate();

    return (
        <div className="h-full p-4 border-r border-gray-300 bg-gray-50">
            <div className="pb-4">
                {/* Logo & Menu */}
                <div className="flex justify-between items-center mb-4">
                    <img
                        onClick={() => navigate('/')}
                        src={assets.logo}
                        alt="logo"
                        className="cursor-pointer w-20"
                    />
                    <div className="relative group">
                        <img
                            src={assets.menu_icon}
                            alt="menu"
                            className="h-5 w-5 cursor-pointer"
                        />
                        <div className="absolute top-full right-0 mt-1 w-32 p-2 rounded bg-white border border-gray-200 shadow hidden group-hover:block">
                            <p
                                onClick={() => navigate('/profile')}
                                className="cursor-pointer text-sm text-gray-700 hover:bg-gray-100 p-1 rounded"
                            >
                                Edit Profile
                            </p>
                            <hr className="my-1 border-gray-200" />
                            <p className="cursor-pointer text-sm text-gray-700 hover:bg-gray-100 p-1 rounded">
                                Logout
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex items-center bg-gray-200 rounded px-3 py-2 mb-4">
                    <img src={assets.search_icon} alt="search" className="w-4 opacity-60" />
                    <input
                        placeholder="Search User..."
                        type="text"
                        className="outline-none bg-transparent text-sm text-gray-800 flex-1 pl-2 placeholder-gray-500"
                    />
                </div>
            </div>

            {/* User List */}
            <div className="flex flex-col gap-1 overflow-y-auto">
                {userDummyData.map((user, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-3 p-2 rounded cursor-pointer ${
                            selectedUser?._id === user._id ? 'bg-blue-100' : ''
                        } hover:bg-gray-100`}
                        onClick={() => setSelectedUser(user)}
                    >
                        <img
                            src={user.profilePic || assets.avatar_icon}
                            alt="profile"
                            className="rounded-full w-9 h-9 object-cover border border-gray-300"
                        />
                        <div className="flex flex-col">
                            <p className="text-sm font-medium text-gray-800">{user.fullName}</p>
                            {index < 3 ? (
                                <span className="text-green-500 text-xs font-medium">Online</span>
                            ) : (
                                <span className="text-gray-400 text-xs">Offline</span>
                            )}
                        </div>

                        {index > 2 && (
                            <p className="ml-auto text-xs h-5 w-5 flex justify-center items-center rounded-full bg-gray-300 text-gray-700 font-medium">
                                {index}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideBar
