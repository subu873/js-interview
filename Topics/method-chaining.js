class Calculate {

    constructor(initialValue = 0) {
        this.value = initialValue
    }

    add(number) {
        this.value += number;
        return this
    }

    subtract(number) {
        this.value -= number
        return this
    }

    multiply(number) {
        this.value *= number;
        return this
    }

    divide(number) {
        this.value = this.value / number
        return this
    }

    total() {
        return this.value
    }
}

const result = new Calculate()

result.add(5).subtracte(2).total()

// Second method 

const CalculateObj1 = {
    value: 0,
    add: function (number) {
        this.value += number;
        return this; // Return the object itself for chaining
    },
    multiply: function (number) { // Corrected the typo here
        this.value *= number;
        return this; // Return the object itself for chaining
    },
    total: function () {
        return this.value;
    }
};
CalculateObj1.add(5).multiply(3).total(); // This will work as expected
