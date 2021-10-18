import { Negotiation } from "./controllers/negotiation.js";

const negotiationController = new Negotiation();
const form = $(".form").submit(negotiationController.add.bind(negotiationController));