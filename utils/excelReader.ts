import * as XLSX from 'xlsx';
import * as path from 'path';
//import  path from 'path';

export type LoginDataExcel = {
    username: string;
    password: string;
    expected: string;
    run: string;
}

export function readExcel(filePath: string, sheetName: string): LoginDataExcel[] {

    const fullPath = path.resolve(filePath);
    console.log('Full Path is ', fullPath);

    const workbook = XLSX.readFile(fullPath);
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    // if (!sheet) {
    //     throw new Error(`Sheet "${sheetName}" was not found in "${fullPath}"`);
    // }

    // return XLSX.utils.sheet_to_json<LoginDataExcel>(sheet, { defval: '' });
    return XLSX.utils.sheet_to_json<LoginDataExcel>(sheet, { defval: '' });
}