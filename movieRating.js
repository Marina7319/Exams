function movieRating(input)
{let index = 0;
let moviesToWatch = Number(input[index]);
index++;
let i = 0;
let sum = 0;
let maxNum = Number.MIN_SAFE_INTEGER;
let minNum = Number.MAX_SAFE_INTEGER;
let minRating = 0;
let maxRating = 0;
let movieLowestRating = "";
let movierWithHighestRating  = ""; 

while(i < moviesToWatch)
{
    i++;
    let movie = input[index];
    index++;
    let rating = Number(input[index]);
    index++;
sum += rating;
minRating = rating;
maxRating = rating;
if(minRating < minNum)
{
    minNum = minRating;
    movieLowestRating = movie;
}
if(maxRating > maxNum)
{
    maxNum = maxRating;
    movierWithHighestRating = movie;

}
}
console.log(`${movierWithHighestRating} is with highest rating: ${maxNum.toFixed(1)}`);
console.log(`${movieLowestRating} is with lowest rating: ${minNum.toFixed(1)}`);
console.log(`Average rating: ${(sum / moviesToWatch).toFixed(1)}`);
}
movieRating(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])

