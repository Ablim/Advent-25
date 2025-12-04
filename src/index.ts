import dotenv from "dotenv";
dotenv.config();

const rows = await (async () => {
    const response = await fetch(`https://adventofcode.com/2025/day/${process.env.DAY}/input`, {
        method: "GET",
        headers: {
            "Cookie": `session=${process.env.SESSION_COOKIE}`
        }
    });
    const content = await response.text();
    return content.split(/\r?\n/);
})();

console.log("***********************");
console.log("* Advent of Code 2025 *");
console.log("***********************");

console.log(`\nDay ${process.env.DAY}, part 1`);
// solve day 1 part 1