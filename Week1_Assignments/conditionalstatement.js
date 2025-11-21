const { run } = require("node:test");

function launchbrowser(browsername) {
    if (browsername === "chrome") {
        console.log("launching chrome browser");
    }else
        console.log("anyother browser");
}
launchbrowser("chrome");

function runTests(testType) {
switch (testType) {
    case "smoke":
        console.log("Running smoke tests"); 
        break;
    case "regression":
        console.log("Running regression tests");
        break;
    case "sanity":
        console.log("Running sanity tests");
        break;
    default:
        console.log("running smoke tests by default");
        break;
}
}
runTests("regress"); 
