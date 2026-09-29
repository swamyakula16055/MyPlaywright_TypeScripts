import path from 'path'
import { readCSV } from './csvReader.ts';
import { readExcel } from './excelReader.ts';
import fs from 'fs';


export function readData(filePath: string, sheetName?: string) {

    const ext = path.extname(filePath).toLowerCase();

    switch (ext) {
        case '.csv':
            console.log(".. I am reading CSV..");
            return readCSV(filePath);
        case '.xlsx':
            console.log(".. I am reading EXCEL..");
            return readExcel(filePath, sheetName || 'Sheet1');

        case ".json":
            console.log(".. I am reading JSON..");
            const JSONData = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(JSONData);

        default:
            throw new Error(`Unsupported file extension: ${ext}`);
    }
}

