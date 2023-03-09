import Nama1 from "@/Atoms/Biodata/Nama1";
import Nama2 from "@/Atoms/Biodata/Nama2";
import React from "react";

function Nama() {
    return (
        <div className="flex items-center flex-row gap-[12.4rem] md:gap-[20rem] mx-5">
            <Nama1 />
            <Nama2 />
        </div>
    );
}

export default Nama;
