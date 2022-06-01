console.log(Boolean('')) // false
console.log(Boolean(' ')) // true
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean([])) // true
console.log(Boolean([12])) // true
console.log(Boolean(-1)) // true

if('3px' + 3) { // '3px3' -> true
  console.log('true')
}
if('3px' - 3) { // NaN -> false
  console.log('false')
}

// ! 取反（先转布尔再取反）
// !! 取反再取反，相当于布尔转换

/* 
  ## boolean布尔数据类型
    - 只有两个值 true / false
  
  ### 把其它类型值转换为布尔类型
    - 只有 0、NaN、‘’、null、undefined 5个值转为false，其余都是true
    
    - Boolean([val])
    - !/!!
    - 条件判断
*/