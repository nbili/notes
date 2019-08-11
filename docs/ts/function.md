# 函数

## 定义函数的方式

```ts
function add(x: number, y: number) {
  return x + y
}

let add2: (x: number, y: number) => number
type add3 = (x: number, y: number) => number
interface add4 {
  (x: number, y: number): number
}
```

## 可选参数

```ts
function add(x: number, y: number, z?: number) {
  return x + y + z
}
```

## 剩余参数

```ts
function add(x: number, y: number, z?: number, ...rest: string[]) {
  return x + y
}
```

## 函数重载

```ts
function sum(...rest: number[]): number
function sum(...rest: string[]): string
function sum(...rest: any[]) {
  let x = rest[0]
  if (typeof x === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
  if (typeof x === 'string') {
    return rest.join(' ')
  }
}
console.log(sum(1, 3, 4)) // 8
console.log(sum('1', '2', '3')) // '1 2 3'
```
