function oscars(input) {
    let movie = input[0];
    let cinema = input[1];
    let tickets = Number(input[2]);

    let sum = 0.0;

    switch (movie) {
        case 'A Star Is Born':
            switch (cinema) {
                case 'normal':
                    sum = 7.50 * tickets;
                    break;
                case 'luxury':
                    sum = 10.50 * tickets;
                    break;
                case 'ultra luxury':
                    sum = 13.50 * tickets;
                    break;
            }
            break;
        case 'Bohemian Rhapsody':
            switch (cinema) {
                case 'normal':
                    sum = 7.35 * tickets;
                    break;
                case 'luxury':
                    sum = 9.45 * tickets;
                    break;
                case 'ultra luxury':
                    sum = 12.75 * tickets;
                    break;
            }
            break;
        case 'Green Book':
            switch (cinema) {
                case 'normal':
                    sum = 8.15 * tickets;
                    break;
                case 'luxury':
                    sum = 10.25 * tickets;
                    break;
                case 'ultra luxury':
                    sum = 13.25 * tickets;
                    break;
            }
            break;
        case 'The Favourite':
            switch (cinema) {
                case 'normal':
                    sum = 8.75 * tickets;
                    break;
                case 'luxury':
                    sum = 11.55 * tickets;
                    break;
                case 'ultra luxury':
                    sum = 13.95 * tickets;
                    break;
            }
            break;
    }
    console.log(`${movie} -> ${sum.toFixed(2)} lv.`);
}

oscars(

    [

        "The Favourite",

        "ultra luxury",
        "34"


    ]
)