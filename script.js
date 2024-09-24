// console.log("Hello Node");

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

const fs = require('node:fs');

// fs.writeFile("./Files/message.txt", "Hello Guys", "utf8", () => {
//     console.log("File created successfully");
// });

// fs.readFile("./Files/message.txt", "utf8", (error, data) => {
//     if (error) console.log(error);
//     else console.log(data);
// });

// fs.readdir("./Files",(error, files) => {
//     if (error) console.log(error);
//     else console.log(files);
// })"

function readFileFromPath(fileName = "") {
    fs.readFile(`./Files/${fileName}`, "utf8", (error, data) => {
    if (error) console.log(error);
    else console.log(data);
});
}

fs.readdir("./Files",(error, files) => {
    if (error) console.log(error);
    else {
        for (var file of files) {
            readFileFromPath(file);
        }
    }
})"
