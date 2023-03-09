import React from "react";
import SIAUText from "@/Atoms/Login/SIAUHeader";
import Header from "@/Atoms/Login/Header";

function HeaderText() {
    return (
        <div className="w-auto bg-emerald-400 mb-32 md:relative md:bottom-[2rem]">
            <SIAUText />
            <Header />
        </div>
    );
}

export default HeaderText;
