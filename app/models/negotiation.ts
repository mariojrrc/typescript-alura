export class Negotiation {
    constructor(
        private _date: Date,
        public readonly provider: string,
        public readonly price: number,
        public readonly quantity: number
    ) { }

    get date(): Date {
        // prevent from changing the date
        return new Date(this._date.getTime());
    }

    get total(): number {
        return this.price * this.quantity;
    }
}