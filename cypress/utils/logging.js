const pino = require('pino');

// Create a logger instance
const logger = pino({
    // Configure pino options as needed
    level: process.env.LOG_LEVEL || 'info',  // Adjust log level as per your needs
    prettyPrint: { colorize: true },  // Example of pretty printing logs
});

// Export the logger instance
export default logger;