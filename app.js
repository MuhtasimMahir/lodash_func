const _ = {
  clamp (number,lowBound, upperBound) {
    // if (number < lowBound){
    //   return lowBound;
    // } else if (number > upperBound){
    //   return upperBound;
    // } else if (number > lowBound && number < upperBound){
    //   return number;
    // }
  

  // return (number < lowBound) ? lowBound : (number > upperBound) ? upperBound : (number > lowBound && number < upperBound) ? number : false;
  // }

  const lClamp = Math.max(number, lowBound);
  const clampVal = Math.min(lClamp, upperBound);
  return clampVal;
  },
  inRange(number, start, end){
    if(end === undefined){
      end = start 
      start = 0
    }
    if(start > end){
      let temp = end 
      end = start 
      start = temp
    }
    let isInRange = start <= number && number < end; 
    return isInRange
  },
  words(string){
    const words = string.split(' ');
    return words;
  },
  
  
};

//test1 = _.clamp(-10, -5, 5);
//test2 = _.inRange(3, 5, 4);
test3 = _.words('The brown fox jumps over the lazy dog')
console.log(test3);

// Do not write or modify code below this line.
module.exports = _;