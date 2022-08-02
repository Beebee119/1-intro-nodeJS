const path = require('path')
const fs = require('fs')

const firstFilePath = path.resolve(__dirname, 'content','first.txt')
const secondFilePath = path.resolve(__dirname, 'content','second.txt')
const resultFilePath = path.resolve(__dirname, 'content','result-async.txt')

// read first.txt asynchronously
console.log("Start task");
fs.readFile(firstFilePath, 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
        return
    }
    const first = res
    // read second.txt asynchronously
    fs.readFile(secondFilePath, 'utf-8', (err, res) => {
        if (err) {
            console.log(err);
            return
        }
        const second = res
        fs.writeFile(resultFilePath, `Here is the result async: ${first}, ${second}`, (err, res) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(res);
        })
    })
})
console.log("Start next task");

// Disini kita menggunakan callback. Code nya jadi berantakan. Nanti bisa belajar caranya menggunakan async await