import Alamat1 from "@/Atoms/Biodata/Alamat1";
import Alamat2 from "@/Atoms/Biodata/Alamat2";
import React from "react";

function Alamat() {
    return (
        <div className=" flex flex-row gap-[11.8rem] md:gap-[19.3rem] mx-5">
            <Alamat1 />
            <Alamat2 />
        </div>
    );
}

export default Alamat;
