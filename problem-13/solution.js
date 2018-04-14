function cubeOdd(arr) {
  return arr.map(element => /\d/.test(element) ? element : element = false).includes(false) ? undefined : arr.filter(element => Math.abs(element) % 2 === 1).reduce((acc, cur) => acc + Math.pow(cur, 3), 0);
}