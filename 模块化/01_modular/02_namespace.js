// namespace模式，简单对象封装

let obj = {
  msg: 'module2',
  foo() {
    console.info('msg=>', this.msg)
  }
}
