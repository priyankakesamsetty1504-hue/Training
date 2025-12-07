//string enum
var Testresults;
(function (Testresults) {
    Testresults["PASS"] = "passed";
    Testresults["FAIL"] = "failed";
    Testresults["BLOCKED"] = "blocked";
    Testresults["WIP"] = "wip";
})(Testresults || (Testresults = {}));
function logTestResults(results) {
    console.log("Test : ".concat(results));
}
logTestResults(Testresults.PASS);
//numeric enum
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["SUCCESS"] = 200] = "SUCCESS";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCodes[StatusCodes["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(StatusCodes || (StatusCodes = {}));
function logStatusCode(code) {
    console.log("Status Code : ".concat(code));
}
logStatusCode(StatusCodes.SUCCESS);
logStatusCode(StatusCodes.NOT_FOUND);
//combination of string and numeric enum
var MixedEnum;
(function (MixedEnum) {
    MixedEnum["START"] = "start";
    MixedEnum[MixedEnum["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    MixedEnum["COMPLETED"] = "completed";
    MixedEnum[MixedEnum["FAILED"] = 0] = "FAILED";
    MixedEnum[MixedEnum["worked"] = 1] = "worked";
})(MixedEnum || (MixedEnum = {}));
function logMixedEnum(value) {
    console.log("Mixed Enum Value : ".concat(value));
}
logMixedEnum(MixedEnum.START);
logMixedEnum(MixedEnum.worked);
var Environment;
(function (Environment) {
    Environment[Environment["Local"] = 0] = "Local";
    Environment["Development"] = "passed";
    Environment[Environment["Staging"] = 600] = "Staging";
    Environment[Environment["Production"] = 601] = "Production";
})(Environment || (Environment = {}));
function runTests(Environement) {
    console.log("Running tests in ".concat(Environement));
}
runTests(Environment.Development);
runTests(Environment.Production);
