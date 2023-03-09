import HeaderMKKrs from "@/Atoms/DashboardKrs/HeaderMKKrs";
import BodyTableKrs from "@/Molecul/DashboardKrs/BodyTableKrs";
import MataKuliahKrs from "@/Molecul/DashboardKrs/MataKuliahKrs";
import React from "react";

function PanelTableMK() {
    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-5 w-full h-full md:overflow-x-visible">
            <table className="table-fixed w-full overflow-x-scroll">
                <MataKuliahKrs />
                <BodyTableKrs />
            </table>
        </div>
    );
}

export default PanelTableMK;
