## prototype-add-method
![首页](/pic.gif)
### 使用
####  1、下载安装
```javascript
1、下载：https://github.com/detanx/prototype-add-method
2、git获取：git clone git@github.com:detanx/prototype-add-method.git
3、npm下载：
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
str.globalReplace(oldStr, newStr, isIgnoreCase)
str：目标字符串
oldStr：目标字符串中需要替换的字段
newStr：替换成新的字段
isIgnoreCase：Boolean值，是否忽略英文大小写，默认为false
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
//查找数组（限一维、二维数组）中某个字符的所有位置
arr.findAllOccurrences(target)
arr：目标数组
target：查找的元素
```
#### 4、uniqueElement
```
//数组去重
arr.uniqueElement()
arr：目标数组
```
#### 5、arraySum
```
//数组求和，当数组中传入null，undefined，NaN，字符串等非数字会被忽略
arr.arraySum()
arr：目标数组
```
#### 6、removeItem
```
//数组移除元素item（包括NaN、undefined、null）
arr.removeItem(target)
arr：目标数组
target：需要移除的元素
```
#### 7、addItem
```
//数组移指定位置index处添加元素item
arr.addItem(target)
arr：目标数组
target：需要添加的元素
```
#### 8、duplicates
```
//数组重复出现的元素
arr.duplicates()
arr：目标数组
```
