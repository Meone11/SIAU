import TableIsiKrs from "@/Organism/KRS/TableIsiKrs";
import SideBarKrs from "@/Organism/SidebarKrs";
import React from "react";

function IsiKrs() {
    return (
        <div className="flex h-screen">
            <div className="h-screen">
                <SideBarKrs />
            </div>
            <div className="flex h-screen w-screen p-6 flex-col gap-10 items-end">
                <TableIsiKrs />
                <button className="bg-emerald-300 hover:bg-emerald-400 text-white font-bold py-2 px-4 rounded-xl w-[10rem]">
                    Ajukan
                </button>
            </div>
        </div>
    );
}

export default IsiKrs;
