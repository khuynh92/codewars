function formatWords(words) {

  if (Array.isArray(words) && words.includes('')) {
    while (words.includes('')) {
      index = words.indexOf('');
      words.splice(index, 1);
    }
  }

  if (!Array.isArray(words) || words.length === 0) {
    return '';
  } else {
    if (words.length === 1) {
      return words[0];
    } else {
      let last = words[words.length - 1];
      words.splice(words.length - 1, 1)
      return words.join(', ') + ' and ' + last;
    }
  }
}
