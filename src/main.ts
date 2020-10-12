import { Cell } from "./core/models/cell.model";
import { Coordinate } from "./core/models/coordinate.model";
import { CoordinateX, CoordinateY } from "./core/enums";
import { Field } from "./core/models/field.model";


const canvas = document.querySelector("#battleship-canvas");
const context = canvas.getContext("2d");
context.moveTo(0, 0);
context.lineTo(400, 400);
context.stroke();
const field = new Field();

const c1 = new Coordinate(CoordinateX.C, CoordinateY.Nine);
const c2 = new Coordinate(CoordinateX.E, CoordinateY.Three);
const c3 = new Coordinate(CoordinateX.G, CoordinateY.Seven);

field.AddCell(new Cell(c1));
field.AddCell(new Cell(c2));
field.AddCell(new Cell(c3));

console.log(field);