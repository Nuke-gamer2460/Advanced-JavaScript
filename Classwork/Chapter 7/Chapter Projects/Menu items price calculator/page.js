class Menu {
    #item1Price;
    #item2Price;

    constructor(item1Price, item2Price) {
        this.#item1Price = item1Price;
        this.#item2Price = item2Price;
    }

    calculateTotalCost(item1Quantity, item2Quantity) {
        return (this.#item1Price * item1Quantity) + (this.#item2Price * item2Quantity);
    }

    get totalCost() {
        return this.calculateTotalCost;
    }
}

const order1 = new Menu(5, 10);
const order2 = new Menu(3, 7);
const order3 = new Menu(8, 12);

console.log(order1.totalCost(2, 3));
console.log(order2.totalCost(5, 2));
console.log(order3.totalCost(1, 4));
