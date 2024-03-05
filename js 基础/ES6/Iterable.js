// ? 定义一个自己的默认 @@iterator
var myObject = {
  a: 2,
  b: 3
}

Object.defineProperty(myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function() {
    var o = this
    var idx = 0
    var ks = Object.keys(o)
    return {
      next: function() {
        return {
          value: o[ks[idx++]],
          done: (idx > ks.length)
        }
      }
    }
  }
})

// ? 创建一个迭代器能产升无限的随机数
var randoms = {
  [Symbol.iterator]: function() {
    return {
      next: function() {
        return { value: Math.random() }
      }
    }
  }
}

var it = randoms[Symbol.iterator]()
console.log(it.next());
console.log(it.next());
