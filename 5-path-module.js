const path = require('path')

// sepaarator di powershell berbeda dengan bash/zsh
console.log(path.sep)

// to overfcome perbedaan separator tsb, gunakan filepath.join
const filePath = path.join('./content','subfolder','text.txt')
console.log(filePath);

// extract file name
const base = path.basename(filePath)
console.log(base);

// create absolute path
const absolute = path.resolve(__dirname, 'content','subfolder','text.txt')
console.log(absolute);