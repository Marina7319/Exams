function film(input) {

    let movie = input[0];
    let foodOrder = input[1];
    let tickets = Number(input[2]);

    let sum = 0.0;

    switch (foodOrder) {
        case 'Drink':
            switch (movie) {
                case 'John Wick':
                    sum = 12 * tickets;
                    break;
                case 'Star Wars':
                    sum = 18 * tickets;
                    break;
                case 'Jumanji':
                    sum = 9 * tickets;
                    break;
            }
            break;
        case 'Popcorn':
            switch (movie) {
                case 'John Wick':
                    sum = 15 * tickets;
                    break;
                case 'Star Wars':
                    sum = 25 * tickets;
                    break;
                case 'Jumanji':
                    sum = 11 * tickets;
                    break;
            }
            break;
        case 'Menu':
            switch (movie) {
                case 'John Wick':
                    sum = 19 * tickets;
                    break;
                case 'Star Wars':
                    sum = 30 * tickets;
                    break;
                case 'Jumanji':
                    sum = 14 * tickets;
                    break;
            }
            break;
    }
    if (movie === 'Star Wars' && tickets >= 4) {
        sum = sum * 0.70;
    }
    if (movie === 'Jumanji' && tickets == 2) {
        sum = sum * 0.85;
    }
    console.log(`Your bill is ${sum.toFixed(2)} leva.`);
}

film(

    [
        "Jumanji",
        "Menu",
        "2"

    ]
)
