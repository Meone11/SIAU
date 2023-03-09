import React from "react";
import Agama1 from "@/Atoms/Biodata/Agama1";
import Agama2 from "@/Atoms/Biodata/Agama2";

function Agama() {
    return (
        <div className=" flex flex-row gap-[12rem] md:gap-[19.6rem] mx-5">
            <Agama1 />
            <Agama2 />
        </div>
    );
}

export default Agama;
