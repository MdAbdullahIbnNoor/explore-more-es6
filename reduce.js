const players =[75, 65, 67, 72, 55, 59];

const sum = players.reduce((previous, current) => previous * current, 1)
console.log(sum);

/**
 * previous = 75
 * current = 1
 * 
 * sum = 75 * 1
 * sum = 65 * 75 * 1
 * sum = 67 * 65 * 75 * 1
 * sum = 72 * 67 * 65 * 75 * 1
 * sum = 55 * 72 * 67 * 65 * 75 * 1
 * sum = 59 * 55 * 72 * 67 * 65 * 75 * 1
 */