// solution 1

function abbrevName(name) {
  var nameSplit = name.split(' ');
  return (nameSplit[0][0] + '.' + nameSplit[1][0]).toUpperCase();
}

// solution 2

function abbrevName(name) {
  return (`${name[0]}.${name.substr(name.indexOf(' ') + 1)[0]}`).toUpperCase();
}
