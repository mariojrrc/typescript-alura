export class Negotiations {
    constructor() {
        this._negotiations = [];
        // outra sintaxe
        this._negotiations2 = [];
    }
    add(negotiation) {
        this._negotiations.push(negotiation);
    }
    toArray() {
        return this._negotiations;
    }
    // outra sintaxe
    toArray2() {
        return this._negotiations;
    }
}
