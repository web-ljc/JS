/* 
  ### 字符串的 unicode 表示法
    - 允许采用\uxxxx形式表示一个字符   
      - '\uD842\uDFB7'  "𠮷"
      - '\u{20BB7}'     "𠮷"
    
  ### 字符串遍历器接口
    - 字符串可以被 for...of 循环遍历

  ### 模版字符串
    - 模版字符串中可以使用{}, 调用变量、函数、表达式
    `template string ${name}`
  
  ### 标签模版

  ### 模版字符串的限制

*/

// 标签模版
let msg = test`1 ${3} 2`
function test(a, b) {
  console.log(a, b); // ['1', '2'], 3
  return a
}
console.log(msg);


/* 
  ## 字符串的新增方法
    - String.fromCodePoint()
      - 从Unicode码返回对应字符
      - String.fromCodePoint(0x20BB7)  // "𠮷"

    - String.raw()
      - 返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串
      - String.raw`Hi\\n`  // "Hi\\\\n"

  ### 实例方法
    - codePointAt()
      - js内部，字符以UTF-16的格式存储，每个字符固定为2个字节，对于需要4个字节存储的字符，js会认为他们是2个字符
      - 
  
    - normalize()
      - 重音符号
    
    - includes() / startsWith() / endsWith()
      - includes()  返回布尔值，表示是否找到了参数字符串
      - startsWidth() 返回布尔值，表示参数字符串是否在原字符串的头部
      - endsWith()  返回布尔值，表示参数字符串是否在原字符串的尾部
      - 支持2个参数
        - str: 参数字符串
        - index: 开始搜索的位置

    - repeat()
      - 返回一个新字符串，将原字符重复n次
      - 参数重复的次数
        - 如果是小数，会向下取整
        - Infinity / 负数 会报错
        - -1 ～ 0之间，会被视为0 返回 ''
        - NaN等同于0
        - 参数是字符串，会转换为数字

    - padStart() / padEnd()
      - 字符串补全长度
      - str.padStart(num, str2)
      - str.padEnd(num, str2)
        - str 需要补全字符串
        - num 需要补全到的长度
        - str2 补全的字符串 // 不写就是默认为空

    - trimStart() / trimEnd()
      - 消除字符串头部 / 尾部的空格
    
    - at()
      - 接收一个整数作为参数，返回指定位置的字符串

    - replaceAll(searchValue, replacement)
      - 一次性替换所有匹配字段，返回一个新字符串，不改变原字符串
      - searchValue为正则的话必须要全局
      - replacement为一个字符串，可以使用特殊字符串
        - $& 匹配字符串
        - $` 匹配结果前边文本
        - $' 匹配结果后边文本
        - $n
        - $$ 美元

    
*/


var s = "𠮷";
s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271

const str = 'hi es6'
str.includes('es') // true
str.startsWith('es', 3) // true
console.log(str.endsWith('es', 5));  // true

const strRepeat = str.repeat(3)
console.log(strRepeat); // hi es6hi es6hi es6
console.log(str.repeat('2'));

console.log('x'.padStart(10, '2345')); // 234523452x
console.log('x'.padEnd(4)); // 'x   '

console.log(str.at(1)); // 'i'
console.log(str.at(-1)); // '6'

const strTest = 'aabbcc'
console.log(strTest.replace('b', '@')); // aa@bcc
console.log(strTest.replaceAll('b', '_')); // aa__cc  全局替换
console.log(strTest.replaceAll(/b/g, '$')); // aa$$cc 正则必须加全局