# 高级类型

## 交叉类型

取所有类型的并集

``` ts
interface A {
  eat(): void
}
interface B {
  run(): void
}
let AB: A & B = {
  eat() {
    console.log('eat ...')
  },
  run() {
    console.log('run ...')
  }
}
```

## 联合类型

``` ts
let C: A | B = {
  run() {
    console.log('run ...')
  }
}
```

## 穷尽检查

``` ts
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle | Triangle;
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
    // should error here - we didn't handle case "triangle"
}

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s); // error here if there are missing cases
    }
}
```

## 索引类型

```ts
let obj = {
  a: 1,
  b: 2,
  c: 3
}
function getVal(obj: any, keys: string[]) {
  return keys.map(key => obj[key])
}
console.log(getVal(obj, ['a', 'c']))
console.log(getVal(obj, ['d', 'e'])) // [undefined, undefined]
```

### keyof

### T[K]

### T extends U

```ts
let obj = {
  a: 1,
  b: 2,
  c: 3
}
function getVal<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
console.log(getVal(obj, ['a', 'c']))
console.log(getVal(obj, ['d', 'e'])) // error
```

## 映射类型

预先定义的泛型接口

```ts
{
  interface Obj {
    a: 1,
    b: 2
  }
  // 只读
  type ReadonlyObj = Readonly<Obj>
  // 可选
  type PartialObj = Partial<Obj>
  // 选取
  type PickObj = Pick<Obj, 'a'>
  // 添加新属性
  type RecordObj = Record<'x' | 'y', Obj>
}
```

## 条件类型

### T extends U ? X: Y

T 可以赋值给 U 则为X类型，否则为Y类型

```ts
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T0 = TypeName<string>;  // "string"
type T1 = TypeName<"a">;  // "string"
type T2 = TypeName<true>;  // "boolean"
type T3 = TypeName<() => void>;  // "function"
type T4 = TypeName<string[]>;  // "object"
```

预置条件类型

```ts
Exclude<T, U>
NonNullable<T>
Extract<T, U>

ReturnType<T>
```