import TranskripNav from "@/Molecul/Transkrip/TranskripNav";
import React from "react";

function TranskripNavBar() {
    return (
        <div className="flex bg-gray-200 items-center p-2 rounded-md w-full h-[4rem] md:h-[5rem] shadow-lg">
            <TranskripNav />
        </div>
    );
}

export default TranskripNavBar;
