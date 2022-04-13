var _GhostHandler_schematicAreaTableID;
import { Handling } from 'Handling.js';
/*
When the window loads
*/
export class GhostHandler {
    constructor() {
        _GhostHandler_schematicAreaTableID.set(this, "activeSchematicAreaTable");
    }
    main() {
        //Attach handlers for component buttons
        let handler = new Handling();
        handler.attachComponentAreaHandlers();
        // Onclick = Attach handlers for active schematic area
        //
    }
    static drawComponent() {
    }
    static removePlacedComponentsInCell(elementID) {
    }
}
_GhostHandler_schematicAreaTableID = new WeakMap();
