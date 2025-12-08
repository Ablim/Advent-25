import dotenv from "dotenv";
import { solvePart1, solvePart2 } from "./day1.js";
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
console.log(`${solvePart1(rows)}`);

console.log(`\nDay ${process.env.DAY}, part 2`);
console.log(`${solvePart2(rows)}`);