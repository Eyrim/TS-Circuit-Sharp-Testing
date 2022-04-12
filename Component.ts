//TODO:
    // Controller only serves one type of req w/ TypeID as param, switches to file

export class Component {
    // Redundant?
    #isPlaced: boolean = false;
    #isGhost: boolean = false;
    #isConfigured: boolean = false;
    #element: HTMLImageElement;
    #parentID: string;
    #typeID: string;
    
    constructor(isGhost: boolean, typeID: string) {
        this.#isGhost = isGhost;
        this.#typeID = typeID;
    }

    get isPlaced(): boolean {
        return this.#isPlaced;
    } set isPlaced(isPlaced: boolean) {
        this.#isPlaced = isPlaced;
    }

    get isGhost(): boolean {
        return this.#isGhost;
    } set isGhost(isGhost: boolean) {
        this.#isGhost = isGhost;
    }

    get element(): HTMLImageElement {
        return this.#element;
    } set element(element: HTMLImageElement) {
        this.#element = element;
    }

    get parentID(): string {
        return this.#parentID;
    }

    get typeID(): string {
        return this.#typeID;
    } set typeID(typeID: string) {
        this.#typeID = typeID;
    }

    /*
    Places a component, if it's configured, in the parent, if the ID is set
    */
    place(): void {
        if (!this.#isConfigured) { throw new Error("Element not configured, cannot place unconfigured component"); }
        if (this.#element == undefined) { throw new Error("this.element is undefined, cannot place undefined element"); }
        if (this.#parentID == undefined) { throw new Error("this.parentID is undefined, cannot place element in undefined parent"); }
        if (this.#isPlaced) { throw new Error("Component already placed, cannot place same component twice"); }
        
        let parentElement: HTMLElement = document.getElementById(this.#parentID);

        parentElement.appendChild(this.#element);
    }

    /*
    Configures the component
    */
    configure(parentID: string): void {
        this.#parentID = parentID;

        let element: HTMLImageElement = document.createElement("img");
        let url: string = this.getURL();

        element.src = url;
        element.style.zIndex = "9999999999";

        // "Ghost" the element
        if (this.#isGhost) {
            element.style.filter = "opacity(75%)";
            element.id = this.#typeID
        } else { // ghosts don't get fancy IDs
            element.id = "placedComponent-" + this.#typeID;
        }

        this.#element = element;
        this.#isConfigured = true;
    }

    /*
    Removes a component, if it exists, from the parent, if the ID is set
    */
    remove(): void {
        if (this.#element == undefined) { throw new Error("this.element is undefined, cannot remove non-existent component"); }
        if (this.#parentID == undefined) { throw new Error("this.parentID is undefined, therefore component is not placed and cannot be removed"); }

        // Remove component
        if (this.#isPlaced) {
            let parent: HTMLElement = document.getElementById(this.#parentID);

            parent.removeChild(this.#element);

            return;
        }

        throw new Error("Component already removed or wasn't placed");
    }

    /*
    Gets the URL, based on the TypeID, if it's set
    */
    private getURL(): string {
        if (this.#typeID == undefined) { throw new Error("this.typeID is undefined, cannot get URL for component that does not have a typeID set"); }

        let url = "https://localhost:44338/Images/";

        switch (this.#typeID) {
            case "0":
                url += "GenericResistor";
                break;

            case "1":
                url += "Wire";
                break;

            default:
                throw new Error("this.#typeID is not a recognised typeID");
        }

        return url;
    }
}