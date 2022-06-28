
function fruitMarket(a, b, c, d, e) {
    let priceForStrawberries = Number(a);
    let quantityBananas = Number(b);
    let quantityOranges = Number(c);
    let quantityRaspberries = Number(d);
    let quantityStrawberries = Number(e);

    let sumForStrawberries = priceForStrawberries * quantityStrawberries;
    let sumPriceForRaspberries = priceForStrawberries * 1 / 2;
    let sumForRaspberries = sumPriceForRaspberries * quantityRaspberries;
    let priceForOranges = sumPriceForRaspberries - sumPriceForRaspberries * 0.4;
    let sumForOranges = priceForOranges * quantityOranges;
    let priceForBananas = (sumPriceForRaspberries - sumPriceForRaspberries * 0.8);
    let sumFotBananas = priceForBananas * quantityBananas;
    let sum = sumForRaspberries + sumForOranges + sumFotBananas + sumForStrawberries;
    console.log(`${sum.toFixed(2)}`);
}
fruitMarket(
    [
        // "48",
        // "10",
        // "3.3",
        // "6.5",
        // "1.7"

        // "63.5",
        // "3.57",
        // "6.35",
        // "8.15",
        // "2.5"

    ])