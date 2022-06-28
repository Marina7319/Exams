
function poolDay(input) {
    let numOfPeople = Number(input[0]);
    let taxEnter = Number(input[1]);
    let priceForShezlong = Number(input[2])
    let priceForUnbrela = Number(input[3]);

    let sum = numOfPeople * taxEnter + Math.ceil(numOfPeople / 2) * priceForUnbrela + Math.ceil(numOfPeople * 0.75) * priceForShezlong;
    console.log(`${sum.toFixed(2)} lv.`);
}
poolDay([
    "100",
    "8",
    "6",
    "4"



])
