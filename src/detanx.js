//将某个字符串中的某个字段全部替换为新的字段
String.prototype.globalReplace =
String.prototype.globalReplace ||function(oldStr, newStr, isIgnoreCase){//oldStr替换成newStr 
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
    return this.replace(reg, newStr); 
  }
  catch(err) {
    console.error(err);
  }
}

//查找字符串中某个字符串的所有起始位置
String.prototype.strCharPositions = 
String.prototype.strCharPositions || function(subStr) {
  let arr = [];
  try {
    if(typeof subStr === 'undefined') {
      throw new SyntaxError('findAllPosition methods lack of parameters.')
    }
    let positions = this.indexOf(subStr);
    while(positions > -1){
      arr.push(positions);
      positions = this.indexOf(subStr,positions + 1);
    }
    return arr;
  }
  catch (err) {
    console.error(err);
  } 
}

//获取数组的维度
let GlobalArrayCount = 1;
Array.prototype.multiArray = 
Array.prototype.multiArray || function() {
  for (let i = 0;i < this.length;i ++){
    if(this[i] instanceof Array){
      GlobalArrayCount ++;
      this[i].multiArray();
    }
  }
  return GlobalArrayCount;
}

//查找数组中某个字符的所有位置
Array.prototype.targetOccurs = 
Array.prototype.targetOccurs || function(target) {
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

//数组去重(一维数组至多维数组)
Array.prototype.uniqueElement = 
Array.prototype.uniqueElement || function() {
  //判断是否支持[native code]
  function isNative(api){
    return /native code/.test(api.toString()) && typeof api !== 'undefined'
  }
  for (let i = 0;i < this.length;i ++){
    if(this[i] instanceof Array){
      if(isNative(Set)) {
        this[i] = Array.from(new Set(this[i]));
      }
      else {
        let newarr = [];
        let len = this[i].length;
        for(let j = 0 ; j < len ; j ++ ) {
          if(newarr.indexOf(this[i][j]) === -1) {
            newarr.push(this[i][j])
          }
        }
        this[i] = newarr;
      }
      this[i].uniqueElement();
    }
  }
  return Array.from(new Set(this));;
}

//数组求和
let sum = 0,
numberExecutions = 0;//arraySum执行次数
Array.prototype.arraySum = 
Array.prototype.arraySum || function() {
  ++ numberExecutions;
  if(numberExecutions === 1) {
    this.forEach( (item) => 
    {
      if(typeof item === 'number' && !isNaN(item)) {
        sum += item
      }
    });
  }
  for (let i = 0;i < this.length;i ++){
    if(this[i] instanceof Array){
      this[i].forEach( (item) => 
      {
        if(typeof item === 'number' && !isNaN(item)) {
          sum += item
        }
      });
      this[i].arraySum();
    }
  }
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