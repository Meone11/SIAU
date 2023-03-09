import ButtonCetak from "@/Atoms/Transkrip/ButtonCetak";
import ButtonPilih from "@/Atoms/Transkrip/ButtonPilih";
import SearchBox from "@/Atoms/Transkrip/SearchBox";
import React from "react";
import { BsJournalBookmark } from "react-icons/bs";

function TranskripNav() {
    return (
        <div className="flex bg-gray-200 items-center flex-row gap-2 w-full">
            <BsJournalBookmark size={30} />
            <hr className="h-10 w-px" color="black" />
            <SearchBox />
            <ButtonPilih />
            <ButtonCetak />
        </div>
    );
}

export default TranskripNav;
