# Getting started with Typescript

## Setting variables

In TypeScript you can re-declare a variable, as long as your new value is the same type as the original. There can be explicit or implicit types.

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

// We can re-declare vars in js:

honorific = false;

console.log(honorific, userInput);
/* new output is: false 'Saly' */
```

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

The TypeScript code won't run until you you fix the error. When you work with big apps, this can save time, money and won't cause issues in the future.
