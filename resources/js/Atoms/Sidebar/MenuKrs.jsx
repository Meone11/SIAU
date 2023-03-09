import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { CgTranscript } from "react-icons/cg";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineHistory } from "react-icons/md";

export const MenuKrs = [
    { id: 1, name: "Dashboard", icon: MdOutlineDashboard },
    {
        id: 2,
        name: "KRS",
        icon: VscFileSubmodule,
        subMenus: [
            { id: 21, name: "Isi KRS" },
            { id: 22, name: "PKRS" },
            { id: 23, name: "KHS" },
            { id: 24, name: "Mata Kuliah" },
        ],
    },
    {
        id: 3,
        name: "Transkrip",
        icon: CgTranscript,
    },
    { id: 5, name: "Histori Nilai", icon: MdOutlineHistory },
    { id: 4, name: "Ijazah", icon: HiOutlineAcademicCap },
];

export default {
    MenuKrs,
};
