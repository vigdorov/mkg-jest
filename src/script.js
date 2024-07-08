function sum(a, b) {
    const prepareA = Number(a);
    const prepareB = Number(b);

    if (
        typeof prepareA !== 'number' ||
        typeof prepareB !== 'number' ||
        Number.isNaN(prepareA) ||
        Number.isNaN(prepareB)
    ) {
        throw new Error('Cannot prepare number');
    }

    return prepareA + prepareB;
}

module.exports = {
    sum,
};
