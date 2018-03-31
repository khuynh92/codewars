function isNice(arr){
  let key = [];
    arr.forEach(number => key.push(false));
    
    for(var i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) {
          key[i] = true;
        }
    }
    if (key.includes(false) || arr.length === 0) {
      return false;
    } else {
      return true;
    }
}