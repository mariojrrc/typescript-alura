export class Negotiation {
    constructor(_date, provider, price, quantity) {
        this._date = _date;
        this.provider = provider;
        this.price = price;
        this.quantity = quantity;
    }
    get date() {
        // prevent from changing the date
        return new Date(this._date.getTime());
    }
    get total() {
        return this.price * this.quantity;
    }
}
