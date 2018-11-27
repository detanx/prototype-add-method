## prototype-add-method
### 使用
####  下载安装
```javascript
1、下载：https://github.com/detanx/prototype-add-method
2、git获取：git clone git@github.com:detanx/prototype-add-method.git
3、npm下载：
 在项目中首先安装node环境
 检测是否安装node环境：win + r 输入cmd，在窗口中再输入node -v
 在项目中安装：
  npm i prototype-add-method
 使用：
  1、引入文件dist/prototype-add-method.js
```
### v1.0.10更新
#### 插件名
1、插件名暂定为_detanx，后续如有变化将在版本更新中说明。
#### 方法api更新
1、新增检查其是否符合美元书写格式方法：_detanx.isUSD(str)
2、新增原生Ajax请求方法：_detanx.xhrAjax(options)
2、移除arraySum数组求和方法
#### bug修改
1、stringHTU方法不再需要手动情况引用数组
2、getIndex方法调用方式错误，改变改方法的声明方式
#### api方法介绍完善
1、对之前未添加异常处理的方法添加相应的异常处理
2、完善接口的使用说明
### 方法api列表
#### isUSD
```
//检查其是否符合美元书写格式
用法:  _detanx.isUSD(str)
str 需检测的字段
示例：_detanx.isUSD("$1,023,032.03") // true
      _detanx.isUSD("$3,432,12.12") // false
```
#### xhrAjax
```
//封装原生Ajax请求
用法:  _detanx.xhrAjax({options})
str 需检测的字段
示例：* _detanx.xhrAjax({ 
 * type:"POST", 
 * url:"ajax.php", 
 * dataType:"json", 
 * data:{"val1":"abc","val2":123,"val3":"456"}, 
 * beforeSend:function(){ 
 *   //some js code 
 * }, 
 * success:function(msg){ 
 *   console.log(msg) 
 * }, 
 * error:function(){ 
 *   console.log("error") 
 * } 
 * })
```
#### strAllSub
```
//将某个字符串中的某个字段全部替换为新的字段，返回替换后的字符串
用法: _detanx.strAllSub(str, oldStr, newStr, isIgnoreCase)
str：目标字符串
oldStr：必填,目标字符串中需要替换的字段
newStr：必填,替换成新的字段
isIgnoreCase：可选，Boolean值，是否忽略英文大小写，默认为false，即不忽略
示例：_detanx.strAllSub("str",'s',"QWQ") // QWQtr
```
#### strCharPos
```
//查找字符串中某个字符串的所有起始位置，返回一个位置下标组成的数组
用法: _detanx.strCharPos(str, subStr)
str：目标字符串
subStr：查找的字符串
示例：_detanx.strCharPos("scssa","c") // [1]
```
#### arrayCharPos
```
//查找数组（限一维、二维数组）中某个字符的所有位置，返回对应位置的下标组成的一维或二维数组
用法: _detanx.arrayCharPos(arr, target)
arr：目标数组
target：查找的元素
示例：_detanx.arrayCharPos([1,2,3],2) // [1]
    _detanx.arrayCharPos([[2,1,2],[1,2,3]],2) // [[0, 0],[0, 2],[1, 1]]
```
#### arrayDeweight
```
//数组去重，一维数组至多维数组，返回去重后的数组
用法: _detanx.arrayDeweight(arr)
arr：目标数组
示例：_detanx.arrayDeweight([1,2,3,2]) // [1,2,3]
    _detanx.arrayDeweight([[1,2,3,3],[1,2,1]]) // [[1,2,3],[1,2]]
```
#### removeItem
```
//数组移除元素item（包括NaN、undefined、null），一维数组，返回移除元素item后的数组
用法: _detanx.removeItem(arr, target)
arr：目标数组
target：需要移除的元素
示例：_detanx.removeItem([1,2,3,NaN],NaN) //  [1, 2, 3]
```
#### addItem
```
//数组指定位置（index）添加元素item，一维数组，返回元素item后的数组
用法: _detanx.addItem(arr, target, index)
arr：目标数组
target：需要添加的元素
index 元素添加的位置，如果没传则默认在数组末尾添加
示例：_detanx.addItem([1,2,3,NaN],1,1) // [1,1,2,3,NaN]
      _detanx.addItem([1,2,3,NaN],1) // [1,2,3,NaN,1]
```
#### repeatEle
```
//数组重复出现的元素，一维数组，返回所有重复元素组成的新数组
用法: _detanx.repeatEle(arr)
arr：目标数组
示例：_detanx.repeatEle([1,2,3,NaN,2,NaN]) // [2,NaN]
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
#### isEmpty
```
//判断js数组/对象是否为空，返回boolean
用法: _detanx.isEmpty(arr/obj)
arr/obj: 目标数组/对象
示例：_detanx.isEmpty([1, 2, 3, 4]) // false
```
#### segArray
```
//数组分段, 返回分段后数组
用法: segArray(arr, size)
arr: 目标数组
length: 分段大小
示例：_detanx.segArray([1, 2, 3, 4], 2) // [[1, 2], [3, 4]]
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
#### stringHTU
```
//字符串驼峰式转下划线，返回string
用法: _detanx.stringHTU(str) 
str 需转换的字符串
示例：_detanx.stringHTU("sNamessS11") // "s_namess_s_11"
HTU (Hump transfer underline)
```
### 参与人员
[detanx](https://github.com/detanx)
[hyden-tan](https://github.com/hyden-tan)
[mschange](https://github.com/mschange)
[hzdgood](https://github.com/hzdgood)
