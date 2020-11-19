const fs = require('fs')
const path = require('path')

const { resolve, extname } = path
const { readdirSync, statSync } = fs

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

  const files = readdirSync(path)
  if (files && typeof options === 'string') {
    return files.filter(item => extname(item) && extname(item).substring(1) === options)
  } else if (files && typeof options === 'object' && options.recursion) {
    return recursionDir(path)
  } else if (files && typeof options === 'object') {
    return files.filter(item => extname(item) && extname(item).substring(1) === options.extname)
  } else {
    return files
  }
}

function recursionDir(path) {
  const files = readdirSync(path)
  const result = []
  files.forEach((item) => {
    const status = statSync(resolve(path, item))
    if (status.isDirectory()) {
      result.push(...recursionDir(resolve(path, item)))
    } else if (status.isFile()) {
      result.push(item)
    }
  })
  return result
}

module.exports = getDirList