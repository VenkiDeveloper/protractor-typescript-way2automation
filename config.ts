import { ProtractorBrowser, Config, browser } from "protractor";
import { SpecReporter } from "jasmine-spec-reporter";

export let config: Config = {
    directConnect: true,
    framework: 'jasmine2',
    //specs: ['../temp/specs/multiform/multiformSpec.js'],
    suites: {
        registration: '../temp/specs/registration/registrationSpec.js',
        multiform: '../temp/specs/multiform/multiformSpec.js',
        checkboxes: '../temp/specs/checkboxes/checkboxSpec.js'
    },
    capabilities: {
        browserName: 'firefox'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true,
       print: function() {}
    },
    noGlobals: true,
    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            },
            summary: {
                displayDuration: true
            }
        }));
       
        let globals = require('protractor');
        let browser = globals.browser;
        browser.ignoreSynchronization = true;
       // browser.manage().timeouts().implicitlyWait(5000);
    }
};