import React from "react";
import SideBarKrs from "@/Organism/SidebarKrs";
import DownloadIjazah from "@/Organism/Ijazah/DownloadIjazah";
import UploadFotoIjazah from "@/Organism/Ijazah/UploadFotoIjazah";

function Ijazah() {
    return (
        <div className="flex h-screen">
            <div className="h-screen">
                <SideBarKrs />
            </div>
            <div className="flex h-screen w-screen p-4 gap-10 flex-col md:flex-row">
                <UploadFotoIjazah />
                <DownloadIjazah />
            </div>
        </div>
    );
}

export default Ijazah;
