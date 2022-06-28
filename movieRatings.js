function movieRating(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let nameMovie = "";
    let bestMovie = "";
    let lowestMovie = "";

    for (let i = 1; i <= n; i++) {
        nameMovie = input[index];
        index++;
        let rating = Number(input[index]);
        index++;
        sum += rating;
        if (rating < min) {
            min = rating;
            lowestMovie = nameMovie;
        }
        if (rating > max) {
            max = rating;
            bestMovie = nameMovie;
        }
    }
    console.log(`${bestMovie} is with highest rating: ${max.toFixed(1)}`);
    console.log(`${lowestMovie} is with lowest rating: ${min.toFixed(1)}`);
    console.log(`Average rating: ${(sum / n).toFixed(1)}`);
}
movieRating(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"])
