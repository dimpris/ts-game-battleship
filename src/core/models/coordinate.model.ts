import { CoordinateX, CoordinateY } from "../enums";

export class Coordinate {
    public coordX: CoordinateX;
    public coordY: CoordinateY;

    constructor(x: CoordinateX, y: CoordinateY) {
        this.coordX = x;
        this.coordY = y;
    }
}