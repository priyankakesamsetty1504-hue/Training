//string enum

enum Testresults
{
    PASS="passed",
    FAIL="failed",
    BLOCKED="blocked",
    WIP="wip"
}
function logTestResults(results : Testresults)
{
    console.log(`Test : ${results}`);
}
logTestResults(Testresults.PASS);

//numeric enum

enum StatusCodes{
    SUCCESS=200,
    NOT_FOUND=404,
    SERVER_ERROR=500
}
function logStatusCode(code: StatusCodes)
{
    console.log(`Status Code : ${code}`);
}   
logStatusCode(StatusCodes.SUCCESS);
logStatusCode(StatusCodes.NOT_FOUND);   

//combination of string and numeric enum

enum MixedEnum{
    START="start",
    IN_PROGRESS=1,
    COMPLETED="completed",
    FAILED=0,
    worked   
}
function logMixedEnum(value: MixedEnum)
{
    console.log(`Mixed Enum Value : ${value}`);
}   
logMixedEnum(MixedEnum.START);
logMixedEnum(MixedEnum.worked);

enum Environment{
    Local,
    Development="passed",
    Staging=600,
    Production
}
function runTests(Environement: Environment): void
{
    console.log(`Running tests in ${Environement}`);
}
runTests(Environment.Development);
runTests(Environment.Production);