// 将嵌套路由扁平化
const testCase = [
  {
    path: '/jobs',
    routes: [
      {
        path: '/auto_create',
      },
      {
        path: '/:jobId',
        routes: [
          {
            path: '/info',
          },
          {
            path: '/setting',
          },
          {
            path: '/manager',
          },
          {
            path: '/source',
          },
          {
            path: '/smart_recruitment',
          },
          {
            path: '/satisfaction',
            routes: [
              {
                path: ['/pandect/:candidateId', '/application/:applicationId', '/:id'],
              },
            ],
          },
        ],
      },
    ],
  },
];

// 得到结果
// [
//   '/jobs/auto_create',
//   '/jobs/:jobId/info',
//   '/jobs/:jobId/setting',
//   '/jobs/:jobId/manager',
//   '/jobs/:jobId/source',
//   '/jobs/:jobId/smart_recruitment',
//   '/jobs/:jobId/satisfaction/pandect/:candidateId',
//   '/jobs/:jobId/satisfaction/application/:applicationId',
//   '/jobs/:jobId/satisfaction/:id',
// ];

/**
 * @param {array} data
 * @return {array}
 * 
 * 思路：
 *  1. 定义新数组
 *  2. for循环数组每一项， routes有数据递归遍历处理， path是数组的话遍历处理
 *  
 */
const flattenRoutes = (data = []) => {
  // 定义新数组
  let newArr = []
  // 递归数据
  let deelpRoutes = (data, _path = '') => {
    for(let i = 0; i < data.length; i++) {
      // 获取path, routes
      let {path, routes} = data[i]
      // 拼接上一级路径
      if (path instanceof Array) {
        path.forEach(item => {
          path = _path + item
          // 如果有router，且长度大于0
          if (routes && routes.length) {
            deelpRoutes(routes, path)
          } else {
            newArr.push(path)
          }
        })
      } else {
        path = _path + path
        if (routes && routes.length) {
          deelpRoutes(routes, path)
        } else {
          newArr.push(path)
        }
      }
    }
  }
  // 递归数据
  deelpRoutes(data)
  // 返回数组
  return newArr
};

console.info(flattenRoutes(testCase), 9)