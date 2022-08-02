// BUILT-IN MODULE IN NODE : os, path, fs (filesystem), http
// bisa juga liat ke docs nya nodejs
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in second(s)
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);