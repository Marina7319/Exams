
function movieDay(input) {
    let timeForPictures = Number(input[0]);
    let numberOfScenes = Number(input[1]);
    let timeForScen = Number(input[2]);

    let timeForScenDecor = 0.15 * timeForPictures;
    let timeForCapturingMovie = timeForScenDecor + numberOfScenes * timeForScen;
    if (timeForPictures > timeForCapturingMovie) {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(timeForPictures - timeForCapturingMovie)} minutes left!`);
    }
    else {
        console.log(`Time is up! To complete the movie you need ${Math.ceil(timeForCapturingMovie - timeForPictures)} minutes.`);
    }
}

movieDay(["60",
    "15",
    "3"])
