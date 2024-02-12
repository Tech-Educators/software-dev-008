# JS Arrow Functions

## Overview

Arrow functions are an alternative syntax for writing functions in JavaScript. They are shorthand that can be easier to read and write.

This class is about getting used to the new syntax and comparing it to the syntax you're used to.

## Class Plan

- Demo: Arrow functions
- Workshop: Rewrite functions using arrow functions

## Topics

- Arrow functions
- Function expressions
- Function declarations

## Resources

- [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

## Workshop

### What is an "arrow function"

In React app code we often use arrow functions, for a shorthand syntax that is more readable (when you get used to it). We can use arrow functions anywhere we would use a function expression, they're not specific to React and the syntax is interchangeable.

⛳️ Here's an ordinary JavaScript function definition:

```js
function add(a, b) {
  return a + b;
}

add(1, 2); // 3
```

⛳️ And here it is written as an "arrow function" expression, where we assign the function to a const, and call it using that name:

```js
const add = (a, b) => {
  return a + b;
};

add(1, 2); // 3
```

⛳️ Optionally, if the function body is a single line you can leave out the curly braces and the return keyword, returning the value directly:

```js
const add = (a, b) => a + b;

add(1, 2); // 3
```

🎯 Take the common calculator functions or string functions we've worked on in previous weeks and rewrite them as arrow functions. The syntax takes a little getting used to but it's worth it.

## Asynchronous Arrow functions

Arrow functions can also be asynchronous, for when you need to do tasks that take time like making a fetch request over the internet.

⛳️ Here's an ordinary async JavaScript function definition:

```js
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}
```

⛳️ And here it is written as an "arrow function" expression, where we assign the function to a const, and call it using that name:

```js
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

async function main() {
  const posts = await getPosts();
  console.log("Posts:", posts);
}
main();
```

💭 You can't always use async/await at the top level of a JS file, so using a main function that is async is a simple way to ensure you can use async/await.

🎯 Experiment with the async/await and arrow function syntax.

## Common issues using async / await / fetch

- No top level await in Node.js, must use an async main function

// ignore this for later
- No async function for useEffect in React