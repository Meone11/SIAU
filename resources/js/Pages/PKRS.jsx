import TableMK from "@/Organism/KRS/TableMK";
import SideBarKrs from "@/Organism/SidebarKrs";
import React from "react";

function PKRS() {
    return (
        <div className="flex h-screen">
            <div>
                <SideBarKrs />
            </div>
            <div className="flex h-full w-screen p-6 flex-col gap-10 justify-center">
                <h2 className=" text-center text-9xl font-serif">
                    Belum DiBuka
                </h2>
            </div>
        </div>
    );
}

export default PKRS;
