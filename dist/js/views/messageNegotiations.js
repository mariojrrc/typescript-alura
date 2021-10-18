import { View } from "./view.js";
export class MessageNegotiations extends View {
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
}
