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
  pad(string, length){
    if (length <= string.length){
        return string;
      }
    
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = (length - string.length) - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(obj, key) {
    const hasValue = (obj[key] !== undefined);
    return hasValue;
  },
  invert(obj){
    invertedObject = {};
    for (let key in obj) {
      const originalValue = obj[key];
      invertedObject = {originalValue: key};
    }
    return invertedObject;
  },
  findkey(obj, predicate){
    for (let key in obj){
      let value = obj[key];
      let predicateReturnValue  = predicate(value);
      if (predicateReturnValue){
        return key;
      }
    }
    return undefined;
  },
  drop(arr, n){
    if(n === undefined){
      n = 1;
    }
    let droppedArray = arr.slice(n);
    return droppedArray;
  },
  dropWhile(arr, predicate){
    const dropNumber = arr.findIndex((element, index) => !predicate(element, index, arr));
    const droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  }
};

//test1 = _.clamp(-10, -5, 5);
//test2 = _.inRange(3, 5, 4);
test3 = _.words('The brown fox jumps over the lazy dog');
console.log(test3);

// Do not write or modify code below this line.
module.exports = _;