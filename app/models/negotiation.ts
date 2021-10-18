import { DaysOfWeek } from "../enums/daysOfWeek.js";

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

    public isWeekDay(): boolean {
        return this.date.getDay() !== DaysOfWeek.Sunday && this.date.getDay() !== DaysOfWeek.Saturday;
    }

    public static createNegotiation(date: string, quantity: string, value: string): Negotiation {
        return new Negotiation(
            new Date(date.replace(/-/g, ',')),
            'zyx',
            parseInt(quantity, 10),
            parseFloat(value)
        );
    }
}