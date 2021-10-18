import { Negotiation as NegotiationModel } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageNegotiations } from "../views/messageNegotiations.js";
import { Negotiations as NegotiationsView } from "../views/negotiations.js";

export class Negotiation {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations: Negotiations = new Negotiations();
    private negotitiationsView = new NegotiationsView('#negotiationsView');
    private messageView = new MessageNegotiations('#messageView');

    constructor() {
        this.inputDate = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantity = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValue = document.querySelector('#valor') as HTMLInputElement;
        this.negotitiationsView.update(this.negotiations);
    }

    public add(): void {
        const negotiation: NegotiationModel = NegotiationModel.createNegotiation(
            this.inputDate.value.replace(/-/g, ','),
            this.inputQuantity.value,
            this.inputValue.value
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
        this.inputDate.value = '';
        this.inputQuantity.value = '1';
        this.inputValue.value = '0.0';
        this.inputDate.focus();
    }

    private refreshView(): void {
        this.negotitiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada com sucesso!');
    }
}
