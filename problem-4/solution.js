
function insertDash(num) {
  var array = [];
  var numStr = num.toString()
  for (let j = 0; j < numStr.length; j++) {
   array.push(numStr[j]);
  }
  for(let i = array.length - 1 ; i >= 0; i--) {
    if(array[i] !== array.length - 1 && (array[i]%2 !== 0)  && (array[i+1]%2 !== 0)) {
      array.splice(i+1, 0, '-');
    }
  }
  if (array[array.length -1] === '-') {
    array.pop();
  }
  return array.join().replace(/\,/g, '');
}