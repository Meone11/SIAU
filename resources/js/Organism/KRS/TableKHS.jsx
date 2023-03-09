import BodyTableKHS from "@/Molecul/KRS/BodyTableKHS";
import HeaderTableKHS from "@/Molecul/KRS/HeaderTableKHS";
import { useState } from "react";
import React from "react";

function TableKHS() {
    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-5 overflow-x-scroll w-full h-full md:overflow-x-visible">
            <table className="table-fixed w-[40rem] md:w-full">
                <HeaderTableKHS />
                <BodyTableKHS />
            </table>
        </div>
    );
}

export default TableKHS;
