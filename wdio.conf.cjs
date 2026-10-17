if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    throw new Error('Defina SAUCE_USERNAME e SAUCE_ACCESS_KEY antes de executar o WebdriverIO.');
}

exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    region: 'us-west-1', 

    specs: [
        './test/specs/**/*.js'
    ],

    capabilities: [{
        "platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:app": process.env.SAUCE_APP || "storage:filename=universal.apk", 
        "sauce:options": {
            "build": "ebac-shop-cadastro-build-final",
            "name": "Teste de Cadastro (Qualquer Celular Android)"
        }
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [],

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 180000 
    },
}
