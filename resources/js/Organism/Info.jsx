import React from "react";
import { InfoMenu } from "@/Atoms/Info/InfoMenu";
import { Link } from "@inertiajs/react";

function Info() {
    return (
        <div
            className="bg-gray-200 rounded-xl h-max p-8 flex flex-col gap-8 
        md:grid md:grid-cols-2 md:grid-rows-2 shadow-2xl"
        >
            {InfoMenu?.map((menu, i) => (
                <Link
                    to={menu?.link}
                    key={i}
                    className="w-full h-36 bg-gray-300 rounded-xl flex items-center justify-center md:h-56"
                >
                    <div>
                        {React.createElement(menu?.icon, {
                            size: "40",
                            className: "m-4",
                            color: "#52525B",
                        })}
                    </div>
                    <div>
                        <p className="text-2xl md:text-4xl font-extraligh text-center text-gray-600">
                            {menu?.value}
                        </p>
                        <p className="text-xl md:text-2xl font-light text-center text-gray-600">
                            {menu?.name}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Info;
