function formatWords(words) {
  if (!Array.isArray(words)) return '';

  words = words.filter(word => word);

  if (words.length === 0) return '';

  if (words.length === 1) {
    return words[0];
  } else {
    let last = words[words.length - 1];
    words.splice(words.length - 1, 1);
    return words.join(', ') + ' and ' + last;
  }
}
