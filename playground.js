function a() {
  let count = 0
  return val => {
    count = val

    return count
  }
}

let fn1 = a()
let fn2 = a()

let c1 = fn1(1)
let c2 = fn2(2)
c1 = fn1(10)
console.log(c1, c2, c1, c2)
