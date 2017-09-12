export class God {
    constructor(name) {
        this.name = name
    }
    run() {
        let div = document.createElement("div");
        let content = document.createTextNode(`Running ${this.name}...`);
        div.appendChild(content);
        document.body.appendChild(div)
    }
}
