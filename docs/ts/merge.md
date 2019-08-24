# 申明合并

```ts
interface A {
  x: number;
}
interface A {
  y: string;
}
let a: A // 合并上面两个申明
```

## 命名空间合并

命名空间可以和`接口`合并

命名空间可以和`类`合并

命名空间可以和`枚举`合并
