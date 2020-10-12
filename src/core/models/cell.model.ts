import { Coordinate } from "./coordinate.model";

export class Cell {
    public position: Coordinate;

    constructor(position: Coordinate) {
        this.position = position;
    }
}