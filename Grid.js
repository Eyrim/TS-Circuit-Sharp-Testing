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
var _Grid_grid;
export class Grid {
    /*
    parentID should always be a <table> element
    */
    constructor(parentID) {
        this.parentID = parentID;
        _Grid_grid.set(this, void 0);
        // The parent node of the table
        let parentNode = document.getElementById(parentID);
        if (parentNode.tagName != "TABLE") {
            throw new TypeError;
        }
        __classPrivateFieldSet(this, _Grid_grid, Grid.getChildrenOfTable(parentNode), "f");
    }
    get grid() {
        return __classPrivateFieldGet(this, _Grid_grid, "f");
    }
    static getChildrenOfTable(root) {
        let tableRows = root.children[0].children;
        let rootChildrenRow;
        let currentRowChildren;
        let table = new Array();
        //table.push(new Array<Element>());
        // For every table row in the table
        for (let i = 0; i < tableRows.length; i++) {
            // Push a new empty array for each row
            table.push(new Array());
        }
        // For every element in the table, including <tr> and <th>
        for (let i = 0; i < tableRows.length; i++) {
            // If the element is a table row, move into for loop to get cells
            // The current row
            rootChildrenRow = tableRows.item(i);
            currentRowChildren = rootChildrenRow.children;
            for (let j = 0; j < currentRowChildren.length; j++) {
                // Go through children of row, if child is td, add to array[i]
                if (currentRowChildren.item(j).tagName == "TD") {
                    table[i][j] = currentRowChildren.item(j);
                    //table[i].push(rootChildrenRow.children.item(j));
                }
            }
        }
        return table;
    }
    /*
    Linear searches this.grid to try and find the element
    */
    tryGetByID(ID) {
        // For every element in the 2d list
        for (let i = 0; i < __classPrivateFieldGet(this, _Grid_grid, "f").length; i++) {
            for (let j = 0; j < __classPrivateFieldGet(this, _Grid_grid, "f")[i].length; j++) {
                // If the ID matches
                if (__classPrivateFieldGet(this, _Grid_grid, "f")[i][j].id == ID) {
                    return __classPrivateFieldGet(this, _Grid_grid, "f")[i][j];
                }
            }
        }
        return undefined;
    }
}
_Grid_grid = new WeakMap();
