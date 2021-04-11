class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    getIntroduction() {
        return `Hi, I'm ${this.name}`;
    }
    incrementScore() {
        this.score += 1;
    }
}

const userOne = new UserCreator("John", 10);

class PaidUserCreator extends UserCreator {
    constructor(name, score, accBalance) {
        super(name, score);
        this.balance = accBalance;
    }
    increaseBalance(amount) {
        this.balance += amount;
    }
}

const paidUserOne = new PaidUserCreator("Gareth", 10, 100);

export { userOne, UserCreator, PaidUserCreator, paidUserOne };
