import { Cell } from "./cell.model";

export class Field {
    public cells: Cell[] = [];
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
    }

    public AddCell(cell: Cell) {
        this.cells.push(cell);
    }

    public render () {
        this.context.fillStyle = "#FEFEFE";
        this.context.fillRect(5, 5, 385, 385);
        this.context.fillRect(395, 5, 385, 385);

        this.context.fillStyle = "#000000";
        this.context.strokeStyle="rgba(0,0,0,1)";
        

        for (let i = 0; i < 11; i++) {
            for (let j = 0; j < 11; j++) {
                let x = 5 + ( 35 * i);
                let y = 5 + ( 35 * j);
                this.context.strokeRect(x, y, 35, 35);
            }
        }

        for (let i = 0; i < 11; i++) {
            for (let j = 0; j < 11; j++) {
                let x = 395 + ( 35 * i);
                let y = 5 + ( 35 * j);
                this.context.strokeRect(x, y, 35, 35);
            }
        }

        this.context.font = "17px Arial";
        for (let i = 0; i < 10; i++) {
            let num = i + 1;
            let y = 35 + (28 * 1.25 * num);
            this.context.fillText(num.toString(), 13, y);
            this.context.fillText(num.toString(), 403, y);
        }
    }
}