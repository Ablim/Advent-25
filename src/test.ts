import dotenv from "dotenv";
import { solvePart1, solvePart2 } from "./day3.js";
import { readFile } from "fs/promises";
dotenv.config();

const filename = `test_input/${process.env.DAY}.txt`;
const input = await readFile(filename, "utf-8");
const rows = input.split(/\r?\n/);

console.log("********");
console.log("* Test *");
console.log("********");

console.log(`\nDay ${process.env.DAY}, part 1`);
console.log(`${solvePart1(rows)}`);

console.log(`\nDay ${process.env.DAY}, part 2`);
console.log(`${solvePart2(rows)}`);