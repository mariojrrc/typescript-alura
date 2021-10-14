import { Negotiation as NegotiationModel } from "./negotiation.js";

export class Negotiations {
    private _negotiations: NegotiationModel[] = [];
    // outra sintaxe
    private _negotiations2: Array<NegotiationModel> = [];

    add(negotiation: NegotiationModel): void {
        this._negotiations.push(negotiation);
    }

    toArray(): readonly NegotiationModel[] { // retorna uma cópia do array
        return this._negotiations;
    }

    // outra sintaxe
    toArray2(): ReadonlyArray<NegotiationModel> { // retorna uma cópia do array
        return this._negotiations;
    }
}