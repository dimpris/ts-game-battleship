import {ShipSection} from "./shipSection.model";
import { Field } from "./field.model";

export class Ship {
    sections: ShipSection[] = [];
    field: Field;

    constructor(field: Field) {
        this.field = field;
    }

    public AddSection(section: ShipSection) {
        this.sections.push(section);
        this.field.context.fillStyle = "#FF0000";
        let x = 7 + ( 35 * (section.position.coordX + 1));
        let y = 7 + ( 35 * (section.position.coordY + 1));
        this.field.context.fillRect(x, y, 31, 31);
    }
}
