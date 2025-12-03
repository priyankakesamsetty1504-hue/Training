

const browserVersion = "chrome";
function getBrowserVersion(browserVersion) 
{   
  
    if (browserVersion == "chrome") {
      var browserVersion="4.0.7";
      console.log("Launching Chrome browser",browserVersion);
      console.log(browserVersion);
}
else 
  {
    console.log("Please provide a valid browser name")
  }
}
console.log(browserVersion);
getBrowserVersion("chrome");
