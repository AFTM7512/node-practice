const path = require('path')
const getDir = require('./index.js')

const result = getDir(path.resolve(__dirname, './assets'), 'jpg')
console.log(result);