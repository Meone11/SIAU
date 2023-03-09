import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
function UserIcon() {
    return (
        <div className="border-l-2 border-gray-300 h-12 flex items-center">
            <HiOutlineUserCircle size={30} color="#D4D4D8" className="m-3" />
        </div>
    );
}

export default UserIcon;
