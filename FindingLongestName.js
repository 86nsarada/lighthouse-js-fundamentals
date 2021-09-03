const instructorWithLongestName = function(instructors) {
    // Put your solution here
    let longestName = 0 ;
    let name='';
    let course='';
    for(let i=0; i < instructors.length ; i++)
    {
        if(instructors[i].name.length > longestName)
        {
            console.log("Name "+ instructors[i].name +" It length "+instructors[i].name.length)
            longestName = instructors[i].name.length;
            name = instructors[i].name;
            course = instructors[i].course;
        }
    }
    return {'name': name , 'course' : course}
  };
  
  console.log(instructorWithLongestName([
    {name: "Samuel DevRaj", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));