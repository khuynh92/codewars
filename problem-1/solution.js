//Pseudo: replace all periods with a dash, using the replace function. But make sure that the code does not stop at the first period, and continues throughout all the string
// use the 'g' after the first argument in the replace() function, to ensure that the function runs through the entirety of the string.

var replaceDots = function(str) {
  return str.replace(/\./g, '-');
};