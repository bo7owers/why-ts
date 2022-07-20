# Installing TypeScript in Vue 3

You can install TS when you are creating your [Vue 3 app](https://vuejs.org/guide/quick-start.html) or to a project you already have started by running. _These instructions are based on vite so you may want to do some research if you are using the vue-cli_

```shell
 $ npm install typescript
```

After installing TS in your project, you need to create a `tsconfig.json` file in the root, like the following:

```json
"compilerOptions": {
    "target": "esnext", // Change based on the desired target
    "module": "esnext", // Kind of modules you are working on
    "moduleResolution": "node", // Node's CommonJS implementation
    "allowJs": true, // If you want to switch between JS and TS
}
```

You can find more information about `tsconfig.json` in the [TypeScript Documentation](https://www.typescriptlang.org/tsconfig)
