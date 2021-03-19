/*
 *  Create empty object with literal notation and add properties with dot notation
 */

const userOne = {};
userOne.name = "Gareth";
userOne.score = 10;
userOne.increment = function () {
    userOne.score += 1;
};

/*
 *  Create object with literal notation
 */
const userTwo = {
    name: "Bob",
    score: 7,
    increment: function () {
        userTwo.score += 1;
    },
};

/*
 *  Create object using Object.create(proto, [propertiesObject])
 * note: always returns an empty object but uses
 * the proto argument(an object or null) as the prototype
 */

//const userThree = Object.create(null); <-- used by Will, but just to be clear, usually better to use ({})
// to avoid unusual behavior
const userThree = Object.create({});
userThree.name = "Hannah";
userThree.score = 18;
userThree.increment = function () {
    userThree.score += 1;
};

/*
 *  Create object using a function
 */

function UserCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score += 1;
    };
    return newUser;
}
// return the value assigned to newUser in the UserCreator
// local execution context to be saved on each
const userFour = UserCreator("John", 5);

/*
 *  The above approach is of course awful becuase we are creating a new copy of
 * the functions on each user, memory nightmare
 * We need only one copy of the increment function
 */

export { userOne, userTwo, userThree, userFour };
