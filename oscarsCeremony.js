
function oscarsCeremony(input) {
    let rentForHall = Number(input[0]);
    if (rentForHall > 0) {
        let priceForOscars = rentForHall - rentForHall * 0.3;
        let priceForKetaring = priceForOscars - priceForOscars * 0.15;
        let priceForSound = 1 / 2 * priceForKetaring;
        let sum = priceForOscars + priceForKetaring + priceForSound + rentForHall;

        console.log(`${sum.toFixed(2)}`);
    }
    else {
        console.log();
    }
}
oscarsCeremony(["-8"])