function drawGift(size, symbol) {
    if (size <= 1) {
        return '#'.repeat(size) + '\n';
    }

    const spaceCount = size - 2;
    let symbolCount = 0;

    // Primera linea
    let gift = [
        ' '.repeat(size - 1) + '#'.repeat(size)
    ];

    // Lineas interiores
    for (let i = 0; i < spaceCount; i++) {
        gift.push(
            ' '.repeat(spaceCount - symbolCount)
            + '#' + symbol.repeat(spaceCount)
            + '#' + symbol.repeat(symbolCount++)
            + '#'
        );
    }

    // Linea media
    gift.push(
        '#'.repeat(size)
        + symbol.repeat(spaceCount)
        + '#'
    );

    // Invertir las lineas anteriores del array
    for (const c of gift.slice(0, -1).reverse()) {
        gift.push(c.replace(/\s+/, ''));
    }

    return gift.join('\n') + '\n';
}

console.log(drawGift(4, '+'))