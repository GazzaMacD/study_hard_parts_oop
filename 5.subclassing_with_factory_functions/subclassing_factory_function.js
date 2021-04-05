const userFunctions = {
    getIntroduction: function () {
        return `Hi, I'm ${this.name}`;
    },
    incrementScore: function () {
        this.score += 1;
    },
};

function UserCreator(name, score) {
    const newUser = Object.create(userFunctions);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userOne = UserCreator("John", 10);

export { userOne, UserCreator, userFunctions };
