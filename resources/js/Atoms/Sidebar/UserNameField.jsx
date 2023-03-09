import React from "react";

const UserNameField = ({ open }) => {
    return (
        <div>
            <h1
                className={` text-center font-medium text-sm duration-500${
                    !open && "overflow-hidden opacity-0 translate-x-28"
                }`}
            >
                Meone
            </h1>
        </div>
    );
};

export default UserNameField;
