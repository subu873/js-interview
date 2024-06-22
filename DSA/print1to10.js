// Print 1 to 10 with 1 second delay
for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
        console.log("i value", i)
    }, i * 1000)
}