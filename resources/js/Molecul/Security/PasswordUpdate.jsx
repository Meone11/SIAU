import Password1 from "@/Atoms/Login/Password1";
import Password2 from "@/Atoms/Login/Password2";
import PassUpdate1 from "@/Atoms/Security/PassUpdate1";
import PassUpdate2 from "@/Atoms/Security/PassUpdate2";
import PassUpdateButton from "@/Atoms/Security/PassUpdateButton";
import React from "react";

function PasswordUpdate() {
    return (
        <div className="flex items-center flex-row gap-10">
            <div className="clas">
                <PassUpdate1 />
                <PassUpdate2 />
            </div>
            <PassUpdateButton />
        </div>
    );
}

export default PasswordUpdate;
