// NPM: Node Padkage Module. Global Command, comes with nodeJS
// npm --version

// local dependency: use it only in this particular project
// npm i <packagename>

// global dependency: use it in any project
// npm i -g <packageName>

// package.json: manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create propreties etc)
// npm init (step by step, press enter to skip)
// npm init -y (set to default)

// setelah buat package.json, install package lodash
// npm i lodash
// jangan lupa untuk refresh explorer VS Code
// akan terbuat sebuah folder baru, yaitu node_modules (jika belum ada)
// di dalam node_modules, akan terbuat folder lodash

// setelah itu, install package bootstrap
// npm i bootstrap
// jangan lupa untuk refresh explorer VS Code
// akan terbuat sebuah folder baru, yaitu node_modules (jika belum ada)
// di dalam node_modules, akan terbuat folder baru, yaitu bootstrap dan @popperjs
// Hal tersebut terjadi karena package bootstrap memiliki dependencies ke package @popperjs jadi otomatis akan terinstall juga

const lodash = require('lodash')

const items = [1, [2, [3, [4]]]]
const flatten = lodash.flattenDeep(items)
console.log(items);
console.log(flatten);

// initiate repo di github
// janganlupa gitignore node_modules