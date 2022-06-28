function highJump(input) {
    let index = 0;
    let hight = Number(input[index]);
    index++;
    let i = hight - 30;
    let count = 0;
    let jumpCount = 0;
    let jumps = 0;
    while (i <= hight) {
        let jump = Number(input[index]);
        index++;
        jumpCount++;
        if (i < jump) {
            count = 0;
            i += 5;
        } else {
            i += 0;
            count++;
            jumps = i;
            if (count === 3) {
                break;
            }
        }
    }
    if (i <= hight) {
        console.log(`Tihomir failed at ${jumps}cm after ${jumpCount} jumps.`);
    }
    if (i > hight) {
        console.log(`Tihomir succeeded, he jumped over ${hight}cm after ${jumpCount} jumps.`);
    }
}
highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"])









