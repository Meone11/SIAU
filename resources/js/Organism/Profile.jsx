import ProfilIcon from "@/Atoms/Profile/ProfilIcon";
import React from "react";
import Name from "@/Atoms/Profile/Name";
import Fakultas from "@/Atoms/Profile/Fakultas";
import Jurusan from "@/Atoms/Profile/Jurusan";
import Npm from "@/Atoms/Profile/Npm";
import DosenWali from "@/Atoms/Profile/DosenWali";

function Profile() {
    return (
        <div className="bg-gray-200 h-48 md:h-80 rounded-xl shadow-2xl flex">
            <div className="mt-8 md:mt-10">
                <ProfilIcon />
            </div>
            <div className=" mt-8 md:mt-14 md:w-full md:mx-16">
                <Name />
                <Fakultas />
                <Jurusan />
                <Npm />
                <hr className="h-px my-1 md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700" />
                <DosenWali />
                <hr className="h-px my-1 md:my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
        </div>
    );
    w;
}

export default Profile;
