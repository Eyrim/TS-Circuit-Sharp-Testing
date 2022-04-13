var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Handling_event, _Handling_clickedID, _Handling_typeID;
import { GhostHandler } from "./GhostHandler.js";
export class Handling {
    constructor() {
        // Event should be a mouse event, but at compile time, it doesn't have the correct properties, I'm sorry TS gods
        _Handling_event.set(this, void 0);
        _Handling_clickedID.set(this, void 0);
        _Handling_typeID.set(this, void 0);
    }
    get event() {
        return __classPrivateFieldGet(this, _Handling_event, "f");
    }
    get clickedID() {
        return __classPrivateFieldGet(this, _Handling_clickedID, "f");
    }
    get typeID() {
        return __classPrivateFieldGet(this, _Handling_typeID, "f");
    }
    // Event should be a mouse event, but at compile time, it doesn't have the correct properties, I'm sorry TS gods
    enterHandler(event) {
        if (__classPrivateFieldGet(this, _Handling_typeID, "f") == undefined) {
            throw new Error("this.typeID is not set, therefore cannot handle mouse enter events");
        }
        if (document.getElementById(event.currentTarget.id).childElementCount > 2) {
            try {
                document.getElementById(event.currentTarget.id).removeChild(document.getElementById("placedComponent-" + __classPrivateFieldGet(this, _Handling_typeID, "f")));
            }
            catch (_a) { } //TODO: Populate
        }
        else {
            GhostHandler.drawComponent();
        }
    }
    leaveHandler(event) {
        try {
            document.getElementById(event.currentTarget.id).removeChild(document.getElementById("GhostTest"));
        }
        catch (_a) { } //TODO: Populate
    }
    mouseDownHandler(event) {
        if (event.currentTarget.tagName == "img") {
            return;
        }
        GhostHandler.removePlacedComponentsInCell(event.currentTarget.id);
    }
    attachComponentAreaHandlers() {
        throw new Error('Method not implemented.');
    }
}
_Handling_event = new WeakMap(), _Handling_clickedID = new WeakMap(), _Handling_typeID = new WeakMap();
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
