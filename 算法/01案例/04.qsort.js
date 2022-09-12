// 快速排序

// 交换
const swap = (A, i, j) => {
  [A[i], A[j]] = [A[j], A[i]]
}

const divide = (A, p, r) => {
  const x = A[r-1]
  let i = p - 1
  for(let j = p; j < r - 1; j++) {
    if(A[j] < x) {
      i++
      swap(A, i, j)
    }
  }
  swap(A, i + 1, r - 1)
  return i + 1
}

const qsort = (A, p=0, r) => {
  r = typeof r !== 'undefined' ? r : A.length
  if(p < r - 1) {
    const q = divide(A, p, r)
    qsort(A, p, q)
    qsort(A, q + 1, r)
  }
}
// A
const A = [1, 2, 4, 3]
qsort(A)