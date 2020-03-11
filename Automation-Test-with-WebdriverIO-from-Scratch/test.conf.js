let chai = require("chai");

exports.config = {

    // Test Scripts
    specs: [
        "src/test-scripts/TC_ATM011_ATM_Taomoi.js",
        
    ],

    suites: {
        quanlylinhvuc: [
            "src/test-scripts/TC_001_QLLinhvuc_taomoi_LV.js",
            "src/test-scripts/TC_002_QLLinhvuc_xoa_LV.js",
            "src/test-scripts/TC_003_QLLinhvuc_sua_LV.js",
            "src/test-scripts/TC_004_QLLinhvuc_search_LV.js"
        ],
        login_function: [
            "src/test-scripts/TC_001_LoginOK.js",
            "src/test-scripts/TC_002_Login_wrong_username.js",
            "src/test-scripts/TC_003_Login_wrong_password.js" 
        ]
    },
    maxInstances: 1,

    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    runner: 'local',

    // Declare server info
    hostname: 'localhost',
    port: 9515,
    path: '//',

    baseUrl: "https://cms-abbank.mpire.vn",

    // Test Framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // Reporter config
    reporters: [
        ['junit', {
            outputDir: './reports'
        }]
    ],

    before: () => {
        global.expect = chai.expect;
    },

    afterTest: (test) =>{
        // i wanna save a PNG file  when the test Failed
        if (test.passed === false ){
            let fileName = test.fullTittle;
            browser.saveScreenshot('./'+ fileName + '.png')
        }
    }
}