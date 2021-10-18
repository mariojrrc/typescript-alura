import { Negotiation as NegotiationModel } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageNegotiations } from "../views/messageNegotiations.js";
import { Negotiations as NegotiationsView } from "../views/negotiations.js";

export class Negotiation {
    private inputDate: JQuery;
    private inputQuantity: JQuery;
    private inputValue: JQuery;
    private negotiations: Negotiations = new Negotiations();
    private negotitiationsView = new NegotiationsView('#negotiationsView');
    private messageView = new MessageNegotiations('#messageView');

    constructor() {
        this.inputDate = $('#data');
        this.inputQuantity = $('#quantidade');
        this.inputValue = $('#valor');
        this.negotitiationsView.update(this.negotiations);
    }

    public add(event: Event): void {
        event.preventDefault();

        const negotiation: NegotiationModel = NegotiationModel.createNegotiation(
            this.inputDate.val().replace(/-/g, ','),
            this.inputQuantity.val(),
            this.inputValue.val()
        );

        if (!negotiation.isWeekDay()) {
            this.messageView.update('Negociações só podem ser realizadas em dias úteis.');
            return;
        }

        this.negotiations.add(negotiation);
        this.refreshView();
        this.clearForm();
    }

    private clearForm(): void {
        this.inputDate.val('');
        this.inputQuantity.val('1');
        this.inputValue.val('0.0');
        this.inputDate.focus();
    }

    private refreshView(): void {
        this.negotitiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada com sucesso!');
    }
}
