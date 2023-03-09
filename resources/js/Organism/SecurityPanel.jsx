import EmailUpdate from "@/Molecul/Security/EmailUpdate";
import NamaUpdate from "@/Molecul/Security/NamaUpdate";
import NpmUpdate from "@/Molecul/Security/NpmUpdate";
import PasswordUpdate from "@/Molecul/Security/PasswordUpdate";
import React from "react";

function SecurityPanel() {
    return (
        <div className=" bg-gray-200 h-fit w-full rounded-xl shadow-xl p-8 flex flex-col gap-6">
            <NamaUpdate />
            <NpmUpdate />
            <EmailUpdate />
            <PasswordUpdate />
        </div>
    );
}

export default SecurityPanel;
