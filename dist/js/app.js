import { Negotiation } from "./controllers/negotiation.js";
const negotiationController = new Negotiation();
const form = document.querySelector(".form");
if (!form) {
    throw new Error("Form not found");
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    negotiationController.add();
});
