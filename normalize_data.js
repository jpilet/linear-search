var data = require('./streets.json');

var normalizeString = require('./normalize.js').normalizeString;

for (var i = 0; i < data.length; ++i) {
  data[i].norm = normalizeString(data[i].name);
}

console.log(JSON.stringify(data));

