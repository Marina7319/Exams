
function coffeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let numDrinks = Number(input[2]);

    let price = 0.0;

    let result = 0.0;


    switch (drink) {
        case 'Espresso':
            switch (sugar) {
                case 'Without':
                    price = 0.90;
                    result = price * numDrinks;
                    break;
                case 'Normal':
                    price = 1;
                    result = price * numDrinks;
                    break;
                case 'Extra':
                    price = 1.2;
                    result = price * numDrinks;
                    break;
            }
            break;
        case 'Cappuccino':
            switch (sugar) {
                case 'Without':
                    price = 1;
                    result = price * numDrinks;
                    break;
                case 'Normal':
                    price = 1.20;
                    result = price * numDrinks;
                    break;
                case 'Extra':
                    price = 1.60;
                    result = price * numDrinks;
                    break;
            }
            break;
        case 'Tea':
            switch (sugar) {
                case 'Without':
                    price = 0.50;
                    result = price * numDrinks;
                    break;
                case 'Normal':
                    price = 0.60;
                    result = price * numDrinks;
                    break;
                case 'Extra':
                    price = 0.70;
                    result = price * numDrinks;
                    break;
            }
            break;
    }
    if(sugar === 'Without'){
        result = result * 0.65;
    }
    if (drink == "Espresso" && numDrinks >= 5) {
        result = result - result * 0.25;
    }
    if (result > 15) {
        result = result - result * 0.2;
    }
    if (drink == "Espresso" || drink == "Tea" || drink == "Cappuccino") {
        console.log(`You bought ${numDrinks} cups of ${drink} for ${result.toFixed(2)} lv.`);
    }
    else {
        console.log(`error`);
    }
}


coffeMachine(
    [
        "Espresso",
        "Without",
        "10"


    ]
)