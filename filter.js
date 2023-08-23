// * filter selects elements based on a condition and returns an array with the elements that fulfilled the condition

const numbers = [1, 5, 9, 6, 3, 8, 78];

const player =[75, 65, 67, 72, 55, 59];

const selected = player.filter(p => p > 70);
console.log(selected); // [ 75, 72 ]

const selected2 = player.filter(p => p > 50);
console.log(selected2); // [ 75, 65, 67, 72, 55, 59 ]

const friends = ['Tom', 'Jerry', 'John', 'Larry', 'Peter'];

const oddFriends = friends.filter(f => f.length % 2 === 0)
console.log(oddFriends); // [ 'John' ]