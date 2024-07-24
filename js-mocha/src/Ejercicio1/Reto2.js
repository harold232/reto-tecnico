function manufacture(gifts, materials) {
    // Code here
    let giftsManufactured = [];

    gifts.forEach(function (string) {
        let canBeManufactured = true;

        for (let i = 0; i < string.length; i++) {
            //Se verifica si las letras de "string" esta incluida dentro de materials
            if (!materials.includes(string[i])) {
                canBeManufactured = false;
                break;
            }
        }

        if (canBeManufactured) {
            giftsManufactured.push(string);
        }
    });
    return giftsManufactured;
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
console.log(manufacture(gifts, materials))