// install package nodemon namun jadikan sebagai devDependencies
// npm i nodemon -D
// atau npm i nodemon --save-dev
// kenapa kita menginstall nodemon sebagai devDependencies? karena nodemon tidak dibutuhkan di production
// nodemon hanya kita perlukan ketika melakukan dev

// tambahkan script di package.json
// "scripts": {
//     "start": "nodemon app.js"
//   }
// jalankan script tersebut dengan command npm run start
// nodemon akan menjalankan file app.js dan akan auto-restart ketika ada perubahan pada file tsb

// package-lock.json: file yang berfungsi versioning

// kalau kita lihat di package.json kita, akan ada version 1.2.0
// 1 itu major change
// 2 itu minor change, jadi kalau misalkan ada update (misalkan ke 1.3.0), tidak akan break 
// 0 itu patch untuk bufix