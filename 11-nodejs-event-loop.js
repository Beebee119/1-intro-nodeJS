// event loop berguna agar Javascript tidak menunggu fungsi synchronous yang lama (mirip kayak asynchronous ???)
// offload yang asynchronous, then run the callback 
const {readFile} = require('fs')
const path = require('path')

console.log('Begin the task');
const firstFilePath = path.resolve(__dirname,'content','first.txt')
readFile(firstFilePath, 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(res);
    console.log('Finished task');
})
console.log('Begin next task');

// program akan mengeluarkan hasil : 
// Begin the task
// Begin next task
// this is first txt
// Finished task

// Hal tersebut terjadi karena readFile merupakan fungsi asynchronous dan akan di-offload