import fs from 'fs';
import path from 'path'
import { parse } from 'csv-parse/sync';

export function readCSV(filePath: string){

    // const fullPath = path.resolve(filePath);
    // console.log ('Full File Path ', fullPath)

    const fileContent = fs.readFileSync(filePath);

    const records = parse(fileContent,{
        columns:true,
        skip_empty_lines: true
    });
    return records;
}
