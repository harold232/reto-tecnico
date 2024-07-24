function findNaughtyStep(original, modified) {
    // Code here
    const countWord = Math.max(original.length, modified.length)

    for (let i = 0; i < countWord; i++) {
        if (original[i] !== modified[i]) {
            return (modified.length > original.length)
                ? modified[i]
                : original[i];
        }
    }

    return '';
}

const original = 'stepfor'
const modified = 'stepor'
console.log(findNaughtyStep(original, modified)) // 'f'
