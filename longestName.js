const instructorWithLongestName = function(instructors) {
    // Put your solution here
    let longestName = 0 ;
    let name='';
    let course='';
    for(let i=0; i < instructors.length ; i++)
    {
        if(instructors[i].name.length > longestName)
        {
            longestName= instructors[i].name.length;
            name = instructors[i].name;
            course = instructors[i].course;
        }
    }
    return {'name': name , 'course' : course}
  };
  
  console.log(instructorWithLongestName([
    {name: "Samuel Raj", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald Trump X", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David XXXXXX", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));