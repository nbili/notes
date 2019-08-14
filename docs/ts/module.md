# 模块系统

支持 es6 和 commonjs

```ts
export interface Func {
  (arg: number): string;
}
export class C {
  constructor() {}
}
class B {}
export { B };
export { B as ClassB };
```

```ts
// main.ts
export * from "./moduleB";
// main.ts
export { name } from "./moduleB";
// main.ts
export { name as nameProp } from "./moduleB";
```

兼容两种模式的模块系统

```ts
class C {}
export = C;
```

```ts
import ClassC = require("./moduleC");
const c = new ClassC();
```
