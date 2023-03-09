import Info from "@/Organism/Info";
import NavBar from "@/Organism/NavBar";
import Profile from "@/Organism/Profile";
import SideBar from "@/Organism/SideBar";

import React from "react";

function Dashboard() {
    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="p-7 text-2xl font-semibold h-screen w-screen flex flex-col gap-14 overflow-y-scroll">
                <NavBar />
                <Profile />
                <Info />
            </div>
        </div>
    );
}

export default Dashboard;
