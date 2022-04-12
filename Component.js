//TODO:
// Controller only serves one type of req w/ TypeID as param, switches to file
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Component_isPlaced, _Component_isGhost, _Component_isConfigured, _Component_element, _Component_parentID, _Component_typeID;
export class Component {
    constructor(isGhost, typeID) {
        // Redundant?
        _Component_isPlaced.set(this, false);
        _Component_isGhost.set(this, false);
        _Component_isConfigured.set(this, false);
        _Component_element.set(this, void 0);
        _Component_parentID.set(this, void 0);
        _Component_typeID.set(this, void 0);
        __classPrivateFieldSet(this, _Component_isGhost, isGhost, "f");
        __classPrivateFieldSet(this, _Component_typeID, typeID, "f");
    }
    get isPlaced() {
        return __classPrivateFieldGet(this, _Component_isPlaced, "f");
    }
    set isPlaced(isPlaced) {
        __classPrivateFieldSet(this, _Component_isPlaced, isPlaced, "f");
    }
    get isGhost() {
        return __classPrivateFieldGet(this, _Component_isGhost, "f");
    }
    set isGhost(isGhost) {
        __classPrivateFieldSet(this, _Component_isGhost, isGhost, "f");
    }
    get element() {
        return __classPrivateFieldGet(this, _Component_element, "f");
    }
    set element(element) {
        __classPrivateFieldSet(this, _Component_element, element, "f");
    }
    get parentID() {
        return __classPrivateFieldGet(this, _Component_parentID, "f");
    }
    get typeID() {
        return __classPrivateFieldGet(this, _Component_typeID, "f");
    }
    set typeID(typeID) {
        __classPrivateFieldSet(this, _Component_typeID, typeID, "f");
    }
    /*
    Places a component, if it's configured, in the parent, if the ID is set
    */
    place() {
        if (!__classPrivateFieldGet(this, _Component_isConfigured, "f")) {
            throw new Error("Element not configured, cannot place unconfigured component");
        }
        if (__classPrivateFieldGet(this, _Component_element, "f") == undefined) {
            throw new Error("this.element is undefined, cannot place undefined element");
        }
        if (__classPrivateFieldGet(this, _Component_parentID, "f") == undefined) {
            throw new Error("this.parentID is undefined, cannot place element in undefined parent");
        }
        if (__classPrivateFieldGet(this, _Component_isPlaced, "f")) {
            throw new Error("Component already placed, cannot place same component twice");
        }
        let parentElement = document.getElementById(__classPrivateFieldGet(this, _Component_parentID, "f"));
        parentElement.appendChild(__classPrivateFieldGet(this, _Component_element, "f"));
    }
    /*
    Configures the component
    */
    configure(parentID) {
        __classPrivateFieldSet(this, _Component_parentID, parentID, "f");
        let element = document.createElement("img");
        let url = this.getURL();
        element.src = url;
        element.style.zIndex = "9999999999";
        // "Ghost" the element
        if (__classPrivateFieldGet(this, _Component_isGhost, "f")) {
            element.style.filter = "opacity(75%)";
            element.id = __classPrivateFieldGet(this, _Component_typeID, "f");
        }
        else { // ghosts don't get fancy IDs
            element.id = "placedComponent-" + __classPrivateFieldGet(this, _Component_typeID, "f");
        }
        __classPrivateFieldSet(this, _Component_element, element, "f");
        __classPrivateFieldSet(this, _Component_isConfigured, true, "f");
    }
    /*
    Removes a component, if it exists, from the parent, if the ID is set
    */
    remove() {
        if (__classPrivateFieldGet(this, _Component_element, "f") == undefined) {
            throw new Error("this.element is undefined, cannot remove non-existent component");
        }
        if (__classPrivateFieldGet(this, _Component_parentID, "f") == undefined) {
            throw new Error("this.parentID is undefined, therefore component is not placed and cannot be removed");
        }
        // Remove component
        if (__classPrivateFieldGet(this, _Component_isPlaced, "f")) {
            let parent = document.getElementById(__classPrivateFieldGet(this, _Component_parentID, "f"));
            parent.removeChild(__classPrivateFieldGet(this, _Component_element, "f"));
            return;
        }
        throw new Error("Component already removed or wasn't placed");
    }
    /*
    Gets the URL, based on the TypeID, if it's set
    */
    getURL() {
        if (__classPrivateFieldGet(this, _Component_typeID, "f") == undefined) {
            throw new Error("this.typeID is undefined, cannot get URL for component that does not have a typeID set");
        }
        let url = "https://localhost:44338/Images/";
        switch (__classPrivateFieldGet(this, _Component_typeID, "f")) {
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
_Component_isPlaced = new WeakMap(), _Component_isGhost = new WeakMap(), _Component_isConfigured = new WeakMap(), _Component_element = new WeakMap(), _Component_parentID = new WeakMap(), _Component_typeID = new WeakMap();
