const fs = require('fs')
const path = require('path')

const { resolve, extname } = path
const { readdir, readdirSync, stat } = fs

/**
 * 检索出当前页面的文件列表名称。
 * @param  { String }   path     : 查询的路径，必须； 
 * @param  { String | Object }   options  : 如果 options 是个字符串，则它表示 extname
 *          extname:    过滤出需要的后缀文件；
 *          recursion:  递归出所有文件
 * @return { Array } 返回一个当前路径对应的文件列表。
 */
function getDirList(path, options) {
  if (!path) throw new Error('path is require')

  // let result = []
  // readdir(path, (error, files) => {
  //   if (error) throw error
  //   // 判断 options 
  //   if (typeof options === 'string') {
  //     result = files.filter(item => extname(item) && extname(item).substring(1) === options)
  //   } else if (typeof options === 'object') {

  //   } else {
  //     result = files
  //   }
  // })
  // console.log(result);

  const files = readdirSync(path)
  if (files && typeof options === 'string') {
    return files.filter(item => extname(item) && extname(item).substring(1) === options)
  } else {
    return files
  }
}

module.exports = getDirList