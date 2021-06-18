// * -------------------------------
// * 目录
// * -------------------------------
// * new
// * apply call
// * bind
// * 函数防抖
// * 函数节流

// ! new
function _new(constructorFunc, ...rest) {
  let newObj = {}
  constructorFunc.apply(newObj, rest)
  newObj.__proto__ = constructorFunc.prototype
  return newObj
}

function Student(name, age) {
  this.name = name
  this.age = age
  this.sayHello = function() {
    console.log('hello ' + this.name);
  }
}

const z3 = _new(Student, 'z3', 18)
z3
z3.sayHello()

// ! apply call
Function.prototype.myApply = function(obj, rest) {
  obj.__proto__._fn = this
  obj._fn(...rest)
  delete obj.__proto__._fn
}

let o = {}
Student.myApply(o, ['老王', 18])
o

// ! bind
Function.prototype.myBind = function(obj, ...rest) {
  const self = this
  return function() {
    return self.apply(obj, rest)
  }
}

function fn1(a, b, c) {
  console.log(a, b, c);
  console.log(this.x);
  return 'this is bind'
}

let fn2 = fn1.myBind({x: 100}, 10, 20, 30)
let res = fn2()
res

// ! 函数防抖
// ? 概念：延迟要执行的动作，若果在延迟的这段时间内
// ? 再次触发，取消之前开启的动作，重新计时

function debounce(func, delay=1000) {
  let timer
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func && func()
    }, delay)
  }
}
const timer = debounce(() => {
  console.log('dudu')
})
timer()
timer()
timer()

// ! 函数节流
// ? 设定一个特定的时间，让函数在特定的时间内只执行一次
// ? 不会频繁执行
function throttle(func, delay=1000) {
  let flag = 'start'
  return function() {
    if (flag === 'waiting') {
      return
    }
    func && func()
    flag = 'waiting'
    setTimeout(() => {
      flag = 'start'
    }, delay)
  }
}
const t = throttle(() => {
  console.log('throttle')
})
t()
t()
t()


function CoolModule() {
  var something = 'cool'
  var another = [1, 2, 3]

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join('!'));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  }
}

let s2 = [1, 2, 3, 4, 5, 6]
for (let key in s2) {
  console.log(key);
}





