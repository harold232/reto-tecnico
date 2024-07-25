function maxDistance(movements) {
    // Code here
    let distance = 0;
    let random = 0;

    // > = Avanza a la derecha
    // < = Avanza a la izquierda
    // * = Puede avanzar o retroceder

    for (const c of movements) {
        if (c === '>')
            distance++;
        else if (c === '<')
            distance--;
        else if (c === '*')
            random++;
    }
    return Math.abs(distance) + random
}

const movements = '>***>'
const result = maxDistance(movements)
console.log(result)