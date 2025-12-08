import dotenv from "dotenv";
import { solvePart1, solvePart2 } from "./day1.js";
dotenv.config();

const rows = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`.split(/\r?\n/);

console.log("********");
console.log("* Test *");
console.log("********");

console.log(`\nDay ${process.env.DAY}, part 1`);
console.log(`${solvePart1(rows)}`);

console.log(`\nDay ${process.env.DAY}, part 2`);
console.log(`${solvePart2(rows)}`);