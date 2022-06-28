function worldSnookerChampionship(input) {
    let championship = input[0];
    let ticket = input[1];
    let numTicket = Number(input[2]);
    let pictureWithTrophy = input[3];
    let price = 0;

    switch (ticket) {
        case 'Standard':
            switch (championship) {
                case 'Quarter final':
                    price = 55.50 * numTicket;
                    break;
                case 'Semi final':
                    price = 75.88 * numTicket;
                    break;
                case 'Final':
                    price = 110.10 * numTicket;
                    break;
            }
            break;
        case 'Premium':
            switch (championship) {
                case 'Quarter final':
                    price = 105.20 * numTicket;
                    break;
                case 'Semi final':
                    price = 125.22 * numTicket;
                    break;
                case 'Final':
                    price = 160.66 * numTicket;
                    break;
            }
            break;
        case 'VIP':
            switch (championship) {
                case 'Quarter final':
                    price = 118.90 * numTicket;
                    break;
                case 'Semi final':
                    price = 300.40 * numTicket;
                    break;
                case 'Final':
                    price = 400 * numTicket;
                    break;
            }
            break;
    }
    if (price > 4000) {
        price *= 0.75;
    } else if (price > 2500) {
        price *= 0.90;
        if (pictureWithTrophy === 'Y') {
            price += 40 * numTicket;
        }
    } else {
        if (pictureWithTrophy === 'Y') {
            price += 40 * numTicket;
        }
    }
    console.log(price.toFixed(2));
}
worldSnookerChampionship(["Quarter final",
    "Standard",
    "11",
    "N"])
