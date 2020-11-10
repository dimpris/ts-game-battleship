import {Coordinate} from "./coordinate.model";

export class ShipSection {
    position: Coordinate;
    
    constructor(position: Coordinate) {
        this.position = position;
    }
}