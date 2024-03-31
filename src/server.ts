import app from "./app";
import { Config } from "./config";

const startServer = () => {
    const port = Config.PORT;
    try {
        app.listen(port, () => {
            // eslint-disable-next-line no-console
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error while starting the server", error);
        process.exit(1);
    }
};

startServer();
