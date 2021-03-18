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
        userOne.score += 1;
    },
};

/*
 *  Create object using Object.create(proto, [propertiesObject])
 * note: always returns an empty object but uses
 * the proto argument(an object or null) as the prototype
 */

//const userThree = Object.create(null); <-- used by Will, but probably should use below
const userThree = Object.create({});
userThree.name = "Hannah";
userThree.score = 18;
userThree.increment = function () {
    userThree.score += 1;
};
