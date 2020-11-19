const path = require('path')
const getDir = require('./index.js')

const result = getDir(path.resolve(__dirname, './assets'), { recursion: true })
console.log(result);