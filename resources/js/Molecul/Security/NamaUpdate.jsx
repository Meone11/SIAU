import { LabelDataPribadi } from "@/Atoms/Biodata/LabelDataPribadi";
import React from "react";

function NamaUpdate() {
    return (
        <div>
            {LabelDataPribadi.find((items) =>
                items.Name === "Nama" ? (
                    <div>
                        <h2>{items.Name}</h2>
                        <h2>{items.Value}</h2>
                    </div>
                ) : null
            )}
        </div>
    );
}

export default NamaUpdate;
