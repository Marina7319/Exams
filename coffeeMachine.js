
function coffeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let numDrinks = Number(input[2]);

    let price = 0;

    let result = 0.0;

    if (numDrinks <= 0) {
        console.log(`No Drinks`);
    }
    else {
        if (drink == "Espresso") {
            if (sugar == "Without") {
                price = 0.585;
                result = price * numDrinks;
            }
            else if (sugar == "Normal") {
                price = 1;
                result = price * numDrinks;
            }
            else { //if (sugar == "Extra") 
                price = 1.2;
                result = price * numDrinks;
            }
        }
        else if (drink == "Cappuccino") {
            if (sugar == "Without") {
                price = 0.65;
                result = price * numDrinks;
            }
            else if (sugar == "Normal") {
                price = 1.2;
                result = price * numDrinks;
            }
            else { //if (sugar == "Extra") 
                price = 1.6;
                result = price * numDrinks;
            }
        }
        else if (drink == "Tea") {
            if (sugar == "Without") {
                price = 0.325;
                result = price * numDrinks;
            }
            else if (sugar == "Normal") {
                price = 0.6;
                result = price * numDrinks;
            }
            else // if (sugar == "Extra") 
            {
                price = 0.7;
                result = price * numDrinks;
            }
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
}

coffeMachine(
    [
        "Espresso",
        "Normal",
        "10"


    ]
)
