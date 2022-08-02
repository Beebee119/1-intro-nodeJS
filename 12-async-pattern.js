// ANOTHER WAY TO DO 7-fs-module.js

// 1. menggunakan async await

// const path = require('path')
// const fs = require('fs')

// const firstFilePath = path.resolve(__dirname, 'content','first.txt')
// const secondFilePath = path.resolve(__dirname, 'content','second.txt')

// const getText = (path) => {
//     return new Promise((reslove, reject) => {
//         fs.readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             reslove(data)
//         })
//     })
// }

// const start = async () => {
//     try {
//         const first = await getText(firstFilePath)
//         const second = await getText(secondFilePath)
//         console.log(`First: ${first}`);
//         console.log(`Second: ${second}`);
//     } catch (error) {
//         console.log(error);        
//     }
// }

// console.log("Start task");
// start()
// console.log("Start next task");

// 2. cool way

// const path = require('path')
// const fs = require('fs')
// const util = require('util')

// const firstFilePath = path.resolve(__dirname, 'content','first.txt')
// const secondFilePath = path.resolve(__dirname, 'content','second.txt')
// const resultFilePath = path.resolve(__dirname, 'content','result-async.txt')
// const readFilePromise = util.promisify(fs.readFile)
// const writeFilePromise = util.promisify(fs.writeFile)

// const start = async () => {
//     try {
//         const first = await readFilePromise(firstFilePath, 'utf-8')
//         const second = await readFilePromise(secondFilePath, 'utf-8')
//         console.log(`First: ${first}`);
//         console.log(`Second: ${second}`);
//         await writeFilePromise(resultFilePath, `Here is the result async guys: ${first}, ${second}`)
//     } catch (error) {
//         console.log(error);
//     }
// }

// console.log("Start task");
// start()
// console.log("Start next task");

// 3. More Cool Way !!

const {readFile, writeFile} = require('fs').promises
const path = require('path')

const firstFilePath = path.resolve(__dirname, 'content','first.txt')
const secondFilePath = path.resolve(__dirname, 'content','second.txt')
const resultFilePath = path.resolve(__dirname, 'content','result-async.txt')

const start = async () => {
    try {
        const first = await readFile(firstFilePath, 'utf-8')
        const second = await readFile(secondFilePath, 'utf-8')
        console.log(`First: ${first}`); 
        console.log(`Second: ${second}`);
        await writeFile(resultFilePath, `More cool ways to writeFile guys: ${first}, ${second}`) 
    } catch (error) {
        console.log(error);
    }
}

console.log("Start task");
start()
console.log("Start next task");