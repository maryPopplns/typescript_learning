# explicit types

- primitives

```
let character: string;
let age: number;
let isLoggedIn: boolean;
```

- arrays

```
let arrayOfStrings: string[]
```

- union types

```
let mixedArray: (string|number)[]
let mixed: string|number
```

- objects

```
let declaredObject: object;
declaredObject = {name: 'spencer', age: 31}

let declaredObject2: object;
declaredObject2 = {
  name: string,
  age: number,
  beltColor: string
}
```

# dynamic types

```
let age: any
age = '31'
age = 31

let mixed: any[]
mixed.push('any')
mixed.push(true)
mixed.push(31)

let anyObject : {age: any, type: any}
```

# ts config

- includes options to choose what folder to compile, and where the resulting files end up
- allows you to specify what files/directories are to be compiled

# functions

```
let greetFunction: Function;
greet = ()=> console.log('hola')

const add = (a: number, b:number) => {
  console.log(a + b)
}
add(5, 10)
```

- return types are inferred but can be explicitly stated as well

```
const subtract = (a:number, b:number): number => {
  return a - b;
}

```

- functions returning void types means the function doesn't return anything

```
const subtract = (a:number, b:number): void => console.log(a - b)
```

# type aliases

- allows you to declare the type within a 'variable'

```
type stringOrNum = string | number

const reply = (response: stringOrNum): void => console.log(response)
```

# function signatures

- describes the general structure of a function (the arguments it takes in and what kind of data it returns)

```
example 1
let greet: (a:string, b:string) => void
greet = (name:string, greeting:string) => {
  console.log(name + string)
}
```

```
example 2
let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo
  } else {
    return numOne - numTwo
  }
}
```

```
example 3
let logDetails: {obj: {name: string, age: number}} => void

type person = {name: string, age: number}

logDetails = (ninja: person) => {
  console.log(name + age)
}
```

# type casting

- JavaScript doesn’t have a concept of type casting because variables have dynamic types. However, every variable in TypeScript has a type. Type castings allow you to convert a variable from one type to another.

- In TypeScript, you can use the as keyword or <> operator for type castings.

```
let input = document.querySelector('input["type="text"]');

let input = document.querySelector('input[type="text"]') as HTMLInputElement;
or
let input = <HTMLInputElement>document.querySelector('input[type="text"]');
```

# interfaces

- One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

```
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak: (text: string): void => console.log(text),
  spend: (amount: number): number => amount
}
```

# generics

- being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

```
function identity(arg: number): number {
  return arg;
}
function identity<Type>(arg: Type): Type {
  return arg;
}
let output = identity<string>("myString");
or
let output = identity("myString");
```

# enums

- Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

```
numeric
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

string
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

# tuples

- Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

```
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```
