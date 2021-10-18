import { Negotiations as NegotiationsModel } from "../models/negotiations.js";
import { View } from "./view.js";

export class Negotiations extends View<NegotiationsModel> {

    protected template(model: NegotiationsModel): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Value</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${model.toArray().map(n => {
            return `
                    <tr>
                        <td>${this.formatDate(n.date)}</td>
                        <td>${n.quantity}</td>
                        <td>${n.price}</td>
                        <td>${n.total}</td>
                    </tr>
                    `
        }).join('')}
            </tbody>
        </table>
        `;
    }
}