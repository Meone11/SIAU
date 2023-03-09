import React from "react";
import { BiSearch } from "react-icons/bi";

function SearchBox() {
    return (
        <div className="flex items-center justify-between bg-white rounded-md w-full">
            <input
                type="text"
                className=" rounded-md border-none"
                placeholder="Pilih Semester"
            />
            <BiSearch className="opacity-50 mx-2" />
        </div>
    );
}

export default SearchBox;
