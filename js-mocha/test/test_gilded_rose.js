var { expect } = require('chai');
var { Shop, Item } = require('../src/Ejercicio2/gilded_rose.js');

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 10) ]); // Crear una tienda con un artículo normal 'foo'
    const items = gildedRose.updateQuality(); // Llamar a updateQuality para actualizar la calidad del artículo
    expect(items[0].name).to.equal("foo"); // Verificar que el nombre del artículo sigue siendo 'foo'
    expect(items[0].quality).to.equal(9); // Verificar que la calidad ha disminuido en 1 después de un día
    expect(items[0].sellIn).to.equal(9); // Verificar que sellIn ha disminuido en 1 después de un día

  });

});
