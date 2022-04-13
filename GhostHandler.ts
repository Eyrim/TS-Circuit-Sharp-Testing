import { Grid } from './Grid.js';
import { Component } from 'Component.js';
import { Handling } from 'Handling.js';

/*
When the window loads
*/
export class GhostHandler {
    #schematicAreaTableID: string = "activeSchematicAreaTable";

    main(): void {
        //Attach handlers for component buttons
        let handler: Handling = new Handling();
        handler.attachComponentAreaHandlers();
            // Onclick = Attach handlers for active schematic area
        
            //

    }

    static drawComponent(): void {

    }

    static removePlacedComponentsInCell(elementID: string): void {

    }
}