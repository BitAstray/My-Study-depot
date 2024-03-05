const fs = require("fs");
const Promise = require("./promise");

function read(filename) {
  let dfd = Promise.defer();
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      dfd.reject(err);
    } else {
      dfd.resolve(data);
    }
  });

  return dfd.promise;
}

read("./name.txt").then(data => {
  console.log(data);
});
