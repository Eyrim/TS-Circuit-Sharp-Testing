import { Component } from "./Component.js";
import { GhostHandler } from "./GhostHandler.js";

export class Handling {
    // Event should be a mouse event, but at compile time, it doesn't have the correct properties, I'm sorry TS gods
    #event: any;
    #clickedID: string;
    #typeID: string;

    get event(): any {
        return this.#event;
    }

    get clickedID(): string {
        return this.#clickedID;
    }

    get typeID(): string {
        return this.#typeID;
    }

    // Event should be a mouse event, but at compile time, it doesn't have the correct properties, I'm sorry TS gods
    enterHandler(event: any): void {
        if (this.#typeID == undefined) { throw new Error("this.typeID is not set, therefore cannot handle mouse enter events"); }

        if (document.getElementById(event.currentTarget.id).childElementCount > 2) {
            try {
                document.getElementById(event.currentTarget.id).removeChild(document.getElementById("placedComponent-" + this.#typeID));
            } catch {} //TODO: Populate
        } else {
            GhostHandler.drawComponent();
        }
    }

    leaveHandler(event: any): void {
        try {
            document.getElementById(event.currentTarget.id).removeChild(document.getElementById("GhostTest"));
        } catch {} //TODO: Populate
    }

    mouseDownHandler(event: any): void {
        if (event.currentTarget.tagName == "img") {
            return;
        }

        GhostHandler.removePlacedComponentsInCell(event.currentTarget.id);
        
    }

    attachComponentAreaHandlers() {
        throw new Error('Method not implemented.');
    }
} 

// export class Handling {
//     #currentComponent: Component; 

//     constructor() {

//     }


//     // const mouseDownHandler = function (event) {
//     //     console.log("this.id: " + this.id);

//     //     // If the user clicked on the image of the component
//     //     if (this.tagName == "img") {
//     //         return;
//     //         /*let parentNode = event.currentTarget.parentNode;
//     //         for (let i = 0; i < event.currentTarget.children.length; i++) {
//     //             if ()
//     //         }*/
//     //     }

//     //     // Remove other components with id starting with "placedcomponent"
//     //     removePlacedComponentsInCell(this.id);

//     //     // Draw new component
//     //     placeComponent(this.id, "placedComponent-" + typeID);
//     // }

//     /*
//     When the mouse enters an element with a handler

//     Explaining myself:
//     -------------------
//     At compile time, the event object doesn't have access to the id property, because not every event target is an element
//     Therefore, I have to set these type annotations to any
//     Typescript gods, I am sorry
//     */
//     private enterHandler(event: any): void {
//         let currentTargetID: string = event.currentTarget.id;
//         let currentTarget: HTMLElement = document.getElementById(currentTargetID);

//         if (currentTarget.childElementCount > 2) {
//             try {
//                 currentTarget.removeChild(document.getElementById("placedComponent-" + ))
//             }
//         }
//     //     if (document.getElementById(event.currentTarget.id).children.length > 2) {
//     //         try {
//     //             document.getElementById(event.currentTarget.id).removeChild(document.getElementById("placedComponent-" + typeID)); //HERE
//     //         } catch {
//     //         }
//     //     } else {
//     //         drawComponent(event.currentTarget.id, "GhostTest");
//     //     }
//     // }
//     // const leaveHandler = function (event) {
//     //     try {
//     //         document.getElementById(event.currentTarget.id).removeChild(document.getElementById("GhostTest")); //HERE
//     //     } catch {
//     //     }
//     }

//     /*
//     When the mouse leaves an element with a handler
//     */
//     private static leaveHandler(event: Event): void {

//     }

//     /*
//     When the mouse leaves an element with a handler
//     */
//     private static mouseDownHandler(event: Event): void {

//     }

//     /*
//     Attaches mouseenter, mouseleave, and mousedown handlers for the table of schematic cells
//     */
//     attachHandlers(): void {
//         for (let i: number = 0; i <= 24; i++) {
//             document.getElementById(String(i)).addEventListener("mouseenter", Handling.enterHandler);
//             document.getElementById(String(i)).addEventListener("mouseleave", Handling.enterHandler);
//             document.getElementById(String(i)).addEventListener("mousedown", Handling.enterHandler);
//         }
//     }   
// }