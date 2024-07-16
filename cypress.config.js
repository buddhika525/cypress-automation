const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const pino = require('pino');
const { func } = require("assert-plus");

fileTransport = null;
logger = null;

function setupPino(log_file,log_level){
  if(fileTransport==null){
    fileTransport = pino.transport({
      target: 'pino/file',
      options: { destination: log_file },
    });
  }
  
  if(logger==null){
    logger = pino(
    {
      level: process.env.PINO_LOG_LEVEL || log_level,
      formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
    },
      timestamp: pino.stdTimeFunctions.isoTime,
    },
      fileTransport
    );
  }
}
async function setupNodeEvents(on, config) {
   // implement node event listeners here
   on('task', {
    logInfo(text){
    
      logger.info(text);

      return null;
    },
    getLogger({log_file, log_level}){

      setupPino(log_file, log_level);

      return null;
    },
  });
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    specPattern: "../**/*.feature",
    setupNodeEvents,
  },
});