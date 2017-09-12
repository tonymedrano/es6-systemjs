import { God } from './god.js'

class Main extends God {
    constructor(name) {
        super(name)
    }
    run() {
        super.run()
    }
}

let app = new Main("God")
app.run()
