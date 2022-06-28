function tennisEquipment(input) {
    let priceForTennisPlay = Number(input[0]);
    let numTennisPlays = Number(input[1]);
    let shoesPairs = Number(input[2]);

    let sumForTennisEquipment = priceForTennisPlay * numTennisPlays;

    let sumForShoes = shoesPairs * 1 / 6 * priceForTennisPlay;

    let sumFotTennisOtherEquipment = (sumForTennisEquipment + sumForShoes) * 0.2;

    let price = sumForTennisEquipment + sumForShoes + sumFotTennisOtherEquipment;


    console.log(`Price to be paid by Djokovic ${Math.floor(1 / 8 * price)}`);

    console.log(`Price to be paid by sponsors ${Math.ceil(7 / 8 * price)}`);
}

tennisEquipment(
    [
        "386",
        "7",
        "4"
    ]
)