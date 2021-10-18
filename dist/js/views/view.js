export class View {
    constructor(selector, escape) {
        this.escape = escape;
        const el = document.querySelector(selector);
        if (!el) {
            throw new Error(`Element not found: ${selector}`);
        }
        this.element = el;
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = this.escape ? template.replace('/<script>[\s\S]*?<\/script>', '') : template;
    }
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
