const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const getQuoteByAuthor = (person, array) => {
  return array.filter(item => item.person === person)
}


module.exports = {
  getRandomElement,
  getQuoteByAuthor
};



