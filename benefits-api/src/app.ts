import express from 'express';

class App {
    public app: express.Application;

    constructor() {
        process.on("uncaughtException", (err) =>{
            console.error(err, "Uncaught Exception thrown");
            process.exit(1);
        })

        this.app = express();
    }
}

export default new App().app;