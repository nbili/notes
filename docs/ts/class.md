# 类

```ts
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'Hello, ' + this.greeting
  }
}

let greeter = new Greeter('world')
```

## 修饰符

### public

共有的属性或方法

```ts {7}
class Dog {
  constructor(name: string) {
    this.name = name
  }
}
class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
  }
}
console.log(Husky.food)
```

### private

不可在实例/继承中中访问

```ts
class Animal {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}

new Animal('Cat').name // 错误: 'name' 是私有的.
```

### protected

可以在继承中访问，不可以在实例中访问

```ts
class Person {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())
console.log(howard.name) // 错误
```

### readonly

使用 `readonly` 关键字将属性设置为只读的

## 静态属性

静态只读属性

```ts
class P {
  static readonly v = 2333
}

console.log(P.v) // 2333
```

## 抽象类

```ts
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earch...')
  }
}
```

```ts
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earch...')
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Dog sound')
  }
  move() {
    console.log('Dog move')
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Cat sound')
  }
  move() {
    console.log('Cat move')
  }
}

let animal: Animal[] = [new Dog(), new Cat()]
animal.forEach(item => item.makeSound())
```

## 类和接口

```ts
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

### 类实现接口

类可以实现接口，接口只能约束 类的共有成员

### 接口继承接口

接口之间可以相互继承，合并

```ts
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 继承多个接口 用 , 隔开
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}
```

### 接口继承类

将类抽离成 接口，包括 public protected private 修饰方法和属性, 意味着如果继承的类有修饰符，这个接口只能被这个类或者子类所实现。
