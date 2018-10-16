## prototype-add-method
![首页](/pic.gif)
### 使用
####  下载安装
```javascript
1、下载：https://github.com/detanx/prototype-add-method
2、git获取：git clone git@github.com:detanx/prototype-add-method.git
3、npm下载：
 在项目中首先安装node环境
 检测是否安装node环境：win + r 输入cmd，在窗口中再输入node -v
 在项目中安装：npm init 
          npm install --save-dev prototype-add-method
 使用   1、import 'prototype-add-method'
    2、require('prototype-add-method')
    3、引入dist/prototype-add-method.js
```
### 方法api列表
#### strAllSub
```javascript
//将某个字符串中的某个字段全部替换为新的字段，返回替换后的字符串
用法: _detanx.strAllSub(str, oldStr, newStr, isIgnoreCase)
str：目标字符串
oldStr：必填,目标字符串中需要替换的字段
newStr：必填,替换成新的字段
isIgnoreCase：可选，Boolean值，是否忽略英文大小写，默认为false
```
#### strCharPos
```
//查找字符串中某个字符串的所有起始位置，返回一个位置下标组成的数组
用法: _detanx.strCharPos(str, subStr)
str：目标字符串
subStr：查找的字符串
```
#### arrayCharPos
```
//查找数组（限一维、二维数组）中某个字符的所有位置，返回对应位置的下标组成的一维或二维数组
用法: _detanx.arrayCharPos(arr, target)
arr：目标数组
target：查找的元素
```
#### arrayDeweight
```
//数组去重，一维数组至多维数组，返回去重后的数组
用法: _detanx.arrayDeweight(arr)
arr：目标数组
```
#### arraySum
```
//数组求和，一维数组至多维数组，，当数组中传入null，undefined，NaN，字符串等非数字会被忽略，返回数组中数字相加之和（Number类型）
用法: _detanx.arraySum(arr)
arr：目标数组
```
#### removeItem
```
//数组移除元素item（包括NaN、undefined、null），一维数组，返回移除元素item后的数组
用法: _detanx.removeItem(arr, target)
arr：目标数组
target：需要移除的元素
```
#### addItem
```
//数组移指定位置index处添加元素item，一维数组，返回元素item后的数组
用法: _detanx.addItem(arr, target)
arr：目标数组
target：需要添加的元素
```
#### repeatEle
```
//数组重复出现的元素，一维数组，返回所有重复元素组成的新数组
用法: _detanx.repeatEle(arr)
arr：目标数组
```
#### 9、arrayDimen
```
//获取数组的维度，返回number
用法: _detanx.arrayDimen(arr)
arr：目标数组
```
#### 获取鼠标位置
```
//获取鼠标位置对象，包含三个方法，返回鼠标位置对象{x:"",y:""}
//相对屏幕位置
  用法: _detanx.screenMousePos(event);//event为事件状态对象
//相对浏览器位置
  用法: _detanx.browserMousePos(event);//event为事件状态对象
//相对文档位置
  用法: _detanx.documentMousePos(event);//event为事件状态对象
示例：window.onmousemove = function(e) {
      console.log(_detanx.screenMousePosition(e))
     }
```
#### _detanx.isEmpty
```
//判断js数组/对象是否为空，返回boolean
用法: _detanx.isEmpty(arr/obj)
arr/obj: 目标数组/对象
示例：isEmpty([1, 2, 3, 4]) // false
```
#### segArray
```
//数组分段, 返回分段后数组
用法: segArray(arr, size)
arr: 目标数组
length: 分段大小
示例：segArray([1, 2, 3, 4], 2) // [[1, 2], [3, 4]]
```
#### isInclude
```
//字符串/数组B的字符任意一种组合是否是字符串/数组A的子串，返回boolean
用法: _detanx.isInclude(A, B)
A 原字符串/数组
B 子字符串/数组
示例：_detanx.isInclude("abc123", "cba") // true
```
#### randomCode
```
//生成随机n个字母或数字，返回string
用法: _detanx.randomCode(n)
n 整数
示例：_detanx.randomCode(6) // "abc123"
```
#### 15、stringHTU
```
//字符串驼峰式转下划线，返回string
用法: _detanx.stringHTU(n) 
str 需转换的字符串
示例：_detanx.stringHTU("sNamessS11") // "s_namess_s_11"
HTU (Hump transfer underline)
```
### 参与人员
[detanx](https://github.com/detanx)
[hyden-tan](https://github.com/hyden-tan)
[mschange](https://github.com/mschange)
[hzdgood](https://github.com/hzdgood)
