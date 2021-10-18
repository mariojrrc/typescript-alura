import { Negotiation as NegotiationModel } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageNegotiations } from "../views/messageNegotiations.js";
import { Negotiations as NegotiationsView } from "../views/negotiations.js";
export class Negotiation {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotitiationsView = new NegotiationsView('#negotiationsView');
        this.messageView = new MessageNegotiations('#messageView');
        this.inputDate = $('#data');
        this.inputQuantity = $('#quantidade');
        this.inputValue = $('#valor');
        this.negotitiationsView.update(this.negotiations);
    }
    add(event) {
        event.preventDefault();
        const negotiation = NegotiationModel.createNegotiation(this.inputDate.val().replace(/-/g, ','), this.inputQuantity.val(), this.inputValue.val());
        if (!negotiation.isWeekDay()) {
            this.messageView.update('Negociações só podem ser realizadas em dias úteis.');
            return;
        }
        this.negotiations.add(negotiation);
        this.refreshView();
        this.clearForm();
    }
    clearForm() {
        this.inputDate.val('');
        this.inputQuantity.val('1');
        this.inputValue.val('0.0');
        this.inputDate.focus();
    }
    refreshView() {
        this.negotitiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada com sucesso!');
    }
}
