import { Negotiation as NegotiationModel } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageNegotiations } from "../views/messageNegotiations.js";
import { Negotiations as NegotiationsView } from "../views/negotiations.js";
export class Negotiation {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotitiationsView = new NegotiationsView('#negotiationsView');
        this.messageView = new MessageNegotiations('#messageView');
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotitiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = NegotiationModel.createNegotiation(this.inputDate.value.replace(/-/g, ','), this.inputQuantity.value, this.inputValue.value);
        if (!negotiation.isWeekDay()) {
            this.messageView.update('Negociações só podem ser realizadas em dias úteis.');
            return;
        }
        this.negotiations.add(negotiation);
        this.refreshView();
        this.clearForm();
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '1';
        this.inputValue.value = '0.0';
        this.inputDate.focus();
    }
    refreshView() {
        this.negotitiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada com sucesso!');
    }
}
