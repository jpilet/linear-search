var data = require('./normalized.json');

var normalizeString = require('./normalize.js').normalizeString;

function search(query) {
  var result = [];
  var word = normalizeString(query);
  console.log('Searching for: ' + word);
  for (var i = 0; i < data.length; ++i) {
    if (data[i].norm.search(word) != -1) {
      result.push(i);
      if (result.length > 20) {
        return result;
      }
    }
  }
  return result;
}

var r = search(process.argv[2]);
for (var i = 0; i < r.length; ++i) {
  var entry = data[r[i]];
  console.log(entry.name + ': ' + entry.pos[1] + ',' + entry.pos[0]);
}
