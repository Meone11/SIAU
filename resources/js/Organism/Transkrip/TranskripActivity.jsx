import PanelTranskrip from "@/Molecul/Transkrip/PanelTranskrip";
import React from "react";

function TranskripActivity() {
    return (
        <div className="flex flex-col gap-2 h-[15rem] bg-gray-200 rounded-xl p-4 md:w-full md:h-[55rem] shadow-xl">
            <PanelTranskrip />
            <hr className=" w-full h-px" color="black" />
        </div>
    );
}

export default TranskripActivity;
