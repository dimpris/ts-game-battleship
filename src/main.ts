import { Cell } from "./core/models/cell.model";
import { Coordinate } from "./core/models/coordinate.model";
import { CoordinateX, CoordinateY } from "./core/enums";
import { Field } from "./core/models/field.model";


const canvas = document.querySelector("#battleship-canvas") as HTMLCanvasElement;
canvas.addEventListener("click", (ev: PointerEvent) => {
    let x = ((ev.clientX - 5) / 35) - 1;
    let y = ((ev.clientY - 5) / 35) - 1;
    x = parseInt(x.toString());
    y = parseInt(y.toString());
    console.log(x, y);
});
const field = new Field(canvas);
field.render();
field.PutShip();