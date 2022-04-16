/**
 * Promise是什么？
 * 理解
 *    1抽象表达：
 *        Promise是一门新的技术（ES6规范）
 *        Promise是JS中进行异步编程的新解决方案（旧方案是单纯使用回调函数）
 *    2具体表达
 *        从语法上来说Promise是一个构造函数
 *        从功能上来说promise对象用来封装一个异步操作并可以获取其成功/失败的结果值
 * 
 * Promise状态改变  -- 实例对象中的一个属性 [PromiseState]
 *    pending改为resolved / fullfilled  成功
 *    pending改为rejected  失败
 *    只有这2种，且一个promise对象只能改变一次
 *    无论变为成功还是失败，都有一个数据结果，成功结果一般称value，失败结果一般称为resaon
 * 
 * Promise对象的值  -- 实例对象中的另一个属性 [PromiseResult]
 *    保存着异步任务【成功/失败】的结果
 *    resolve
 *    reject
 * 
 * 缺点：
 *    1、无法取消Promise，一旦新建它就会立即执行，中途无法取消
 *    2、当处于pending状态时，无法得知进展到哪一阶段
 *    3、不设置回调函数，promise内部抛出的错误，不会反应到外部
 * 
 * 异步编程
 *    1、fs 文件操作
 *    2、数据库操作
 *    3、AJAX
 *    4、定时器
 * 
 * 
 * 为什么使用Promise？
 * 1指定回调函数的方式更加灵活
 *    旧的：必须在启动异步任务前指定  // 比如说定时
 *    promise：启动异步任务 -- 返回promise对象  -- 给promise对象绑定回调函数
 * 2支持链式调用，可以解决回调地狱的问题【重要】
 *    回调地狱不方便阅读
 *    不便于异常处理
 * 
 * Promise的基本流程
 * new Promise对象 -- 执行异步操作 -- 成功执行 resolve() -- promise状态改为 resolved -- then方法 -- 新的promise对象
 * 
 * 如何使用Promise
 * 1Promise构造函数 Promise(executor){}
 *    executor函数： 执行器 (resolve, reject) => {}   // 构造函数接受的参数
 *    resolve函数：内部定义成功时调用的函数 value => {}  // 在构造函数中执行的参数-函数
 *    reject函数：内部定义失败时调用的函数 reson => {}   // 在构造函数中执行的参数-函数
 *    // executor会在Promise内部立即同步调用，异步操作在执行器中执行
 * 2Promise.prototype.then 方法(onResolved, onRejected) => {}
 *    1onResolved函数：成功的回调函数
 *    2onRejected函数：失败的回调函数
 *    // 返回一个新的promise对象
 * 3Promise.prototype.catch 方法(onRejected) => {}
 *    1onRejected函数：失败的回调函数
 * 
 * Promise.resolve(12)
 * // 传入参数为非promsie类型的对象，则返回的结果为成功promise对象
 * // 传入参数为promise对象，则参数的结果决定了resovle的结果
 * 
 * Promise.reject(2)
 *  // 返回失败对象
 * 
 * Promise.all方法：(promises) => {}
 *    promises包含n个promise的数组
 *    返回一个新的promise，只有所有的promise都成功才成功,返回所有的值，一个失败了就失败，只返回失败的值
 * 
 * Promise.race方法：(promises) => {}
 *    promises包含n个promise的数组
 *    返回一个新的promise，第一个先完成的promise的结果状态就是最终的结果状态，其余的不管。赛跑机制
 * 
 * 
 * 问题：
 * 改变Promise状态的方法
 *    resolve函数 // pending - fulfilled/resolved
 *    reject函数  // pending - rejected
 *    抛出错误     // throw '出问题了'
 * 
 * 一个Promise制定多个成功/失败回调函数，都会调用吗
 *    当promise改变为对应状态时都会调用
 * 
 * 执行then方法返回的结果 -- 返回一个promise对象，值根绝返回内容判断
 *    返回promise对象  //return Promise.reject(1)
 *    抛出错误  // throw 'err'
 *    返回非Promise对象 //  return 1
 * 
 * 串联多个任务。链式调用，每次then方法中要返回Promise对象
 * 
 * promise异常穿透
 *    当使用promise的then链式调用时，可以在最后制定失败的回调
 *    前面任何操作出了异常，都会传到最后失败的回调中处理。
 * 
 * 中断promise
 *    当使用promise的then链式调用时，then方法
 *    返回pending状态的Promise对象，后续函数都不能执行
 */
