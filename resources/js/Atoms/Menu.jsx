import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { MdSimCard } from "react-icons/md";
import { HiArchive } from "react-icons/hi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

export const Menu = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    {
        name: "KRS",
        link: "/",
        icon: HiArchive,
        subMenus: [
            { name: "Isi KRS", link: "/KRS/Isi KRS" },
            { name: "PKRS", link: "/KRS/PKRS" },
            { name: "KHS", link: "/KRS/KHS" },
            { name: "Mata Kuliah", link: "/KRS/Mata Kuliah" },
        ],
    },
    { name: "Sim Kuliah", link: "/", icon: MdSimCard },
    { name: "E - Learning", link: "/", icon: BsFillJournalBookmarkFill },
];

export default {
    Menu,
};
