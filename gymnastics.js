function gymnastics(input) {
    let country = input[0];
    let sport = input[1];

    let sum = 0.0;

    switch (sport) {
        case 'ribbon':
            switch (country) {
                case 'Russia':
                    sum = 18.500;
                    break;
                case 'Bulgaria':
                    sum = 19.000;
                    break;
                case 'Italy':
                    sum = 18.700;
                    break;
            }
            break;
        case 'hoop':
            switch (country) {
                case 'Russia':
                    sum = 19.100;
                    break;
                case 'Bulgaria':
                    sum = 19.300;
                    break;
                case 'Italy':
                    sum = 18.8;
                    break;
            }
            break;
        case 'rope':
            switch (country) {
                case 'Russia':
                    sum = 18.600;
                    break;
                case 'Bulgaria':
                    sum = 18.900;
                    break;
                case 'Italy':
                    sum = 18.850;
                    break;
            }
            break;
    }
    console.log(`The team of ${country} get ${sum.toFixed(3)} on ${sport}.`);
    let diff = 20 - sum;
    let points = (diff / 20) * 100;
    console.log(`${points.toFixed(2)}%`);
}
gymnastics(
    [
        "Bulgaria",
        "ribbon"
    ]
)

