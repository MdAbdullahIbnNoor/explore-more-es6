const numbers = [4, 5, 2, 8, 10];
 
// ? Option-1 using Mapping

function doubleIt(num) {
    return num * 2;
}

// *map loop through the array and call-back function given as a paranthesis performs the function over the array elements and save internally then when the looping through is done then return the whole result at once.

const double = numbers.map(doubleIt);
// console.log(double);

// ? Option-2 using Mapping

const double2 = n => n*2;

const result = numbers.map(double2);
// console.log(result);

// ? Option-3 using mapping

const output = numbers.map(n => n * 2);
console.log(output);

//  const doubled = [];

//  for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
//  }

// console.log(doubled);

