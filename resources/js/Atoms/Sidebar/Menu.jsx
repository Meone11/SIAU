import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { MdSimCard } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { CgTranscript } from "react-icons/cg";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";

export const Menu = [
    // { name: "Dashboard", icon: MdOutlineDashboard },
    // {
    //     name: "KRS",
    //     icon: VscFileSubmodule,
    //     subMenus: [
    //         { name: "Isi KRS" },
    //         { name: "PKRS" },
    //         { name: "KHS" },
    //         { name: "Mata Kuliah" },
    //     ],
    // },
    // { name: "Sim Kuliah", icon: MdSimCard },
    // { name: "E - Learning", icon: BsFillJournalBookmarkFill },
    { name: "Dashboard", icon: MdOutlineDashboard },
    {
        name: "KRS",
        icon: VscFileSubmodule,
        subMenus: [
            { name: "Isi KRS" },
            { name: "PKRS" },
            { name: "KHS" },
            { name: "Mata Kuliah" },
        ],
    },
    {
        name: "Transkrip",
        icon: CgTranscript,
        subMenus: [{ name: "Histori Nilai" }],
    },
    { name: "Ijazah", icon: HiOutlineAcademicCap },
];

export default {
    Menu,
};
