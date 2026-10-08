import * as XLSX from 'xlsx';

export class ExcelUtil {

    static getSheetNames(filePath: string): string[] {

        const workbook = XLSX.readFile(filePath);

        return workbook.SheetNames;
    }

}