import { Cell } from "./cell.model";
import { CoordinateX, CoordinateY } from "../enums";
import { Coordinate } from "./coordinate.model";
import {Ship} from "./ship.model";
import {ShipSection} from "./shipSection.model";

export class Field {
    public cells: Cell[] = [];
    private canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.CreateCells();
    }

    private AddCell(cell: Cell) {
        this.cells.push(cell);
    }

    private CreateCells() {
        const xsize = Object.keys(CoordinateX).length /2;
        const ysize = Object.keys(CoordinateX).length /2;
        for (let i = 0; i < xsize; i++) {
            for (let j = 0; j < ysize; j++) {
                this.AddCell(new Cell(new Coordinate(i, j)));
            }
        }
    }

    public PutShip() {
        const ship = new Ship(this);
        ship.AddSection(new ShipSection(new Coordinate(1,1)));
        ship.AddSection(new ShipSection(new Coordinate(1,2)));
        // console.log(ship);
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

        const size = Object.keys(CoordinateX).length /2;
        this.context.font = "17px Arial";
        for (let i = 0; i < size; i++) {
            let num = i + 1;
            let y = 35 + (28 * 1.25 * num);
            this.context.fillText(num.toString(), 13, y);
            this.context.fillText(num.toString(), 403, y);
        }
        
        
        for (let i = 0; i < size; i++) {
            let num = i + 1;
            let x = 16 + (28 * 1.25 * num);
            this.context.fillText(CoordinateX[i], x, 30);
            this.context.fillText(CoordinateX[i], x+390 , 30);
        }
    }
}