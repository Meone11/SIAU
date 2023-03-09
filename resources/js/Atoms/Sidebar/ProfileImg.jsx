import React from "react";
import user from "../../../../public/UserProfile.jpg";

const ProfileImg = () => {
    return (
        <img
            src={user}
            className={`sticky cursor-pointer rounded-full w-10 h-10`}
        />
    );
};

export default ProfileImg;
