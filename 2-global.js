// GLOBALS - NO WINDOW !!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (commonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed (local / DigitalOcean / Heroku kalau sudah di deploy)
console.log(`dirname: ` + __dirname);
setInterval(() => {
    console.log("print every 1 second");
}, 1000);