# 类型兼容

结构之间兼容：成员少的兼容成员多的
函数之间兼容：参数多的兼容参数少的

## 接口兼容

```ts
interface X {
  a: any
  b: any
}
interface Y {
  a: any
  b: any
  c: any
}
let x: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }
x = y
```

## 函数兼容

```ts
type fun = (x: number, y: number) => void
function fun2(fn: fun) {
  return fn
}

// 传入的 fn 函数必须兼容 fun
```

参数个数

```ts
let one = (x: number) => {}
fun2(one)
```

可选参数或者剩余参数 (strictFunctionTypes: false)

```ts
let a = (p1: number, p2: number) => {}
let b = (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {}
a = b
a = c
b = a
b = c
c = a
c = b
```

参数类型 双向协变

```ts
interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d
p2d = p3d
```

## 枚举兼容

枚举类型可以和 number 相互赋值

枚举之间不能互相赋值

## 类兼容性

忽略了构造函数和静态成员

## 泛型兼容性

```ts
interface Empty<T> {
  value: T
}

let o1: Empty<number> = {}
let o2: Empty<string> = {}
```
