//插件
(function(){
  //定义一些默认参数，示例
  var _options={
      default_word:'default hello'                
  }
  //定义一些api
  var _plugin_api = {
/**
  * @description 将某个字符串中的某个字段全部替换为新的字段
  * @example 用法: _detanx.strAllSub(str, oldStr, newStr, isIgnoreCase)
  * @param str 目标字符串
  * @param oldStr {string}  - 目标字符串中需要替换的字段.
  * @param newStr {string}  - 替换成新的字段.
  * @param isIgnoreCase {boolean}  - 是否忽略英文大小写，默认为false.
  * @return {array}
*/
  strAllSub : function(str, oldStr, newStr, isIgnoreCase){//oldStr替换成newStr 
    if(typeof isIgnoreCase === 'boolean' && isIgnoreCase.toString() === 'true') {
      isIgnoreCase = 'gi'
    }else {
      isIgnoreCase = 'g'
    }
    try {
      if(typeof str !== "string" && typeof oldStr !== "string" && typeof newStr !== "string" ) {
        throw new SyntaxError('parameter is not a string.' );
      }
      if(typeof oldStr === 'undefined') {
        throw new SyntaxError('strAllSub methods lack of parameters.' );
      }
      if(typeof newStr === 'undefined') {
        throw new SyntaxError('strAllSub methods lack of parameters.' );
      }
      let reg = new RegExp(oldStr, isIgnoreCase); //创建正则RegExp对象 
      return str.replace(reg, newStr); 
    }
    catch(err) {
      console.error(err);
    }
  },
/**
  * @description 查找字符串中某个字符的所有起始位置
  * @example 用法: _detanx.strCharPos(str, subStr)
  * @param str 目标字符串
  * @param subStr {string}  - 查找的字符串.
  * @return {array}
*/
  strCharPos : function(str, subStr) {
    let arr = [];
    try {
      if(typeof str !== "string") {
        throw new SyntaxError('first parameter is not a string.' );
      }
      if(typeof subStr === 'undefined') {
        throw new SyntaxError('strCharPos methods lack of parameters.')
      }
      let positions = str.indexOf(subStr);
      while(positions > -1){
        arr.push(positions);
        positions = str.indexOf(subStr,positions + 1);
      }
      return arr;
    }
    catch (err) {
      console.error(err);
    } 
  },
/**
  * @description 查找数组（限一维、二维数组）中某个字符的所有位置
  * @example 用法: _detanx.arrayCharPos(arr, target)
  * @param arr 目标数组
  * @param target 查询元素
  * @return {array}
*/
  arrayCharPos : function(arr, target) {
    try {
      if(!(arr instanceof Array)){
        throw new SyntaxError('first parameter is not an Array.' );
      }else {
        var result = [];
        for(let i = 0;i < arr.length; i ++) {
          if(arr[i] instanceof Array) {
            arr[i].filter(function(item,index) {
              return item === target && result.push([i,index]);
            });
          }
        } 
        arr.filter(function(item,index) {
          return item === target && result.push(index);
        });
        return result;
      }
    }
    catch (err) {
      console.error(err);
    }
  },
/**
  * @description 任意维度数组去重
  * @example 用法: _detanx.arrayDeweight(arr)
  * @param arr 目标数组
  * @return {array}
*/
  arrayDeweight : function(arr) {
    //判断是否支持[native code]
    function isNative(api){
      return /native code/.test(api.toString()) && typeof api !== 'undefined'
    }
    try {
      if(!(arr instanceof Array)){
        throw new SyntaxError('parameter is not an Array.' );
      }else {
        for (let i = 0;i < arr.length;i ++){
          if(arr[i] instanceof Array){
            if(isNative(Set)) {
              arr[i] = Array.from(new Set(arr[i]));
            }
            else {
              let newarr = [];
              let len = arr[i].length;
              for(let j = 0 ; j < len ; j ++ ) {
                if(newarr.indexOf(arr[i][j]) === -1) {
                  newarr.push(arr[i][j])
                }
              }
              arr[i] = newarr;
            }
            this.arrayDeweight(arr[i]);
          }
        }
        return Array.from(new Set(arr));;
      }
    }
    catch (err) {
      console.error(err);
    }
  },

/**
  * @description 数组移除元素item
  * @example 用法: _detanx.removeItem(arr, item)
  * @param arr 目标数组
  * @param item 移除元素
  * @return {array}
*/
  removeItem : function(arr, item){
    try {
      if(!(arr instanceof Array)){
        throw new SyntaxError('first parameter is not an Array.' );
      }else {
        return arr.filter(function(ele){
          if(isNaN(item)) {
            return isNaN(ele) != isNaN(item);
          }else {
            return ele !== item;
          }
        })
      }
    }
    catch (err) {
      console.error(err);
    }
  },
/**
  * @description 数组指定位置index处添加元素item
  * @example 用法: _detanx.addItem(arr, item, index)
  * @param arr 目标数组
  * @param item 添加元素
  * @param index 添加位置
  * @return {array}
*/
  addItem : function(arr, item, index) {
    try {
      if(!(arr instanceof Array)){
        throw new SyntaxError('first parameter is not an Array.' );
      }
      if(typeof item === 'undefined') {
        throw new SyntaxError('addItem methods lack of parameters.' );
      }
      if(typeof index === 'undefined') {
        index = arr.length;
      }
      var s1 = arr.slice(0,index)
      var s2 = arr.slice(index)
      return s1.concat([item],s2)
    }
    catch(err) {
      console.error(err);
    }
  },
/**
  * @description 获取数组重复出现的元素
  * @example 用法: _detanx.repeatEle(arr)
  * @param arr 目标数组
  * @return {array}
*/
  repeatEle : function(arr) {
    try {
      if(!(arr instanceof Array)){
        throw new SyntaxError('parameter is not an Array.' );
      }else {
        var len = arr.length;
        var newarr = [],toArr = [];
        for(let j = 0;j < len;j ++) {
          toArr.push((isNaN(arr[j]) === true ? JSON.stringify(arr[j]) : arr[j]))
        }
        for(let i = 0; i< len;i ++) {
          var temp = toArr[0];
          toArr.shift()
          if(toArr.indexOf(temp) != -1 && newarr.indexOf(temp) == -1) {
            temp = temp === "null" ? NaN:temp;
            newarr.push(temp)
          }
        }
        return newarr
      }
    }catch(err) {
      console.error(err)
    }
  },
/**
  * @description 获取鼠标位置
  * @param event 事件对象
  * @return {object}
*/
  //相对屏幕位置
  screenMousePos:function(event) {
  var e = event || window.event;
    return {'x':e.screenX,'y':e.screenY}
  },
  //相对屏幕位置
  browserMousePos:function(event) {
    var e = event || window.event;
    return {'x':e.clientX,'y':clientY}
  },
  //相对文档位置
  documentMousePos:function(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return { 'x': x, 'y': y };
  },
/**
  * @description 判断js数组/对象是否为空
  * isPrototypeOf() 验证一个对象是否存在于另一个对象的原型链上。即判断 Object 是否存在于 $obj 的原型链上。js中一切皆对象，也就是说，Object 也存在于数组的原型链上，因此这里数组需要先于对象检验。
  * Object.keys() 返回一个由给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致
  * @example 用法: _detanx.isEmpty($obj)
  * @param $obj
  * @return {boolean}
*/
  isEmpty: ($obj) => {
    try {
      if(!($obj instanceof Array) && !($obj instanceof Object) ){
        throw new SyntaxError('parameter is not an Array or an Object.' );
      }else {
        // 检验非数组/对象类型  EX：undefined   null  ''  根据自身要求添加其他适合的为空的值  如：0 ,'0','  '  等
        if (!$obj && $obj !== 0 && $obj !== '') return true;
        if (typeof $obj === "string") {
          $obj = $obj.replace(/\s*/g, "");//移除字符串中所有 ''
          if ($obj === '') return true;
        }
        return (Array.isArray($obj) && $obj.length === 0) || (Object.prototype.isPrototypeOf($obj) && Object.keys($obj).length === 0);
      }
    }catch(err) {
      console.error(err)
    }
  },


/**
 * @description 字符串/数组B的字符任意一种组合是否是字符串/数组A的子串
 * @example 用法: _detanx.isInclude([1, 2, 3, 4], [2,3]) // true,isInclude("abc123", "cba") // true,
 * @param {Array/String} A 原字符串/数组
 * @param {Array/String} B 子字符串/数组
 * @return {Boolean} 
 */
  isInclude: (A, B) => {
    // 将A和B转成数组
    try {
      if(typeof A === 'undefined' || typeof B === 'undefined') {
        throw new SyntaxError('isInclude methods lack of parameters.' );
      }
      if(!(A instanceof Array) && (typeof A !== "string") ){
        throw new TypeError(A + ' is not an array or a string.' );
      } 
      if(!(B instanceof Array) && (typeof B !== "string") ) {
        throw new TypeError(B + ' is not an array or a string.' );
      }
      let a = A instanceof Array ? A : A.split('')
      let b = B instanceof Array ? B : B.split('')
      if (a.length === 0 || b.length === 0) {
        return false
      }
      for (let j = 0; j < a.length; j++) {
        if (b.length > 0) {// 数组 b不为空，下一步
          if (b.indexOf(a[j]) > -1) {// 数组a存在当前遍历的数组b的元素
            b.splice(b.indexOf(a[j]), 1)// 删除b数组中匹配到的第一个对应下标的元素
            if (b.length === 0) {
              return true// 如果数组b全部被删除了，则证明b是a的子串
            }
          } else {
            b = B.split('') // 数组b不存在当前遍历的数组b的元素，恢复b数组
          }
        } else {
          return true// 数组 b为空返回true
        }
      }
      return false
    }
    catch(err) {
      console.error(err);
    }
  },
      
/**
 * @description //生成随机n个字母或数字
 * @example 用法: _detanx.randomCode(n) 
 * @param {Number} n 整数
 * @return {String} 
 */
  randomCode:function(n) {
    try {
      if(typeof n === 'undefined') {
        n = 4;
      }
      if(isNaN(n)) {
        throw new SyntaxError('The parameters of the randomCode method is not a valid positive integer.' );
      }
      if(typeof n !== "number" && typeof Math.abs(Number(n)) !== 'number') {
        throw new SyntaxError('The parameters of the randomCode method is not a valid positive integer.' );
      }
      let codeArr = [0,1,2,3,4,5,6,7,8,9,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
     'S','T','U','V','W','X','Y','Z'];
      let codeArrlength = codeArr.length;
      let resultArr = [];
      for(let i = 0;i < n; i ++) {
        resultArr.push(codeArr[Math.floor(Math.random()*codeArrlength)])
      }
      return resultArr.join('');
    }
    catch(err) {
      console.error(err)
    }
  },
/**
 * @description //字符串驼峰式转下划线
 * @example 用法: _detanx.stringHTU(str)
 * @param {String} str 需转换的字符串
 * @return {String} 
 * HTU (Hump transfer underline)
*/
  stringHTU:function(str) {
    try {
      if(typeof str !== "string") {
        throw new TypeError(str + ' is not a string.' );
      }else {
        let arr = [];
        function getIndex(reg, strs) {
          do{
            reg.test(strs)
            if(reg.lastIndex !== 0 && reg.lastIndex-1 !== 0){//reg.lastIndex-1 !== 0判断首字母是否大写
              arr.push(reg.lastIndex-1)
            }
          }while(reg.lastIndex > 0)
        }
        const UP_CASE_REG =/[A-Z]/g;
        const NUMBER_REG=/[A-Za-z][\d]/g
        let newstr = ""
        getIndex(UP_CASE_REG, str)
        getIndex(NUMBER_REG, str)
        arr.sort((a,b)=> a-b )
        for(let i = 0;i < arr.length; i ++) {
            if(i === 0) {
                newstr += str.slice(0,arr[i]) + "_"
            }
            else {
                newstr += str.slice(arr[i-1],arr[i]) + "_"
            }
        }
        newstr += str.slice(arr[arr.length-1])
        arr = []
        return newstr.toLowerCase()
      }
    }catch(err) {
      console.error(err)
    }
    
  },
/**
 * @description //检查其是否符合美元书写格式
 * @example 用法:  _detanx.isUSD(str)
 * @param {String} str 需检测的字段
 * @return {Boolean} 
*/
  isUSD:function(str) {
    try {
      if(typeof str !== "string") {
        throw new TypeError(str + ' is not a string.' );
      }else {
        var re = /^\$([1-9]\d{0,2}(,\d{3})*|0)(\.\d{2})?$/;
        return re.test(str);
      }
    }catch(err) {
      console.error(err)
    }
  }
}
    //这里确定了插件的名称
//  if (typeof module !== 'undefined' && module.exports) {
//    module.exports = _plugin_api;
//  } else if (typeof define === 'function' && define.amd) {
//    define(function(){return CJPlugin;});
//  } else {
//    window.CJPlugin = _plugin_api;
//  }
  try{
    if (typeof _detanx === "undefined") {
      window._detanx = _plugin_api;
    }else {
      throw new Error("_detanx is defined.")
    }
  }catch(err) {
    console.error(err)
  }
    
})();