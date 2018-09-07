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
//将某个字符串中的某个字段全部替换为新的字段，返回替换后的字符串
str.globalReplace(oldStr, newStr, isIgnoreCase)
str：目标字符串
oldStr：必填,目标字符串中需要替换的字段
newStr：必填,替换成新的字段
isIgnoreCase：可选，Boolean值，是否忽略英文大小写，默认为false
```
#### 2、strCharPositions
```
//查找字符串中某个字符串的所有起始位置，返回一个位置下标组成的数组
str.strCharPositions(subStr)
str：目标字符串
subStr：查找的字符串
```
#### 3、targetOccurs
```
//查找数组（限一维、二维数组）中某个字符的所有位置，返回对应位置的下标组成的一维或二维数组
arr.targetOccur(target)
arr：目标数组
target：查找的元素
```
#### 4、uniqueElement
```
//数组去重，一维数组至多维数组，返回去重后的数组
arr.uniqueElement()
arr：目标数组
```
#### 5、arraySum
```
//数组求和，一维数组至多维数组，，当数组中传入null，undefined，NaN，字符串等非数字会被忽略，返回数组中数字相加之和（Number类型）
arr.arraySum()
arr：目标数组
```
#### 6、removeItem
```
//数组移除元素item（包括NaN、undefined、null），一维数组，返回移除元素item后的数组
arr.removeItem(target)
arr：目标数组
target：需要移除的元素
```
#### 7、addItem
```
//数组移指定位置index处添加元素item，一维数组，返回元素item后的数组
arr.addItem(target)
arr：目标数组
target：需要添加的元素
```
#### 8、duplicates
```
//数组重复出现的元素，一维数组，返回所有重复元素组成的新数组
arr.duplicates()
arr：目标数组
```
### 参与人员
[detanx](https://github.com/detanx)
[hyden-tan](https://github.com/hyden-tan)
[mschange](https://github.com/mschange)
[hzdgood](https://github.com/hzdgood)
