const fs   = require('fs')
const path = require('path')

const { resolve } = path
const { readdir, stat } = fs

/**
 * 检索出当前页面的文件列表名称。
 * @param  { String }   path     : 查询的路径，必须； 
 * @param  { String }   extname  : 
 * @param  { Function } callback :
 * @return { Array } 返回一个当前路径对应的文件列表。
 */
function getDirList(path, extname, callback) {
  console.log(path);
  if (!path) new Error('path is require')
}

module.exports = getDirList