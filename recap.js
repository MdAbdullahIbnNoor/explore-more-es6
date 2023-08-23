/** 
 * * 1. var let constant
 * ? 2. !! we will use let and constant because it remains in block but 
 * ! 3. var get spoiled outside of the block so we wont us var
*/

const a = 56;
const numbers = [56, 7, 8];
const person = {
    name : 'Sakib Khan'
}

const message = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`

if(true){

}

const square = x => x * x;
const sum = (a, b) => a + b;

const {age, z, ...others} = {x: 2, y:5, z:3, name: 'Noor', age: 27};

const [one, two, ...remains] = ['abc', 'def', 'ghi', 'jkl'];