import dotenv from "dotenv";
import { solvePart1, solvePart2 } from "./day2.js";
import { readFile, writeFile, access, mkdir } from "fs/promises";
dotenv.config();

async function downloadInput(filename: string) {
    const response = await fetch(`https://adventofcode.com/2025/day/${process.env.DAY}/input`, {
        method: "GET",
        headers: {
            "Cookie": `session=${process.env.SESSION_COOKIE}`
        }
    });
    const content = await response.text();

    await mkdir("input", { recursive: true });
    await writeFile(filename, content, "utf-8");
};

async function getInput() {
    const filename = `input/${process.env.DAY}.txt`;

    try {
        await access(filename);
        return await readFile(filename, "utf-8");
    } catch {
        await downloadInput(filename);
        return await readFile(filename, "utf-8");
    }
}

const rows = (await getInput())
    .split(/\r?\n/);

console.log("***********************");
console.log("* Advent of Code 2025 *");
console.log("***********************");

console.log(`\nDay ${process.env.DAY}, part 1`);
console.log(`${solvePart1(rows)}`);

console.log(`\nDay ${process.env.DAY}, part 2`);
console.log(`${solvePart2(rows)}`);