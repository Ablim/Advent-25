export function solvePart1(rows: string[]): string {
    rows = rows.filter(x => x && x.length > 0);

    let parsedRows: bigint[][] = [];
    let operations: string[] = rows[rows.length - 1]!
        .split(" ")
        .filter(x => x && x.length > 0);

    for (let i = 0; i < rows.length - 1; i++) {
        let row = rows[i]!.split(" ")
            .filter(x => x && x.length > 0)
            .map(n => BigInt(n));
        parsedRows.push(row);
    }

    let sum = 0n;

    for (let i = 0; i < operations.length; i++) {
        let op = operations[i];
        let result = 0n;

        parsedRows.forEach(row => {
            if (op === "+") {
                result += row[i]!;
            } else if (op === "*") {
                if (result === 0n) {
                    result = 1n;
                }

                result *= row[i]!;
            }
        });

        sum += result;
    }

    return `${sum}`;
}

export function solvePart2(rows: string[]): string {
    let sum = 0n;

    return `${sum}`;
}