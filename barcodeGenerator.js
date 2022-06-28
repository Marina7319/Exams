function barcodeGenerator(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let printLine = "";
    let startDigit1 = Math.floor((start / 1000) % 10);
    let startDigit2 = Math.floor((start / 100) % 10);
    let startDigit3 = Math.floor((start / 10) % 10);
    let startDigit4 = Math.floor(start % 10);

    let endDigit1 = Math.floor((end / 1000) % 10);
    let endDigit2 = Math.floor((end / 100) % 10);
    let endDigit3 = Math.floor((end / 10) % 10);
    let endDigit4 = Math.floor(end % 10);


    for (let i = startDigit1; i <= endDigit1; i++) {
        for (let a = startDigit2; a <= endDigit2; a++) {
            for (let j = startDigit3; j <= endDigit3; j++) {
                for (let k = startDigit4; k <= endDigit4; k++) {
                    if(i%2!==0 && a % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0){
                        printLine += `${i}${a}${j}${k} `;
                    }
                }
            }
        }

    }
    console.log(printLine);
}
barcodeGenerator(
    [
        // '2345',
        // '6789'
        '3256',
        '6579'
        
    ]
)