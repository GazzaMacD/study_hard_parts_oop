const objOne = {
    numUpdates: 0,
    balance: 0,
    increaseBalance: function (amount) {
        this.balance += amount;
    },
    incrementNumUpdates: function () {
        this.numUpdates += 1;
    },
};

const objTwo = {
    numUpdates: 0,
    balance: 0,
};

export { objOne, objTwo };
