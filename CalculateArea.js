const calculateRectangleArea = (legth,breadth) =>{
    if((!Number.isNaN(legth) && legth !== "undefined") && (!Number.isNaN(breadth) && breadth !== "undefined")){
        area = legth * breadth;
        if(legth > 0 && breadth >0 ){
        return area;
        }
        else{
          return "undefined";
        }
    }

}

const calculateTriangleArea = (base,height) =>{
    if((!Number.isNaN(base) && base !== "undefined") && (!Number.isNaN(height) && height !== "undefined")){

        if(base > 0 && height > 0){
        area = (base * height) / 2;
        return area;
        }
        else
        {
          return "undefined";
        }
    }
}

const calculateCircleArea = (redius) =>{
    if((!Number.isNaN(redius) && redius !== "undefined") ){
      
      if(redius > 0){
        area =  Math.PI * redius * redius;

        return area;
      }
      else{
        return "undefined";
      }
    }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(-1, 0));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(20)); // should print 314.159...
console.log(calculateCircleArea(1.5)); // should print 38.484...
console.log(calculateCircleArea(-1));