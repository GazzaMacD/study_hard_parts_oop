# The Hard Parts of Object Oriented JavaScript

## The Hard Parts of Object Oriented JavaScript - Frontend Masters - Will Sentance

Learn the fundamentals of Object Oriented Programming in JavaScript for organizing and scaling your code. You'll learn JavaScript’s prototypal design and how it works to enable the new ES6 classes under the hood. Understanding prototypes and classes in JavaScript is crucial for working with most modern frameworks and for those coming from traditional OOP languages.

### 1. Object Creation

#### Key Questions

-   Having objects with access to their data and functionality is what principle of programming?
-   Is this principle strictly applied in JS?
-   Which method of object creation allows for fine grained control of what functionality is accessible?
-   When using Object.create() to create a new object with no specific object as prototype, should we use null or {} as argument?
-   Why?
-   What is the problem of making a new method per object?

### 2. Prototype and 'new'

-   How do we solve the problem presented above in the last question?
-   How is the object created linking to the functionality of the prototype object passed to Object.create()?
-   Is `__proto__` recommended in modern JS?
-   What is the alternative to `__proto__`?
-   The 'new' keyword is doing two things for us, what are they?
-   When using object creator functions designed to use 'new', how should we name them using commonly accepted nomenclature?
-   A function is actually a combination of what and what?
-   When a function such as below is defined, what is the property 'prototype' and where is it?

```javascript
function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}
```

-   How would we now attach shared functionality to the objects due to be created by the object creator function that will be used with the `new` keyword?
-   Where are these functions stored?
-   When we use object.`__proto__` or `Object.getPrototypeOf(object)`, what is returned?
-   If you don't use the 'new' keyword with the creator function, what does `this` refer to?

### 3. Scope and this

### 4. Default Prototype Chain

### 5. Subclassing with Factory Functions

### 6. Subclassing with New and Call

### 7. Subclassing with class, extends and super
