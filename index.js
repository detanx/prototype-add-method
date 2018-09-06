//将某个字符串中的某个字段全部替换为新的字段
String.prototype.globalReplace =
String.prototype.globalReplace ||function(oldStr, newStr, isIgnoreCase){//oldStr替换成newStr 
  isIgnoreCase = typeof isIgnoreCase === 'boolean' ? "gi" : "g";
  let reg = new RegExp(oldStr, isIgnoreCase); //创建正则RegExp对象 
  return this.replace(reg, newStr); 
}

//查找字符串中某个字符串的所有起始位置
String.prototype.findAllPosition = 
String.prototype.findAllPosition || function(subStr) {
  let arr = [];
  let positions = this.indexOf(subStr);
  while(positions > -1){
    arr.push(positions);
    positions = this.indexOf(subStr,positions + 1);
  }
  return arr;
}

//查找数组中某个字符的所有位置
Array.prototype.findAllOccurrences = 
Array.prototype.findAllOccurrences || function (target) {
  var result = [];
  for(let i = 0;i < this.length; i ++) {
    if(this[i] instanceof Array) {
      this[i].filter(function(item,index) {
        return item === target && result.push([i,index]);
      });
    }
  } 
  this.filter(function(item,index) {
    return item === target && result.push(index);
  });
  return result;
}

//数组去重
Array.prototype.uniqueElement = 
Array.prototype.uniqueElement || function() {
  //判断是否支持[native code]
  function isNative(api){
    return /native code/.test(api.toString())&&typeof api !== 'undefined'
  }
  if(isNative(Set)) {
    return Array.from(new Set(this))
  }
  let newarr = [];
  let len = this.length;
  for(let i = 0 ; i < len ; i ++ ) {
    if(newarr.indexOf(this[i]) === -1) {
      newarr.push(this[i])
    }
  }
  return newarr
}

//数组求和
Array.prototype.arraySum = 
Array.prototype.arraySum || function() {
  var sum = 0;
  this.forEach( (item) => 
    {
      if(typeof item === 'number' && !isNaN(item)) {
        sum += item
      }
    }
  );
  return sum;
}

//数组移除元素item
Array.prototype.removeItem = 
Array.prototype.removeItem || function(item){
  return this.filter(function(ele){
    if(isNaN(item)) {
      return isNaN(ele) != isNaN(item);
    }else {
      return ele !== item;
    }
  })
}

//数组移指定位置index处添加元素item
Array.prototype.addItem = 
Array.prototype.addItem || function(item, index) {
  var s1 = this.slice(0,index)
  var s2 = this.slice(index)
  return s1.concat([item],s2)
}

//数组重复出现的元素
Array.prototype.duplicates = 
Array.prototype.duplicates || function() {
  var len = this.length
  var newarr = []
  for(var i = 0; i< len;i ++) {
    var temp = this[0];
    this.shift()
    if(this.indexOf(temp) != -1 && newarr.indexOf(temp) == -1) {
      newarr.push(temp)
    }
  }
  return newarr
}