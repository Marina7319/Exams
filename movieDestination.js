function movieDestination(input) {
    let moneyForMovie = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);

    let movieTime = 0.0;

    switch (season) {
        case 'Winter':
            switch (destination) {
                case 'Dubai':
                    movieTime = (45000 * days) * 0.70;
                    break;
                case 'Sofia':
                    movieTime = (17000 * days) * 1.25;
                    break;
                case 'London':
                    movieTime = 24000 * days;
                    break;
            }
            break;
        case 'Summer':
            switch (destination) {
                case 'Dubai':
                    movieTime = (40000 * days) * 0.70;
                    break;
                case 'Sofia':
                    movieTime = (12500 * days) * 1.25;
                    break;
                case 'London':
                    movieTime = 20250 * days;
                    break;
            }
            break;
    }
    if (moneyForMovie >= movieTime) {
        let diff = moneyForMovie - movieTime;
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        let diff = movieTime - moneyForMovie;
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}

movieDestination(
    [
        "200000",
        "London",
        "Summer",
        "7"
    ]
)