import Npm1 from "@/Atoms/Biodata/Npm1";
import Npm2 from "@/Atoms/Biodata/Npm2";
import React from "react";

function Npm() {
    return (
        <div className="flex items-center flex-row gap-[12.8rem] md:gap-[20.6rem] mx-5">
            <Npm1 />
            <Npm2 />
        </div>
    );
}

export default Npm;
