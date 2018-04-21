//Pseudo: Create a key by making an array and using the index of the array as the key. turn string into an array. Assign number value to each element of the array. Find the highest value with .reduce. record how many times it took using an array.length


function high(x) {
  let key = 'abcdefghijklmnopqrstuvwxyz';
  let ArrayKey = ['#'];

  key.split('').forEach(letter => ArrayKey.push(letter));

  let numArr = x.split(' ').map(word => word.split('').reduce((acc, cur) => acc + ArrayKey.indexOf(cur), 0));
  return x.split(' ')[numArr.indexOf(numArr.reduce((acc, cur) => (acc >= cur) ? acc : cur))];
}