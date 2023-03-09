import LabelUploadIjazah from "@/Atoms/Ijazah/LabelUploadIjazah";
import React from "react";

function PanelUploadIjazah() {
    return (
        <div className="flex p-3 flex-col gap-2 w-full h-full bg-gray-200 shadow-lg rounded-lg items-center justify-between">
            <div className="w-full">
                <LabelUploadIjazah />
                <hr
                    className="h-px my-1 md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"
                    color="black"
                />
            </div>
            <div className=" w-[15rem] md:w-[20rem] h-[20rem] md:h-[25rem] border-2 border-black"></div>
            <h2 className="clas"></h2>
        </div>
    );
}

export default PanelUploadIjazah;
