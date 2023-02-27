import React from "react";
import user from "../../../public/Profile.jpg";

const ProfileImg = () => {
    return (
        <img
            src={user}
            className={`sticky cursor-pointer rounded-full w-10 h-10 mr-2`}
        />
    );
};

export default ProfileImg;
