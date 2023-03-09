import React from "react";
import SideBarKrs from "@/Organism/SidebarKrs";
import TableKHS from "@/Organism/KRS/TableKHS";
import TranskripNavBar from "@/Organism/Transkrip/TranskripNavBar";
import UnderTableKHS from "@/Organism/KRS/UnderTableKHS";

function KHS() {
    return (
        <div className="flex h-screen">
            <div className="h-screen">
                <SideBarKrs />
            </div>
            <div className="flex h-screen w-screen p-6 flex-col gap-10 items-end">
                <TranskripNavBar />
                <TableKHS />
                <UnderTableKHS />
            </div>
        </div>
    );
}

export default KHS;
