# Getting started with Typescript

## Setting variables

In JavaScript you can redeclare a variable as many times as you want, without any restrictions.
In TypeScript you can redeclare a variable, as long as the type of your new value has the same type as the original. There can be explicit or implicit types.

The following example showcases how variables are declared using `strings` in JS vs TS. The same principals apply to all data types.

### Strings

In JavaScript

```js
let honorific = "Dr.";
let userInput = "";
/*
 Your super complex code goes here 
 */
console.log(honorific, userInput);
/* output is: 'Dr. Saly' */

// We can redeclare vars in js:

honorific = false;

console.log(honorific, userInput);
/* new output is: false 'Saly' */
```

In TypeScript

```ts
let honorific = "Professor"; // Implicit type of string
let userInput: string; // explicit type of string
/*
 Your super complex code goes here 
 */
console.log(honorific, userInput);
/* output is: 'Professor Lee' */

// If we try to redeclare honorific we get the following error

honorific = true;
/*
let honorific: string
Type 'boolean' is not assignable to type 'string'.(2322)
*/
```

The TypeScript code won't run until you you fix the error. When you work with big apps, this can save time, money and will prevent issues in the future.

## Data types in TS

We use the same data types in TS and JS.

### Number

Numbers represent both integer and floating point numbers.

```ts
let number = 99.3;
let otherNumber: number;
```

---

### String

Strings are always inside single quotes, double quotes or back ticks.

```ts
let msg: string;
let location = "there";
msg = "hello";
console.log(msg, location);
```

---

### Boolean

Booleans are either `true` or `false`.

```ts
let amIAwake = false;
let shouldISleep: boolean;
```

### Null

It is its own data type.

```ts
let isMsTeamsGood = null;
```

### Undefined

This means the value is not assigned. Unless you don't assing a type to your variable, most times it will show as unassigned when using TS. #stronglyTypedLangBenefits

```ts
let time: string;
console.log(time);
/* Output
let time: string
Variable 'time' is used before being assigned.ts(2454)
*/
```

### Any

Remember when I said we ["use the same data types in TS and JS"](#data-types-in-ts)?

Well `any` brings the native behaviour of JS to TS.

This may seem like a good soluiton to a hard-to-fix problem but it may be better to stick with TS to fix the problem.

```ts
let chocolateBar: any = "KitKat";
console.log(chocolateBar);
/** Output
 * 'KitKat'
 */
chocolateBar = false;
console.log(chocolateBar);
/** Output
 * false
 */
chocolateBar = 125;
console.log(chocolateBar);
/** Output
 * 125
 */

// None of the redeclarations caused an error in the editor
```
