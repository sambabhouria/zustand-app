# React + TypeScript + Vite Zustand App

This is the most comprehensive "Zero to Hero" Zustand (Slices pattern) App.
You will learn everything related to it through practical examples, best practices, and integrate it with TypeScript and React as quickly as possible to create an eCommerce application with an amazing modern reactive shopping cart and products page.

# Zustand

A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.

<h3 align="center"> 📸 Screenshot</h3>
  
![product page](/product-screen.png)
  
![add product](/add-item.png)

![adresse](/adress-input.png)

![cart](/cart.png)

## 🚨 Tech

- React Vite
- Zustand (Slices pattern) using middleware (devtools, persist,subscribeWithSelector,immer)
- tailwindcss
- lucide-react
- clsx

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
