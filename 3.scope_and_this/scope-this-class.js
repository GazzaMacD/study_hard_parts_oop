/*
 * Create an object creator function with two parameters
 */

function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

/*
 *  Attatch the three functions to the prototype property
 * Use different this permutations in the methods on prototype
 */

UserCreator.prototype.returnThisOne = function () {
    return this;
};
UserCreator.prototype.returnThisNested = function () {
    function nested() {
        return this;
    }
    return nested();
};

UserCreator.prototype.returnThisArrow = function () {
    const nested = () => {
        return this;
    };
    return nested();
};

const userOne = new UserCreator("Gareth", 10);

/*
 *   Use class syntax to create 'classes'
 */

class ClassUserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increment() {
        this.score += 1;
    }
    login() {
        return `${this.name}, you are logged in!`;
    }
}

const userTwo = new ClassUserCreator("Bob", 7);

export { UserCreator, userOne, userTwo, ClassUserCreator };
