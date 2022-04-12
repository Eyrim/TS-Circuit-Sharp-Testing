export class Grid {
    #grid: Array<Array<Element>>;

    /*
    parentID should always be a <table> element
    */
    constructor(public parentID: string) {
        // The parent node of the table
        let parentNode: HTMLElement = document.getElementById(parentID);

        if (parentNode.tagName != "TABLE") { throw new TypeError; }

        this.#grid = Grid.getChildrenOfTable(parentNode);
    }

    get grid(): Array<Array<Element>> {
        return this.#grid;
    }

    private static getChildrenOfTable(root: HTMLElement): Element[][] {
        let tableRows: HTMLCollection = root.children[0].children;
        let rootChildrenRow: Element;
        let currentRowChildren: HTMLCollection;
        let table: Array<Array<Element>> = new Array<Array<Element>>();
        //table.push(new Array<Element>());

        // For every table row in the table
        for (let i: number = 0; i < tableRows.length; i++) {
            // Push a new empty array for each row
            table.push(new Array<Element>());
        }

        // For every element in the table, including <tr> and <th>
        for (let i: number = 0; i < tableRows.length; i++) {
            // If the element is a table row, move into for loop to get cells
            // The current row
            rootChildrenRow = tableRows.item(i);
            currentRowChildren = rootChildrenRow.children;
            for (let j: number = 0; j < currentRowChildren.length; j++) {
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
    tryGetByID(ID): Element {
        // For every element in the 2d list
        for (let i = 0; i < this.#grid.length; i++) {
            for (let j = 0; j < this.#grid[i].length; j++) {
                // If the ID matches
                if (this.#grid[i][j].id == ID) {
                    return this.#grid[i][j];
                }
            }
        }

        return undefined;
    }
}