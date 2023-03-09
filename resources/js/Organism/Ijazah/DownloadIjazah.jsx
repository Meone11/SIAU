import ButtonDownloadIjazah from "@/Atoms/Ijazah/ButtonDownloadIjazah";
import PanelDownloadIjazah from "@/Molecul/Ijazah/PanelDownloadIjazah";
import React from "react";

function DownloadIjazah() {
    return (
        <div className="w-full h-[40rem] flex flex-col gap-4 md:h-full">
            <PanelDownloadIjazah />
            <div>
                <ButtonDownloadIjazah />
            </div>
        </div>
    );
}

export default DownloadIjazah;
