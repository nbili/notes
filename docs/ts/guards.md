# 类型保护

```ts
enum Type {
  Strong,
  Week
}
class Java {
  helloJava() {
    console.log('hello java')
  }
}
class JavaScript {
  helloJavaScript() {
    console.log('hello js')
  }
}

function getLan(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  if ((lang as Java).helloJava) {
    ;(lang as Java).helloJava()
  } else {
    ;(lang as JavaScript).helloJavaScript()
  }

  return lang
}

getLan(Type.Week)
```

例子中，每次都需要做类型断言，由此引出类型保护

instanceof

```ts
if (lang instanceof Java) {
  lang.helloJava()
} else {
  lang.helloJavaScript()
}
```

in

```ts
if ('Java' in lang) {
  lang.helloJava()
} else {
  lang.helloJavaScript()
}
```

typeof

```ts
if (typeof x === 'string') {
  x.length
} else {
  x.toFixed()
}
```

类型谓词

```ts
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}
```
