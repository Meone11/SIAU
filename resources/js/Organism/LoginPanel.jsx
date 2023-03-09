import HeaderText from "@/Molecul/Login/HeaderText";
import Loginm from "@/Molecul/Login/Loginm";
import React from "react";
import { Head } from "@inertiajs/react";

function LoginPanel() {
    return (
        <div className="h-auto flex flex-col items-center justify-center md:flex md:flex-row md:gap-10">
            <HeaderText />
            <Loginm />
        </div>
    );
}

export default LoginPanel;
