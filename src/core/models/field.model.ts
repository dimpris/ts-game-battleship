import { Cell } from "./cell.model";

export class Field {
    public cells: Cell[] = [];

    public AddCell(cell: Cell) {
        this.cells.push(cell);
    }

    public render () {
        // 
    }
}