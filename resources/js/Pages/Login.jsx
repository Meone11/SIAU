import React from "react";
import LoginPanel from "@/Organism/LoginPanel";
import HeaderText from "@/Molecul/Login/HeaderText";

function Login() {
    return (
        <div className="h-screen bg-emerald-400 flex items-center justify-center md:flex md:items-center md:justify-center">
            <LoginPanel />
        </div>
    );
}

export default Login;
