/* 

  new Date() 除了获取本机时间，还可以把一个时间格式字符串转为标准时间格式
    支持的格式
      - yyyy/mm/dd
      - yyyy/mm/dd hh:mm:ss
      - yyyy-mm-dd  // 不支持IE

  可以讲时间格式字符串转为标准格式对象，通过对象获取属性
*/

let time = new Date('2022/6/26')
// Sun Jun 26 2022 00:00:00 GMT+0800 (中国标准时间)
let year = time.getFullYear(),
  month = time.getMonth()

// 倒计时
~function() {
  let nowTime = new Date(), // 现在时间
    endTime = new Date('2022/12/12') // 定义结束时间

  let leftTime = endTime.getTime() - nowTime.getTime(), // 相差毫秒数
    lefts = Math.floor(leftTime / 1000 % 60), // 计算剩余秒数
    leftm = Math.floor(leftTime / (1000 * 60) % 60), // 计算剩余分钟
    lefth = Math.floor(leftTime / (1000 * 60 * 60) % 24), // 计算剩余小时
    leftd = Math.floor(leftTime / (1000 * 60 * 60 * 24)) // 计算剩余天
}()

// 万能，初始时间格式
String.prototype.formatTime = function(tempalte) {
  typeof tempalte === 'undefined' ? tempalte='{0}年{1}月{2}日 {3}:{4}:{5}' : null
  // 分割数据 ['2022', '12', '20', '12', '0', '0']
  let matchAry = this.match(/\d+/g)
  
  // 模版和数据渲染
  tempalte = tempalte.replace(/\{(\d+)\}/g, (x, y) => {
    let val = matchAry[y] || '00'
    val.length < 2 ? val = '0' + val : null
    return val
  })
  return tempalte
}
let str = '2022-12-20 12:0:0'
console.log(str.formatTime(), 9);
