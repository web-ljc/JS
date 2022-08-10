// 新的变量 O(1)
function sum (a) {
  let sum = 0 // 1
  // 1
  for(let i=0; i< a.length; i++)  {
    sum += a[i]
  }
  return sum
}

// O(1) 
// 1 1 1
function insert(A, i, x) {
  // 1
  let p = i - 1
  while(p >=0 && A[p] > x) {
    A[p+1] = A[p]
    p--
  }
  A[p+1] = x
}
function insertion(A) { // 1
  // 1
  for(let i = 1; i < A.length; i++) {
    insert(A, i, A[i])
  }
}

// 空间复杂度2+n  O(n)
function reverse(A){ // 1
  // 1 n 数组对应n
  const r = []
  while(A.length) r.push(A.pop())
  return r
}