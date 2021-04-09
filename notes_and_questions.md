# The Hard Parts of Object Oriented JavaScript

## The Hard Parts of Object Oriented JavaScript - Frontend Masters - Will Sentance

Learn the fundamentals of Object Oriented Programming in JavaScript for organizing and scaling your code. You'll learn JavaScript’s prototypal design and how it works to enable the new ES6 classes under the hood. Understanding prototypes and classes in JavaScript is crucial for working with most modern frameworks and for those coming from traditional OOP languages.

### 1. Object Creation

#### Key Questions

-   Having objects with access to their data and functionality is what principle of programming?
-   Is this principle strictly applied in JS?
-   Which method of object creation allows for fine grained control of the functionality is accessible to the object?
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

### 3. Scope, this and classes

-   In the following code `userOne.increment()`, and where the increment function was defined as below

```javascript
UserCreator.prototype.increment = function () {
    this.score += 1;
};
```

what does `this` refer to?

-   When and where is the object to the left of the dot assigned to `this`?
-   When the method below is called, what does `this` refer to?

```javascript
UserCreator.prototype.increment = function () {
    function add() {
        this.score += 1;
    }
    add();
};
```

-   Does this code above do what we think it should?
-   There are three ways to fix this `this` problem, what are they (without looking below:) )?
-   `this` in arrow functions refers to which this, for example below?

```javascript
UserCreator.prototype.increment = function () {
    const add = () => {
        this.score += 1;
    };
    add();
};
```

-   What is the structure of a class in JS
-   What is different under the hood between objects create using the UserCreator function with methods on it's prototype from those objects created using the class syntax?
-   Do they both need `new`?

### 4. Default Prototype Chain

-   Is the Object class an object, a function or both?
-   Is every function actually a Function object?
-   What are some examples of instance (...prototype.method()) methods on Function.
-   What are some examples of instance (...prototype.method()) methods on Object.
-   Can you give an example of the prototypal chain?

### 5. Subclassing with Factory Functions

-   If we create an object with some functions on it, how would we then create an empty object whose `__proto__` refers to the above object with the functions?
-   If we want the another object of functions to have a link to the above object of functions how would be do that?
-   What do call and apply allow us to do?
-   What is the difference between the two?

### 6. Subclassing with New and Call

```js
function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.getIntroduction = function () {
    return `Hi, I'm ${this.name}`;
};

UserCreator.prototype.incrementScore = function () {
    this.score += 1;
};

const userOne = new UserCreator("John", 10);

function PaidUserCreator(name, score, accBalance) {
    UserCreator.call(this, name, score);
    // Could use .apply with UserCreator.apply(this, [name, score])
    this.balance = accBalance;
}
// Set the prototype of PaidUserCretor
PaidUserCreator.prototype = Object.create(UserCreator.prototype);
// Add the new Paid User Functions to prototype
PaidUserCreator.prototype.increaseBalance = function (amount) {
    this.balance += amount;
};

const paidUserOne = new PaidUserCreator("Gareth", 10, 100);
```

-   In the code above:
    -   Why does the code use call in PaidUserCreator?
    -   `this` passed to UserCreator.call() comes from where?
    -   Can you explain what is happening in the line

```js
PaidUserCreator.prototype = Object.create(UserCreator.prototype);
```

### 7. Subclassing with class, extends and super:w
