function seriesCalculator(input) {
    let seriesName = input[0];
    let numberOfSeasons = Number(input[1]);
    let numberOfEpisodes = Number(input[2]);
    let timeForOneEpisode = Number(input[3]);

    let timeForOneEpisodeWithAdvertisments = timeForOneEpisode + timeForOneEpisode * 0.2;

    let sum = Math.floor(timeForOneEpisodeWithAdvertisments * numberOfEpisodes * numberOfSeasons + numberOfSeasons * 10);
    console.log(`Total time needed to watch the ${seriesName} series is ${sum} minutes.`);
}

seriesCalculator(["Riverdale",
    "3",
    "21",
    "45"])


