const pigLatin = function() {
  let out = "";
  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i].length > 1) {
      out += process.argv[i].substring(1, process.argv[i].length);
      out += process.argv[i][0] + "ay ";
    }
  }
  console.log(out);
};
pigLatin();