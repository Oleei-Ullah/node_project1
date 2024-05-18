const math = {}

math.getRandomNumber = (min, max) => {
    let minimum = min;
    let maximum = max;

    minimum = typeof minimum === 'number' ? min : 0;
    maximum = typeof maximum === 'number' ? max : 0;

    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}

export default math;