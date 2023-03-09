import LoginButton from "@/Atoms/Login/LoginButton";
import LoginSigle from "@/Atoms/Login/LoginSigle";
import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import Username from "@/Molecul/Login/Username";
import Password from "./Password";
import LogoUsk from "@/Atoms/Login/LogoUsk";

function Loginm() {
    return (
        <div className="flex flex-col items-center gap-4 bg-gray-50 w-[25rem] md:w-[30rem] h-[34rem] md:h-[36rem] justify-center rounded-2xl">
            <LogoUsk />
            <p className="text-left font-medium text-xl text-black">
                Welcome Back!
            </p>
            <div className="flex flex-col gap-2 md:flex md:items-center">
                <Username />
                <Password />
            </div>
            <div className="flex flex-col gap-2 mt-4 md:flex md:items-center">
                <LoginButton />
                <hr className="h-px w-full bg-gray-300 border-0" />
                <LoginSigle />
            </div>
            <p className="text-center font-medium text-base text-black">
                &#169; Meone & toosakarin
            </p>
        </div>
    );
}

export default Loginm;
