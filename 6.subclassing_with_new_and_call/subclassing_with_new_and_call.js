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

export { userOne, UserCreator, PaidUserCreator, paidUserOne };
