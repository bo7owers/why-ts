# TypeScript vs JavaScript?

TypeScript is to JavaScript what SCSS is to CSS. A superset; therefore any valid JS is valid TS.

The same way as SCSS, browsers (and in this case Node), cannot run TS code, you'll need to compile it.

The official [TypeScript Tooling in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html) article will get you ready to.

Go to the next page to see how to add TypeScript to a Vue 3 application.

## The foundation of TS

Basically, TypeScript is JavaScript with type annotations. So each variable is linked to its type (number, string, boolean, null). We'll explore this more in detail later.

It adds extra syntax to your JS code. It may sound pointless but in this case, when you add a bit more code in development, you avoid big errors in production.

## Editor integration

The reasoning of adding types to JS is to catch errors before you run your code in the browser. When you use a text editor like Visual Studio Code or [VSCodium](https://vscodium.com/), your editor will notice when you are trying to do things that don't work and will yell at you.

This way you know there is an issue before you run your code and add _20 thousad_ `consol.log` statements all over you file.

## In a nutshell...

More code is less debugging time, especially when dealing with big applications.
