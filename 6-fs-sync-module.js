const path = require('path')
const fs = require('fs')

const firstFilePath = path.resolve(__dirname, 'content','first.txt')
const secondFilePath = path.resolve(__dirname, 'content','second.txt')
const resultFilePath = path.resolve(__dirname, 'content','result-sync.txt')

const first = fs.readFileSync(firstFilePath, 'utf-8')
const second = fs.readFileSync(secondFilePath, 'utf-8')
// console.log(first,second);

// rewrite file
fs.writeFileSync(resultFilePath, `Here is the result: ${first}, ${second}`)
// append file
fs.writeFileSync(resultFilePath, `Here is the result: ${first}, ${second}`, {flag: 'a'})