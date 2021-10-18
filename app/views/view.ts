export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string, private escape?: boolean) {
        const el = document.querySelector(selector);
        if (!el) {
            throw new Error(`Element not found: ${selector}`);
        }

        this.element = el as HTMLElement;
    }


    protected abstract template(model: T): string;

    public update(model: T): void {
        const template = this.template(model);
        this.element.innerHTML = this.escape ? template.replace('/<script>[\s\S]*?<\/script>', '') : template;
    }

    protected formatDate(date: Date): string {
        return new Intl.DateTimeFormat().format(date);
    }
}