function travelAgency(input) {
    let destination = input[0];
    let withBreakfastOrEquipment = input[1];
    let vipDiscount = input[2];
    let nights = Number(input[3]);

    let price = 0.0;

    switch (vipDiscount) {
        case 'no':
            switch (destination) {
                case 'Bansko':
                case 'Borovets':
                    switch (withBreakfastOrEquipment) {
                        case 'noEquipment':
                            price = 80 * nights;
                            break;
                        case 'withEquipment':
                            price = 100 * nights;
                            break;
                    }
                    break;
                case 'Varna':
                case 'Burgas':
                    switch (withBreakfastOrEquipment) {
                        case 'noBreakfast':
                            price = 100 * nights;
                            break;
                        case 'withBreakfast':
                            price = 130 * nights;
                            break;
                    }
                    break;
            }
            break;
        case 'yes':
            switch (destination) {
                case 'Bansko':
                case 'Borovets':
                    switch (withBreakfastOrEquipment) {
                        case 'noEquipment':
                            price = 76 * nights;
                            break;
                        case 'withEquipment':
                            price = 90 * nights;
                            break;
                    }
                    break;
                case 'Varna':
                case 'Burgas':
                    switch (withBreakfastOrEquipment) {
                        case 'noBreakfast':
                            price = 93 * nights;
                            break;
                        case 'withBreakfast':
                            price = 114.4 * nights;
                            break;
                    }
                    break;
            }
            break;
    }
    if (nights > 7){
        let freeDays = Math.floor(nights / 7) * price / nights;
        price = price - freeDays;
    }
    if (nights >= 1 && (destination === 'Bansko' || destination === 'Borovets' || destination === 'Varna' || destination === 'Burgas')) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    } else if (nights >= 1 && !(destination === 'Bansko' || destination === 'Borovets' || destination === 'Varna' || destination === 'Burgas')){
        console.log(`Invalid input!`);
    }
    if (nights < 1) {
        console.log(`Days must be positive number!`);
    }
}
travelAgency(
    [
        "Borovets",
        "noEquipment",
        "yes",
        "10"     
    ]
)