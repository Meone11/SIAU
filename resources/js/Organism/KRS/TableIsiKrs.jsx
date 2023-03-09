import BodyTableIsiKrs from "@/Molecul/KRS/BodyTableIsiKrs";
import HeaderTableIsiKrs from "@/Molecul/KRS/HeaderTableIsiKrs";
import React from "react";

function TableIsiKrs() {
    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-5 overflow-x-scroll w-full h-full md:overflow-x-visible">
            <table className="table-fixed w-[40rem] md:w-full">
                <HeaderTableIsiKrs />
                <BodyTableIsiKrs />
            </table>
        </div>
    );
}

export default TableIsiKrs;
