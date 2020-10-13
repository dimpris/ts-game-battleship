import { Cell } from "./core/models/cell.model";
import { Coordinate } from "./core/models/coordinate.model";
import { CoordinateX, CoordinateY } from "./core/enums";
import { Field } from "./core/models/field.model";


const canvas = document.querySelector("#battleship-canvas") as HTMLCanvasElement;
const field = new Field(canvas);
field.render();