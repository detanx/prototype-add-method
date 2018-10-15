//插件
(function(){
  //定义一些默认参数，示例
  var _options={
      default_word:'default hello'                
  }
  let stringHTUarr = [],//stringHTU存储index下标
      sum = 0,
      numberExecutions = 0;//arraySum执行次数
  //定义一些api
  var _plugin_api = {
    /**
      * @description 将某个字符串中的某个字段全部替换为新的字段
      * @example str.globalReplace(oldStr, newStr, isIgnoreCase)
      * @example str.globalReplace(oldStr, newStr)
      * @param oldStr {string}  - 目标字符串中需要替换的字段.
      * @param newStr {string}  - 替换成新的字段.
      * @param isIgnoreCase {boolean}  - 是否忽略英文大小写，默认为false.
      * @return {array}
    */
  globalReplace : function(str, oldStr, newStr, isIgnoreCase){//oldStr替换成newStr 
    if(typeof isIgnoreCase === 'boolean' && isIgnoreCase.toString() === 'true') {
      isIgnoreCase = 'gi'
    }else {
      isIgnoreCase = 'g'
    }
    try {
      if(typeof oldStr === 'undefined') {
        throw new SyntaxError('GlobalReplace methods lack of parameters.' );
      }
      if(typeof newStr === 'undefined') {
        throw new SyntaxError('GlobalReplace methods lack of parameters.' );
      }
      let reg = new RegExp(oldStr, isIgnoreCase); //创建正则RegExp对象 
      return str.replace(reg, newStr); 
    }
    catch(err) {
      console.error(err);
    }
  },
/**
  * @description 查找字符串中某个字符串的所有起始位置
  * @example str.strCharPositions(subStr)
  * @param subStr {string}  - 查找的字符串.
  * @return {array}
*/
  strCharPositions : function(str, subStr) {
    let arr = [];
    try {
      if(typeof subStr === 'undefined') {
        throw new SyntaxError('findAllPosition methods lack of parameters.')
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
  * @description 获取数组的维度
  * @example arr.multiArray()
  * @return {number}
*/
  multiArray : function(arr) {
    let GlobalArrayCount = 1;
    for (let i = 0;i < arr.length;i ++){
      if(arr[i] instanceof Array){
        GlobalArrayCount ++;
        arr[i].multiArray();
      }
    }
    return GlobalArrayCount;
  },
/**
  * @description 查找数组（限一维、二维数组）中某个字符的所有位置
  * @example arr.targetOccurs()
  * @return {array}
*/
  targetOccurs : function(arr, target) {
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
  },
/**
  * @description 任意维度数组去重
  * @example arr.uniqueElement()
  * @return {array}
*/
  uniqueElement : function(arr) {
    //判断是否支持[native code]
    function isNative(api){
      return /native code/.test(api.toString()) && typeof api !== 'undefined'
    }
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
        arr[i].uniqueElement();
      }
    }
    return Array.from(new Set(arr));;
  },
/**
  * @description 任意维度数组求和
  * @example arr.arraySum()
  * @return {array}
*/
  arraySum : function(arr) {
    ++ numberExecutions;
    if(numberExecutions === 1) {
      arr.forEach( (item) => 
      {
        if(typeof item === 'number' && !isNaN(item)) {
          sum += item
        }
      });
    }
    for (let i = 0;i < arr.length;i ++){
      if(arr[i] instanceof Array){
        arr[i].forEach( (item) => 
        {
          if(typeof item === 'number' && !isNaN(item)) {
            sum += item
          }
        });
        arr[i].arraySum();
      }
    }
    return sum;
  },

/**
  * @description 数组移除元素item
  * @example arr.addItem()
  * @return {array}
*/
  removeItem : function(arr, item){
    return arr.filter(function(ele){
      if(isNaN(item)) {
        return isNaN(ele) != isNaN(item);
      }else {
        return ele !== item;
      }
    })
  },
/**
  * @description 数组指定位置index处添加元素item
  * @example arr.addItem()
  * @return {array}
*/
  addItem : function(arr, item, index) {
    var s1 = arr.slice(0,index)
    var s2 = arr.slice(index)
    return s1.concat([item],s2)
  },
/**
  * @description 获取数组重复出现的元素
  * @example arr.duplicates()
  * @return {array}
*/
  duplicates : function() {
    var len = arr.length
    var newarr = []
    for(var i = 0; i< len;i ++) {
      var temp = arr[0];
      arr.shift()
      if(arr.indexOf(temp) != -1 && newarr.indexOf(temp) == -1) {
        newarr.push(temp)
      }
    }
    return newarr
  },
/**
  * @description 获取鼠标位置
  * @param event
  * @return {object}
*/
  //相对屏幕位置
  screenMousePosition:function(event) {
  var e = event || window.event;
    return {'x':e.screenX,'y':e.screenY}
  },
  //相对屏幕位置
  browserMousePosition:function(event) {
    var e = event || window.event;
    return {'x':e.clientX,'y':clientY}
  },
  //相对文档位置
  documentMousePosition:function(event) {
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
  * @param $obj
  * @return {boolean}
*/
  isEmpty: ($obj) => {
    // 检验非数组/对象类型  EX：undefined   null  ''  根据自身要求添加其他适合的为空的值  如：0 ,'0','  '  等
    if (!$obj && $obj !== 0 && $obj !== '') return true;
    if (typeof $obj === "string") {
      $obj = $obj.replace(/\s*/g, "");//移除字符串中所有 ''
      if ($obj === '') return true;
    }
    return (Array.isArray($obj) && $obj.length === 0) || (Object.prototype.isPrototypeOf($obj) && Object.keys($obj).length === 0);
  },


/**
 * @description 字符串/数组B的字符任意一种组合是否是字符串/数组A的子串
 * @example 用法: isInclude([1, 2, 3, 4], [2,3]) // true,isInclude("abc123", "cba") // true,
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
 * @example 用法: createVerificode(n) 
 * @param {Number} n 整数
 * @return {String} 
 */
  createVerificode:function(n) {
    try {
      if(typeof n === 'undefined') {
        n = 4;
      }
      if(isNaN(n)) {
        throw new SyntaxError('The parameters of the createVerificode method is not a valid positive integer.' );
      }
      if(typeof n !== "number" && typeof Math.abs(Number(n)) !== 'number') {
        throw new SyntaxError('The parameters of the createVerificode method is not a valid positive integer.' );
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
 * @example 用法: createVerificode(n) 
 * @param {String} str 需转换的字符串
 * @return {String} 
 * HTU (Hump transfer underline)
*/
  stringHTU:function(str) {
    const UP_CASE_REG =/[A-Z]/g;
    const NUMBER_REG=/[A-Za-z][\d]/g
    let newstr = ""
    getIndex(UP_CASE_REG, str)
    getIndex(NUMBER_REG, str)
    stringHTUarr.sort((a,b)=> a-b )
    for(let i = 0;i < stringHTUarr.length; i ++) {
      if(i === 0) {
          newstr += str.slice(0,stringHTUarr[i]) + "_"
      }
      else {
          newstr += str.slice(stringHTUarr[i-1],stringHTUarr[i]) + "_"
      }
    }
    newstr += str.slice(stringHTUarr[stringHTUarr.length-1])
    return newstr.toLowerCase()
  },
/**
 * @description //获取大写字母及数字下标
 * @example 用法:  getIndex(reg, str)
 * @param {RegExp} reg 匹配大写/数字的正则表达式
 * @param {String} str 需转换的字符串
 * @return {Array} 
*/
  getIndex: function(reg, str) {
    do{
      reg.test(str)
      if(reg.lastIndex !== 0 && reg.lastIndex-1 !== 0){//reg.lastIndex-1 !== 0判断首字母是否大写
        stringHTUarr.push(reg.lastIndex-1)
      }
    }while(reg.lastIndex > 0)
  }
}
    //这里确定了插件的名称
    // if (typeof module !== 'undefined' && module.exports) {
    //   module.exports = _plugin_api;
    // } else if (typeof define === 'function' && define.amd) {
    //   define(function(){return CJPlugin;});
    // } else {
    //   window.CJPlugin = _plugin_api;
    // }
    window.CJPlugin = _plugin_api;
})();