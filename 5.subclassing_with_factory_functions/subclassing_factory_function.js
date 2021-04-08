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

const paidUserFunctions = {
    increaseBalance: function (amount) {
        this.balance += amount;
    },
};

Object.setPrototypeOf(paidUserFunctions, userFunctions);

function PaidUserCreator(name, score, accBalance) {
    const newPaidUser = UserCreator(name, score);
    Object.setPrototypeOf(newPaidUser, paidUserFunctions);
    newPaidUser.balance = accBalance;
    return newPaidUser;
}

const paidUserOne = PaidUserCreator("Gareth", 10, 100);

export { userOne, UserCreator, userFunctions, PaidUserCreator, paidUserOne };
