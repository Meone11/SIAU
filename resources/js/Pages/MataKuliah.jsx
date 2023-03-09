import TableMK from "@/Organism/KRS/TableMK";
import SideBarKrs from "@/Organism/SidebarKrs";
import React from "react";

function MataKuliah() {
    return (
        <div className="flex h-screen">
            <div>
                <SideBarKrs />
            </div>
            <div className="flex h-full w-screen p-6 flex-col gap-10 items-end">
                <TableMK />
            </div>
        </div>
    );
}

export default MataKuliah;
