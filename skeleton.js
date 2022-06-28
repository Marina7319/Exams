function skeleton(input) {
    let minutesControlla = Number(input[0]);
    let secondsControlla = Number(input[1]);
    let lengthInMeters = Number(input[2]);
    let secondsForHundredMeters = Number(input[3]);

    let controllaTime = minutesControlla * 60 + secondsControlla;

    let time = (lengthInMeters / 100) * secondsForHundredMeters;

    let timeSlowwing = (lengthInMeters / 120) * 2.5;
    let sumTime = time - timeSlowwing;
    if (controllaTime < sumTime) {
        console.log(`No, Marin failed! He was ${(sumTime - controllaTime).toFixed(3)} second slower.`);
    } else {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${sumTime.toFixed(3)}.`);
    }
}
skeleton(["1",
    "20",
    "1546",
    "12"])


