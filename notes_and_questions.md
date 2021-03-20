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
-   Is '\_\_proto\_\_\' recommended in modern JS?
-   What is the alternative to '\_\_proto\_\_\'?
-   The 'new' keyword is doing two things for us, what are they?
-   When using object creator functions designed to use 'new', how should we name them using commonly accepted nomenclature?
-   How would we now attatch shared functionality to the objects created by these object creator functions that are using 'new'
-   Where are these functions stored?
-   When we use object.\_\_proto\_\_ or Object.getPrototypeOf(object), what is returned?

### 3. Scope and this

### 4. Default Prototype Chain

### 5. Subclassing with Factory Functions

### 6. Subclassing with New and Call

### 7. Subclassing with class, extends and super
