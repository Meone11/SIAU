import SideBar from "@/Organism/SideBar";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const Homepage = () => {
    return (
        <div className="flex">
            <SideBar />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen flex items-start">
                <h1>HOME</h1>
            </div>
        </div>
    );
};

export default Homepage;
