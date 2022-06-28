function movieProfit(input) {
    let movieName = input[0];
    let countDays = Number(input[1]);
    let countTickets = Number(input[2]);
    let priceForTicket = Number(input[3]);
    let percentForCinemaProfit = Number(input[4]);

    let priceForTicketsForDay = countTickets * priceForTicket;
    let profit = priceForTicketsForDay * countDays;
    let profitForStudio = profit * (percentForCinemaProfit / 100);
    console.log(`The profit from the movie ${movieName} is ${(profit - profitForStudio).toFixed(2)} lv.`);
}
movieProfit(["The Jungle",
    "22",
    "20500",
    "9.37",
    "30"])


