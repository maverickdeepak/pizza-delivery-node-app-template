import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = () => {
    const port = Config.PORT;
    try {
        app.listen(port, () => {
            logger.info(`Server is running on port ${port}`);
        });
    } catch (error) {
        if (error instanceof Error)
            logger.error("Error while starting the server", error.message);
        process.exit(1);
    }
};

startServer();
