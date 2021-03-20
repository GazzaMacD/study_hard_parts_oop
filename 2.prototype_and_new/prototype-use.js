/*
 *  Create an object with two methods on it
 */

const userFunctions = {
    increment: function () {
        this.score += 1;
    },
    login: function () {
        return `${this.name}, you are logged in!`;
    },
};

/*
 *  Create an object creator function with two parameters
 */

function UserCreator(name, score) {
    // pass userFunctionScore as argument to Object.create returning
    // a new empty object and assign it to newUser
    const newUser = Object.create(userFunctions);
    // attach properties and associated values to the object newUser
    newUser.name = name;
    newUser.score = score;
    // return the object
    return newUser;
}

/*
 *  Create two new users, use same values as object creation
 * and test -- tests passing
 */
const userOne = UserCreator("Gareth", 10);
const userTwo = UserCreator("Bob", 7);

/*
 *  Create an object creator function with two parameters
 */

export { userOne, userTwo, userFunctions };
