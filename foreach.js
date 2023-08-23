const numbers = [1, 5, 9, 6, 3, 8, 78];

// forEach act as Map but the defference is it dont returns anything at all
const result = numbers.forEach(n => {
    n += 5; // * do some action which dont return anything
})

console.log(result); 
// ! the output will be 'undefined'