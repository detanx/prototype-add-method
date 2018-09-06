## prototype-add-method
![首页](/pic.gif)
### 使用
####  1、下载安装
```javascript
在项目中首先安装node环境
检测是否安装node环境：win + r 输入cmd，在窗口中再输入node -v
在项目中安装：npm init 
              npm install --save-dev prototype-add-method
使用：import 'prototype-add-method'
      require('prototype-add-method')
```
### 方法api列表
#### 1、globalReplace
```javascript
//将某个字符串中的某个字段全部替换为新的字段
str.globalReplace(oldStr, newStr)
str：目标字符串
oldStr：目标字符串中需要替换的字段
newStr：替换成新的字段
```
#### 2、findAllPosition
```
//查找字符串中某个字符串的所有起始位置
str.findAllPosition(subStr)
str：目标字符串
subStr：查找的字符串
```
#### 3、findAllOccurrences
```
//查找数组中某个字符的所有位置
arr.findAllOccurrences(target)
str：目标数组
subStr：查找的元素
```
#### 4、执行
```javascript
1、在项目根目录：npm run dev
// npm run build(打包)
2、另打开一个命令窗口，在react-redux\src\nodejs下执行：node startexe.js
```
#### 5、打开浏览器浏览 http://localhost:3000/

Tips：在安装node-sass的时候，有可能不成功，如不成功，请先删除 node_modules ，然后将镜像源换成taobao的，再执行npm install 或 yarn install；
* 删除 node_modules
```javascript
rd/s/q node_modules
```
* 切换淘宝镜像源
```bash
npm config set registry http://registry.npm.taobao.org
或
yarn config set registry http://registry.npm.taobao.org
```
* 再安装依赖
```bash
npm install
yarn 或 yarn install
```
也可以单独为node-sass设置淘宝的二进制包镜像
```bash
npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
或
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```
