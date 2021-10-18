import { DaysOfWeek } from "../enums/daysOfWeek.js";
export class Negotiation {
    constructor(_date, provider, price, quantity) {
        this._date = _date;
        this.provider = provider;
        this.price = price;
        this.quantity = quantity;
    }
    get date() {
        return new Date(this._date.getTime());
    }
    get total() {
        return this.price * this.quantity;
    }
    isWeekDay() {
        return this.date.getDay() !== DaysOfWeek.Sunday && this.date.getDay() !== DaysOfWeek.Saturday;
    }
    static createNegotiation(date, quantity, value) {
        return new Negotiation(new Date(date.replace(/-/g, ',')), 'zyx', parseInt(quantity, 10), parseFloat(value));
    }
}
