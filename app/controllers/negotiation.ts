import { Negotiation as NegotiationModel } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";

export class Negotiation {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations: Negotiations = new Negotiations();

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }

    add(): void {
        const negotiation: NegotiationModel = this.createNegotiation();
        this.negotiations.add(negotiation);
        console.log(this.negotiations);
        this.clearForm();
    }

    createNegotiation(): NegotiationModel {
        return new NegotiationModel(
            new Date(this.inputDate.value.replace(/-/g, ',')),
            'zyx',
            parseInt(this.inputQuantity.value, 10),
            parseFloat(this.inputValue.value)
        );
    }

    clearForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '1';
        this.inputValue.value = '0.0';
        this.inputDate.focus();
    }
}
