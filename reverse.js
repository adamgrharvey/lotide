const reverse = function() {
  let out = "";
  for (let i = 2; i < process.argv.length; i++) {
    for (let j = process.argv[i].length - 1; j >= 0; j--) {
      out += process.argv[i][j];
    }
    console.log(out);
    out = "";
  }
};

module.exports = reverse;