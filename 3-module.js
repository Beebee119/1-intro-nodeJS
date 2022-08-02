// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const constjs = require('./const')
const sayHi = require('./utils')
const altjs = require('./alt')

console.log(altjs);
console.log(constjs.PETER);
sayHi(constjs.PETER)