function sumNumbers(first, second) {
    if (typeof first !== 'number' || typeof second !== 'number' || isNaN(first) || isNaN(second)) {
        throw new Error('You must increase numbers');
    }

    return first + second;
}

module.exports = sumNumbers;

function renderComponent(isMenu) {
    if (!isMenu) {
        return null;
    }

    
}
