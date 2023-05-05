import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React from "react";
import { IntentMap } from "src/constants/IntentMap";
import { formatLargeNumber } from "src/utils/formatLargeNumber";
import { calculateKeywordDifficulty } from "src/utils/calculateKeywordDifficulty";
import Tooltip from "@mui/material/Tooltip";

const columns: GridColDef[] = [
    { field: "keyword", headerName: "Keyword", width: 200 },
    {
        field: "intent",
        headerName: "Intent",
        sortable: false,
        width: 60,
        renderCell: ({ row: { intent } }) => {
            intent = Math.min(intent, IntentMap.length - 1);

            const value = IntentMap[intent];

            return (
                <Tooltip title={value["hover-text"]}>
                    <div
                        className="w-6 h-6 rounded-full c"
                        style={{
                            backgroundColor: value.color.bg,
                            color: value.color.text,
                        }}
                    >
                        {value.type[0]}
                    </div>
                </Tooltip>
            );
        },
    },
    {
        field: "volume",
        headerName: "Volume",
        type: "number",
        width: 70,
    },
    {
        field: "kd",
        headerName: "KD %",
        width: 65,
        renderCell: ({ row: { kd } }) => {
            const value = calculateKeywordDifficulty(kd);

            return (
                <Tooltip title={value.rating}>
                    <div>
                        {kd}
                        <span
                            className="inline-block w-2 h-2 ml-0.5 rounded"
                            style={{ backgroundColor: value.color }}
                        ></span>
                    </div>
                </Tooltip>
            );
        },
    },
    {
        field: "cpc",
        headerName: "CPC (USD)",
        type: "number",
        width: 90,
    },
    {
        field: "competition",
        headerName: "Com.",
        type: "number",
        width: 60,
    },
    {
        field: "result",
        headerName: "Results",
        type: "number",
        width: 75,
        valueGetter: ({ row }: GridValueGetterParams) =>
            formatLargeNumber(row.result),
    },
];

interface TableCententProps {
    rows: any[];
}

export const TableContent: React.FC<TableCententProps> = ({ rows }) => {
    return (
        <DataGrid
            rows={rows}
            className="bg-white"
            columnHeaderHeight={45}
            classes={{ columnHeader: "bg-gray-100" }}
            showColumnVerticalBorder
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    );
};
