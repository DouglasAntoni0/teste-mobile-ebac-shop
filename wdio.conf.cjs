exports.config = {
    user: 'oauth-douglas.doug1235-91973',
    key: 'b3325bb4-8459-40fe-bd01-cfc07649987f',
    
    region: 'us-west-1', 

    specs: [
        './test/specs/**/*.js'
    ],
    
    capabilities: [{
        "platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:app": "storage:filename=universal.apk", 
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