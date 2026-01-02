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
    let sum = 0n;

    let intervals: Interval[] = rows
        .filter(row => row.includes("-"))
        .map(i => {
            let parts = i.split("-");
            return {
                start: BigInt(parts[0]!),
                end: BigInt(parts[1]!)
            };
        })
        .sort((a, b) => {
            let diff = a.start - b.start;
            return diff < 0 ? -1 : (diff > 0 ? 1 : 0);
        });
    intervals = merge(intervals);

    intervals.forEach(interval => {
        sum += interval.end - interval.start + 1n;
    });

    return `${sum}`;
}

function merge(intervals: Interval[]) {
    let result: Interval[] = [];
    let candidate = intervals[0]!;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i]!.start <= candidate.end) {
            if (intervals[i]!.end > candidate.end) {
                candidate.end = intervals[i]!.end;
            }
        } else {
            result.push(candidate);
            candidate = intervals[i]!;
        }
    }

    result.push(candidate);
    return result;
}

interface Interval {
    start: bigint,
    end: bigint
}