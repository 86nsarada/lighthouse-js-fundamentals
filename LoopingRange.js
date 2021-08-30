const range = (start, end, step) => {

    if ((start !== null || start !== "undefined") && 
    (end !== null || end !== "undefined") && 
    (step !== null || step !== "undefined")) {
      if(start < end && (step !==0 && step > 0))
      {
        let outPutArray = [start]
        for (let i = start; i < end; i++) {
            if (end === start) {
                break;
            }
            start = start + step;
            i=start
            outPutArray.push(start)
        }
        return outPutArray;
      }
      else{
        return [];
      }
    }
    else {
        return [];
    }
}

console.log(range(-5, 2, 3));