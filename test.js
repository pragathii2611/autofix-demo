// test.js
console.log("Running math test...");

// DELIBERATE ERROR: 1 + 1 is NOT 3
if (1 + 1 === 3) {
    console.log("Math works!");
} else {
    console.error("Math is broken!");
    process.exit(1); // Exit code 1 triggers failure
}
