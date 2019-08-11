# 接口

## 对象接口

```ts
interface Obj {
  id: number
  name: string
}

let o: Obj = {
  id: 23,
  name: 'nbili'
}
```

如果这个时候给 o 添加接口不存在的属性：`'age' does not exist in type 'Obj'`

## 可选属性

```ts
interface Obj {
  id: number
  name: string
  age?: number
}
```

## 属性索引

```ts
interface Obj {
  id: number
  name: string
  [propName: string]: any
}
```

## 断言绕过类型检查

```ts
let o: Obj = <Obj>{
  id: 23,
  name: 'nbili',
  age: 12
}
// 相当于
let o: Obj = {
  id: 23,
  name: 'nbili',
  age: 12
} as Obj
```

## 函数接口

描述函数接口的三种方式：

```ts
let add: (x: number, y: number) => number

interface add {
  (x: number, y: number): number
}

type add = (x: number, y: number) => number
```

## 混合类型接口

```ts
interface Goods {
  (): void
  apple: string
  eat: string
}

let g: Goods = (() => {}) as Goods
g.apple = 'apple'
g.eat = 'eat'
```
