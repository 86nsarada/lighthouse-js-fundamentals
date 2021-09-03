const urlEncode = function(text) {
    // Put your solution here
    const space=/\s/g;
    return text.replace(space,'%20')
  }
  
  console.log(urlEncode("Lighthouse Labs"));
  console.log(urlEncode(" Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));
