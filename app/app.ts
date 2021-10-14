import { Negotiation } from "./controllers/negotiation.js";

const negotiationController = new Negotiation();
const form = document.querySelector(".form");
form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    negotiationController.add();
});
