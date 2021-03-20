/*
 *  Create an object creator function with two parameters
 */

function UserCreator(name, score) {
    // attach properties and associated values to auto returned object using 'this'
    this.name = name;
    this.score = score;
    // object is returned when using the new keyword in front of invoking this function
}

/*
 *  Attatch the two functions to the prototype property (this is an object itself)
 * The prototype property is on the Object part of the funcion
 * Functions are actually functions and objects
 */
UserCreator.prototype.increment = function () {
    this.score += 1;
};
UserCreator.prototype.login = function () {
    return `${this.name}, you are logged in!`;
};

/*
 *  Create two new users, use same values as object creation
 * and test -- tests passing
 */
const userOne = new UserCreator("Gareth", 10);
const userTwo = new UserCreator("Bob", 7);

export { userOne, userTwo, UserCreator };
