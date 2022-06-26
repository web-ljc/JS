/* 

  日期对象
    1. new Date()
      - 获取当前客户端本地的时间，用户是可以修改，不能作为重要参考依据
      - 获取结果不是字符串，是日期格式的对象
        - Sun Jun 26 2022 12:45:08 GMT+0800 (中国标准时间)
  
  属性&方法
    1. getFullYear() 获取年
    2. getMonth()    获取月 // 结果是0 ～ 11，代表1-12月
    3. getDate()     获取日
    4. geDay()       获取星期 // 结果是0 ～6，代表是周日 - 周六
    5. getHours()    获取时
    6. getMinutes()  获取分
    7. getSeconds()  获取秒
    8. getMilliseconds() 获取毫秒
    9. getTime()     获取当前时间距离 1970/1/1 00:00:00 这个日期之间的毫秒差
    10. toLocaleDateString() 获取年月日(字符串)  '2022/6/26'
    11. toLocaleString()     获取完整的日期字符串 '2022/6/26 12:46:48'
    12. toString()           'Sun Jun 26 2022 12:46:48 GMT+0800 (中国标准时间)'
*/

let time = new Date()
// console.log(time); // Sun Jun 26 2022 12:45:08 GMT+0800 (中国标准时间)
// console.log(typeof time); // object

const addZero = (val) => {
  val = Number(val)
  return val < 10 ? '0' + val : val
}

const queryDate = () => {
  let time = new Date(),
    year = time.getFullYear(),
    month = time.getMonth() + 1,
    date = time.getDate(),
    week = time.getDay(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds()
  let weekArr = ['日', '一', '二', '三', '四', '五', '六']
  let result = `${year}年${addZero(month)}月${addZero(date)}日  星期${weekArr[week]}  ${addZero(hours)}: ${addZero(minutes)}: ${addZero(seconds)}`
  document.querySelector('#box').innerHTML = result
}
// 每隔一秒执行一次
setInterval(queryDate, 1000)

