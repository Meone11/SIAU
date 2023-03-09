import React from "react";
import Userfoto from "../../../../public/UserProfile.jpg";
function ProfilIcon() {
    return (
        <img
            src={Userfoto}
            className="rounded-full w-[8rem] h-[8rem] md:rounded-full md:w-[15rem] md:h-[15rem] mx-4 md:mx-10"
        />
    );
}

export default ProfilIcon;
