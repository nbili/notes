# 类型

![types](/ts-img/types.png)

> 来自 Programming TypeScript

## 布尔值

```ts
let bool: boolean = false
```

## 数字

```ts
let num: number
num = 123
num = '123' // error 不能将类型"123"分配给类型"number"
num = 0b1111011 //  二进制的123
num = 0o173 // 八进制的123
num = 0x7b // 十六进制的123
```

## 字符串

```ts
let str: string = 'nbili';
let str2: 'Nbili';
str = 'other'; // error 不能将类型"other"分配给类型"Nbili"
```

## 数组

ts定义数组的两种方式：

```ts
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
```

## 元组

元组的元素类型要对应，元素个数也要对应。

```ts
let tuple: [string, number] = ['str', 123];
```

## 枚举

```ts
enum Word {
  a = 1,
  b,
  c,
  d
}
```
实现双向映射

枚举将被编译为：

```ts
var Word;
(function (Word) {
    Word[Word["a"] = 1] = "a";
    Word[Word["b"] = 2] = "b";
    Word[Word["c"] = 3] = "c";
    Word[Word["d"] = 4] = "d";
})(Word || (Word = {}));
```

字符串枚举单向映射

```ts
enum Word {
  a = 'a',
  b = 'b',
  c = 'c',
  d = 'd'
}
```

编译成：

```ts
var Word;
(function (Word) {
    Word["a"] = "a";
    Word["b"] = "b";
    Word["c"] = "c";
    Word["d"] = "d";
})(Word || (Word = {}));
```

异构枚举

数字枚举和字符串枚举混用，便是异构枚举

```ts
enum Word {
  a,
  b = 'b'
}
```

枚举成员

1. 枚举成员为只读类型，尝试赋值会出现 `Cannot assign to 'a' because it is a read-only property.`
2. 枚举内可以引用已有枚举成员
3. 枚举可以计算，保留到执行阶段在计算

```ts
enum W {
  e = 'nbili'.length
}
console.log(W.e) // 5
```

常量枚举

```ts
const enum Month {
  Jan,
  Feb,
  Mar
}

let month = [Month.Feb, Month.Jan, Month.Mar]
```

编译成：

```ts
let month = [1 /* Feb */, 0 /* Jan */, 2 /* Mar */]
```

枚举类型

```ts
enum E {a, b}

let e: E = 123 // 不可以赋值为 字符串

enum S {a='a', b='b'}

let s: S = S.a // 只能赋值为枚举内容自身
```
## Symbol

```ts
let s1: symbol = Symbol()
```

## undefined & null

```ts
let u: undefined = undefined
let n: null = null
```

## void

没有返回类型

## any

可以是任何类型

## never

异常 或者 死循环 等不会执行的代码返回

```ts
function err(): never {
  throw new Error('err')
}

function loop(): never {
  while (true) { }
}
```

## bigint

```ts
let f: bigint = 100n // 需要开启 ESNEXT
```