import "reflect-metadata";
import app from "./app";
import { AppDataSource } from './data-source';

async function main() {
    try {
        const port = 3000;

        await AppDataSource.initialize();

        app.listen(port);
        
        console.log(`Server is listening on port ${port}`);
    } catch (error) {
        console.error(error)
    }
}

main();