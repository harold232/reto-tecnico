function organizeChristmasDinner(dishes) {

    const ingredients = new Map();

    for (const [dishName, ...dishIngredients] of dishes) {
        for (const ingredient of dishIngredients) {
            let currentDishes = ingredients.get(ingredient);

            if (!currentDishes) {
                currentDishes = [];
            }

            currentDishes = currentDishes.concat(dishName);

            ingredients.set(ingredient, currentDishes);
        }
    }

    const organizedDishes = [];
    for (const [ingredient, dishes] of ingredients.entries()) {
        if (dishes.length >= 2) {
            organizedDishes.push([ingredient, ...dishes.sort()]);
        }
    }

    return organizedDishes.sort();
}

const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
];
console.log(organizeChristmasDinner(dishes));
