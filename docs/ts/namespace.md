# 命名空间

## namespace

命名空间编译后会形成闭包

区别：

* 防止全局变量污染使用 命名空间
* 基于模块系统，使用模块

```ts
namespace Validation {
  export const A = 1;
  export const getA = () => {
    return A
  };
}
```

引入外部命名空间

`/// <reference path=“namespace.ts”/>`
