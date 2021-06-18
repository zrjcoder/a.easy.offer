

/**
 * ? 什么是深拷贝和浅拷贝
 * 基础数据类型值存在栈内存中，引用类型只在栈内存中存储了一个引用
 * 而真正的数据存储在堆内存中，所以基础类型不存在深拷贝。
 *
 *
 * ! 结论
 * 浅拷贝
 * 只拷贝对象的引用，而非堆里的值
 * 因为指向了同一个引用，多个对象指向堆内存中的同一对象
 * 任何一个修改都会使得所有对象的值修改
 *
 * 深拷贝
 * 深拷贝不会拷贝引用类型的引用
 * 而是将引用类型的值全部拷贝一份，形成一个新的引用类型
 * 这样就不会发生引用错乱的问题，使得我们可以多次使用同样的数据
 * 而不用担心数据之间会起冲突
 */

// ? 深拷贝的实现
// 1，序列化与反序列化
function deepClone(obj) {
  let _obj = JSON.stringify(obj)
  objClone = JSON.parse(_obj)
  return objClone
}

// 2，Object.assign
function deepClone(obj) {
  return Object.assign(obj)
}
