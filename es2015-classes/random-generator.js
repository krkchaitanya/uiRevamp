class RandomGenerator {
    static randomInteger() {
        return Math.floor(Math.random() * 100);
    }

    static randomRange(min, max) {
        return Math.floor(Math.random() * (max-min +1)) + min;
    }

    static paramsHandler(paramValue) {
        return `parameter you passed..${paramValue}`;
    }
}

export default RandomGenerator;
