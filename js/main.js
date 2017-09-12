class Main {
    constructor (name) {
        this.name = name
    }
    run () {
        let div = document.createElement("div"); 
        let content = document.createTextNode(`Running ${ this.name }...`); 
        div.appendChild(content);
        document.body.appendChild(div)
    }
}

let app = new Main("God")
app.run()
