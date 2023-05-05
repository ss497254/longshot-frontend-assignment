export const formatTableRow = (table: any[]) =>
    table.map((row, id) => ({
        id,
        keyword: row[0],
        volume: row[1],
        intent: row[2],
        cpc: row[3],
        competition: row[4],
        result: row[5],
        trends: row[6],
        kd: row[7],
    }));
