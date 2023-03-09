import { infoMenu } from "@/Atoms/Info/InfoMenu";
import IpIcon from "@/Atoms/Info/IpIcon";
import IpText from "@/Atoms/Info/IpText";
import IpValue from "@/Atoms/Info/IpValue";
import React from "react";

function InfoPanel() {
    return (
        <div className="w-full h-36 bg-gray-300 rounded-xl flex items-center justify-center md:h-56">
            {infoMenu?.map((menu, i) => (
                <div key={i}>
                    {React.createElement(menu?.icon, {
                        size: "40",
                    })}
                </div>
            ))}
        </div>
    );
}

export default InfoPanel;
