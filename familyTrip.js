function familyTrip(input) {
    let sumForFamilyTrip = Number(input[0]);
    let numNights = Number(input[1]);
    let priceForOneNight = Number(input[2]);
    let percentForPayments = Number(input[3]);
    if (numNights > 7) {
        priceForOneNight = priceForOneNight - priceForOneNight * 0.05;
    }
    let sumForTrip = numNights * priceForOneNight + (percentForPayments / 100) * sumForFamilyTrip;
    if (sumForTrip <= sumForFamilyTrip) {
        console.log(`Ivanovi will be left with ${(sumForFamilyTrip - sumForTrip).toFixed(2)} leva after vacation.`);
    }
    else {
        console.log(`${(sumForTrip - sumForFamilyTrip).toFixed(2)} leva needed.`);
    }
}

familyTrip([
    "800.50",
    "8",
    "100",
    "2"
])