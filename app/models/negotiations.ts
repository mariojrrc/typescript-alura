import { Negotiation as NegotiationModel } from "./negotiation.js";

export class Negotiations {
    private _negotiations: NegotiationModel[] = [];
    // outra sintaxe
    private _negotiations2: Array<NegotiationModel> = [];

    public add(negotiation: NegotiationModel): void {
        this._negotiations.push(negotiation);
    }

    public toArray(): readonly NegotiationModel[] { // retorna uma cópia do array
        return this._negotiations;
    }

    // outra sintaxe
    public toArray2(): ReadonlyArray<NegotiationModel> { // retorna uma cópia do array
        return this._negotiations;
    }
}