import React from "react";
import UserNameField from "@/Atoms/Sidebar/UserNameField";
import ProfileImg from "@/Atoms/Sidebar/ProfileImg";

const UserProfile = ({ open }) => {
    return (
        <div
            className={`${
                !open ? "mx-0" : "flex gap-x-4 items-center p-3"
            } duration-500`}
        >
            <ProfileImg />
            <UserNameField open={open} />
        </div>
    );
};

export default UserProfile;
