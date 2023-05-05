import React, { useMemo, useState } from "react";
import DATA from "src/constants/data.json";
import { Button } from "src/ui/Button";
import { TabButtons } from "src/ui/TabButtons";
import { formatTableRow } from "src/utils/formatTableRow";
import { TableContent } from "./Content";

interface Task1TableProps {}

const DataTableTypes = ["Broad Match", "Related", "Questions"];

const DataTables = {
    [DataTableTypes[0]]: DATA.raw_broadmatch_data,
    [DataTableTypes[1]]: DATA.raw_related_data,
    [DataTableTypes[2]]: DATA.raw_question_data,
};

export const Table: React.FC<Task1TableProps> = () => {
    const [dataTableType, setDataTableType] = useState(DataTableTypes[0]);

    const rows = useMemo(
        () => formatTableRow(DataTables[dataTableType]),
        [dataTableType]
    );

    return (
        <div className="py-2">
            <div className="justify-between my-6 f">
                <TabButtons
                    value={dataTableType}
                    onClick={setDataTableType}
                    buttons={DataTableTypes}
                />
                <Button
                    btn="none"
                    className="border bg-gradient-to-r from-indigo-400 to-violet-600 border-violet-600"
                >
                    Add to List
                </Button>
            </div>
            <TableContent rows={rows} />
        </div>
    );
};
