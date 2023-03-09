import ButtonUploadIjazah from "@/Atoms/Ijazah/ButtonUploadIjazah";
import PanelUploadIjazah from "@/Molecul/Ijazah/PanelUploadIjazah";
import React from "react";

function UploadFotoIjazah() {
    return (
        <div className="w-full h-[40rem] flex flex-col gap-4 md:h-full">
            <PanelUploadIjazah />
            <div>
                <ButtonUploadIjazah />
            </div>
        </div>
    );
}

export default UploadFotoIjazah;
