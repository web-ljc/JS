

let str = '2342342asdfasdAAAAd'
for(let i=0; i<str.length; i++) {
  // console.info(str[i])
}

// console.info(str.charAt(0)) // 2
// console.info(str.charAt(100)) // ''
// console.info(str.charCodeAt(0)) // 50
// console.info(String.fromCharCode(50)) // 2

// console.log(str.substr(2, 7)) // 42342as   从2开始截取7位
// console.log(str.substring(2, 7)) // 42342  截取2-7
// console.log(str.slice(2, 7)) // 42342  截取2-7

console.info(str.indexOf('2')) // 0
console.info(str.indexOf('2', 2)) // 3  查找索引2及之后的字符串
console.info(str.indexOf('@')) // -1 不存在返回-1
console.info(str.lastIndexOf('2')) // 6

console.log(str.toUpperCase(), str) // 2342342ASDFASDAAAAD
console.log(str.toLowerCase(), str) // 2342342asdfasdaaaad

let str2 = 'a|b|c|d|'
console.info(str2.split('|'), str2) // ['a', 'b', 'c', 'd', ''] 'a|b|c|d|'

let str3 = 's@s@s@'
console.log(str3.replace(/@/g, '-'))


/*
  字符串中常用的方法
    - 所有用单引号、双引号、反引号 包起来的都是字符串
    - 每一个字符串都是由0到多个字符组成的
      1. str.length // 字符串长度
      2. str[0] // 获取索引为0字符
      3. str[str.length-1] // 获取最后一个字符 str.length-1最后一项索引
      4. str[10000] // undefined 不存在的索引

    1. charAt() / chartCodeAt()
      - charAt 根据索引获取指定位置的字符
      - charCodeAt 获取指定字符的ASII码值（Unicode编码值）
      - @params
        n 获取字符指定的索引
      - @return
        返回查找到的字符
        找不到返回的是空字符串不是undefined，或者对应的编码值

    2. substr / substring / slice
      - 都是为了字符串截取
      1. substr(n, m)
        + 从索引n开始截取m个字符，m不写截取到末尾
      2. substring(n, m)
        + 从索引n开始找到索引m处（不含m）， m不写截取到末尾
      3. slice(n, m)
        + 和substring一样，都是找到索引m处，但是slice可以支持负数为索引
    
    3. indexOf / lastIndeof / includes
      - 验证字符是否存在，没有找到返回 -1
      1. indexOf(x, y)
        - 获取x第一次出现位置的索引， y是空值开始查找的其实位置索引
      2. lastIndexOf(x) 
        - 最后一次出现位置的索引
    
    4. toUpperCase / toLowerCase
      - toUpperCase() 字符串中所有字母转大写
      - toLowerCase() 字符串所有字母转小写
    
    5. split([分隔符])
      - 把字符串按照指定的分隔符，拆分成数组
    
    6. replace(新字符, 老字符)
      - 字符串替换, 在不使用正则的情况下，只能替换一个。需要结合正则，替换全局


    7. match
    8. localCompare
    9. trim / trimLeft / trimRight
*/