import React from "react";
import { HiArrowSmLeft } from "react-icons/hi";

function BackIcon() {
    return (
        <button className="border-r-2 border-gray-300 h-12 flex items-center">
            <HiArrowSmLeft size={30} color="#D4D4D8" className="m-3" />
        </button>
    );
}

export default BackIcon;
