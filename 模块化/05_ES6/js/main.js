// 引入其他模块

// 多个export导出可以使用 * as obj
import * as module1 from './module1'
// 多个export导出需要结构赋值
import {fun1, fun2} from './module2'
import module3 from './module3'
import {str} from './module3'

console.info(module1.arr)
fun2()
module3()
console.info(str)