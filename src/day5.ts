export function solvePart1(rows: string[]): string {
    let intervals: Interval[] = rows
        .filter(row => row.includes("-"))
        .map(i => {
            let parts = i.split("-");
            return {
                start: BigInt(parts[0]!),
                end: BigInt(parts[1]!)
            };
        });
    let ingredients = rows
        .filter(row => !row.includes("-") && row.length > 0)
        .map(i => BigInt(i));

    let sum = ingredients.filter(i => intervals.some(interval => interval.start <= i && i <= interval.end))
        .length;

    return `${sum}`;
}

export function solvePart2(rows: string[]): string {
    let sum = 0;

    return `${sum}`;
}

interface Interval {
    start: bigint,
    end: bigint
}