
// takes two arr arguments, concats them in new arr and returns new arr
const theBeatlesPlay = (musiciansArr, InstrumentArr) => {
  const emptyArr = [];
  for ( let i = 0; i < musiciansArr.length && i < InstrumentArr.length; i++) {
    let string = `${musiciansArr[i]} plays ${InstrumentArr[i]}`;
    emptyArr.push(string);
  }
  return emptyArr;
};

// takes an arr argument, iterates over it to create new string,
// and pushes it to the new arr which will be returned
const johnLennonFacts = facts => {
  const newArr = [];
  let iter = 0;
  while (iter < facts.length) {
   let string = facts[iter] + '!!!';
   newArr.push(string);
   iter++;
  }
  return newArr;
};

// takes a num, and executes loop at least once (do while loop) to
// create new strings in a new arr and returns new arr
const iLoveTheBeatles = num => {
  const newArr = [];
  do {
    newArr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return newArr;
};