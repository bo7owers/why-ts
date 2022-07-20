# Getting started with Typescript

## Setting variables

In JavaScript you can redeclare a variable as many times as you want, without any restrictions.
In TypeScript you can redeclare a variable, as long as the type of your new value has the same type as the original. There can be explicit or implicit types.

The following example showcases how variables are declared using `strings` in JS vs TS. The same principals apply to every type.

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
