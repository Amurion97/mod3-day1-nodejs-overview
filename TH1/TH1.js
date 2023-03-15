import * as fs from "fs";
// const fs = require("fs");

console.log("Start");
fs.readFile('./scratch.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
console.log("End");