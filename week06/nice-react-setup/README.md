# Components, Props, JSX and Rendering

## Overview

**Components** are the building blocks of a React application. They are reusable pieces of code that can be composed together to build a greater whole.

**Props** are the inputs to a component. They are arguments for the component when it runs - just like passing arguments to a function, only they look like HTML attributes (you'll get used to that).

**JSX** is a syntax extension to JavaScript that lets us write JavaScript with an HTML-like syntax. This lets us write functions that behave like HTML tags. We can combine our components like our own custom HTML tags. A component is just a function, and you run a component by using it like an HTML tag in the return value of another component.

The component (like a function) accepts the props (like arguments), and returns a block of JSX (like HTML) that is added to the DOM for us, without direct DOM manipulation.

When the props (arguments) change, React runs the component (function) for us again, gets the new JSX (HTML) returned with the updated data represented. It then updates the DOM with that HTML for us.

## Class Plan

- Demo: Live coding, building a hierarchical component tree with React
- Workshop: Build a component tree with React, passing props down the tree.

## Topics

- What is a component?
- What are props?
- What is JSX?
- How do we render components?
- How do we pass and render props?

## Required Knowledge

- JS
- HTML
- CSS

## Resources

- [React: JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React: Components and Props](https://react.dev/learn/components-and-props)
- [Learn React: Describing the UI](https://react.dev/learn/describing-the-ui)

## Workshop

### What is a Component?

A component is a reusable piece of a user interface. It's a way of encapsulating together the HTML, CSS and JavaScript that make up a single piece of functionality. Components can be composed together to create larger components, and then an entire application.

A component can be as small as a single `<button>` or as large as an entire page.

A component is a JavaScript function that returns a block of HTML:

```jsx
function MyComponent() {
  return <div>Hello, world!</div>;
}
```

This is JSX, a syntax extension to JavaScript that allows us to write HTML-like code in our JavaScript files. It's not HTML, but it looks and quacks a lot like it. It's a way of writing HTML in JavaScript.

You give a component your data - it renders HTML for you. You give a component your functions - it can handle events for you. You give a component another component - it can render it for you as a child.

### What is JSX?

JavaScript eXtension, or JSX, is a syntax extension to JavaScript that allows us to write HTML-like code in our JavaScript files. It's not HTML, but it looks a lot like it. It's a way of writing HTML in JavaScript.

```jsx
function MyComponent() {
  return <div>Hello, world!</div>;
}
```

Under the hood, React is calling a function called `createElement` to create the HTML for us. We could write the same component like this:

```jsx
function MyComponent() {
  return React.createElement("div", null, "Hello, world!");
}
```

It would be annoying to have to write that out for every `div` so we use JSX.

### What are Props?

Props are the inputs to the component function - just like arguments to a function. You pass props like you use HTML attributes, and they are available inside the component function as an object. We usually call the object `props` but you _could_ call it anything.

```jsx
function MyComponent(props) {
  return <div>Hello, {props.name}!</div>;
}

<MyComponent name="world" />;
```

You can pass multiple attributes to the Component and read multiple values from the props object.

```jsx
function MyComponent(props) {
  return (
    <div>
      Hello, {props.firstName} {props.lastName}!
    </div>
  );
}

<MyComponent firstName="John" lastName="Smith" />;
```

💭 You can't change props inside a component directly, they are **read-only**. This is how we make sure things stay in sync. The data comes from _outside_ the component. The component renders what it is given. If it needs to change the data, there are other ways. This is called "uni-directional data flow", and is one of the core principles of React's approach.

### Rendering components

You can render a component by putting it in the JSX of another component. You can render a component multiple times.

```jsx
function MyImageComponent(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.altText} />
    </div>
  );
}

function MyGalleryComponent() {
  return (
    <div>
      <MyImageComponent
        imageUrl="https://unsplash.com/photos/8wTPqxlnKM4"
        altText="An absolutely terrifying kitten"
      />
      <MyImageComponent
        imageUrl="https://unsplash.com/photos/8wTPqxlnKM4"
        altText="An absolutely terrifying kitten"
      />
      <MyImageComponent
        imageUrl="https://unsplash.com/photos/8wTPqxlnKM4"
        altText="An absolutely terrifying kitten"
      />
    </div>
  );
}

function MyPageComponent() {
  return (
    <div>
      <h1>My Gallery Page</h1>
      <p>More horrifying fluffballs, probably.</p>
      <MyGalleryComponent />
    </div>
  );
}
```

### React.dev links

Follow the guide at react.dev, it's excellent:

- [Learn React: Describing the UI](https://react.dev/learn/describing-the-ui)