const validateClaims = (claims) => {
    const isValidLength = Object.keys(claims).length === 3;
    const isValidName = typeof claims.Name === 'string' && !/\d/.test(claims.Name);
    const isValidRole = ['Admin', 'Member', 'External'].includes(claims.Role);
    const isValidSeed = isPrime(Number(claims.Seed));

    return isValidLength && isValidName && isValidRole && isValidSeed;
};


// the best performance that i found is O(sqrt(n)), because the algorithm iterates up to the square root of "n" to check if the number is divisible by any divisor.
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let divisor = 5;
    const increment = 6;

    while (divisor * divisor <= num) {
        if (num % divisor === 0 || num % (divisor + 2) === 0) return false;
        divisor += increment;
    }

    return true;
};


module.exports = { validateClaims, isPrime };