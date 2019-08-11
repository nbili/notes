# 泛型

## 使用

定义：

```ts
function A<T>(a: T): T {
  console.log(a)
  return a
}
```

调用：

```ts
A<string[]>(['1', '2', 'c'])
```

或者直接使用类型推断，不使用指定的泛型类型

```ts
A([1, 2, 3])
```

## 泛型接口

```ts
interface A<T> {
  (val: T): T
}
let oA: A<number> = A
```

## 泛型类型

```ts
type TA = <T>(val: T) => T
let mA: TA = A
```

## 泛型修饰类成员

如果创建类的实例时指定了泛型，则严格约束，如果不指定，可以传递任何值

```ts
class P<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}

let p = new P<Date>()
console.log(p.run(new Date()))
let p2 = new P()
console.log(p2.run(123))
```

## 泛型约束

```ts
interface Len {
  length: number
}
class P<T extends Len> {
  run(value: T) {
    console.log(value.length)
    console.log(value)
    return value
  }
}

let p = new P<string>() // 此处只能传递被约束过的 泛型
console.log(p.run('123'))
```
