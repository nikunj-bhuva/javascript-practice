// let promise = new Promise((resolve, reject) => {
//     console.log("initial state");
//     resolve("resolve");
//     reject("error");
// })
// console.log(promise);

async function calculateSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

async function main() {
    const promises = [];
    for (let i = 1; i <= 10; i++) {
        const start = (i - 1) * 100000000 + 1;
        const end = i * 100000000;
        promises.push(calculateSum(start, end));
    }

    try {
        const results = await Promise.all(promises);
        const totalSum = results.reduce((acc, curr) => acc + curr, 0);
        console.log(totalSum);
    } catch (error) {
        console.error("Error calculating sum:", error);
    }
}

main();
