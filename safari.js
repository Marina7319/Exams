function safari(input) {
    let moneyForSafari = Number(input[0]);
    let litersFuelForSafari = Number(input[1]);
    let dayFromWeek = input[2];

    let sum = litersFuelForSafari * 2.1 + 100;

    if (dayFromWeek == "Sunday") {
        price = sum - sum * 0.2;
    }
    else if (dayFromWeek == "Saturday") {
        price = sum - sum * 0.1;
    }
    else {
        console.log(`error`);
    }
    if (price > moneyForSafari + 1) {
        console.log(`Not enough money! Money needed: ${(price - moneyForSafari).toFixed(2)} lv.`);
    }
    else {
        console.log(`Safari time! Money left: ${(moneyForSafari - price).toFixed(2)} lv.`);
    }
}

safari([
    "1000",
    "10",
    "Sunday"
])