export class View {
    constructor(selector, escape) {
        this.escape = escape;
        const el = $(selector);
        if (!el) {
            throw new Error(`Element not found: ${selector}`);
        }
        this.element = el;
    }
    update(model) {
        const template = this.template(model);
        this.element.html(this.escape ? template.replace('/<script>[\s\S]*?<\/script>', '') : template);
    }
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
