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
    rows = rows.filter(x => x && x.length > 0);

    let parsedRows: string[][] = [];
    let operations: string[] = rows[rows.length - 1]!
        .split(" ")
        .filter(x => x && x.length > 0);

    for (let i = 0; i < rows.length - 1; i++) {
        parsedRows.push([...(rows[i]!)]);
    }

    let sum = 0n;
    let index = parsedRows[0]!.length - 1;

    for (let i = operations.length - 1; i >= 0; i--) {
        let op = operations[i]!;
        let operands: bigint[] = [];

        while (index >= 0) {
            let values = "";

            parsedRows.forEach(row => {
                if (Number(row[index]!) > 0) {
                    values += row[index];
                }
            });

            index--;

            if (values.length > 0) {
                operands.push(BigInt(values));
            } else {
                break;
            }
        }

        sum += applyOperation(op, operands);
    }

    return `${sum}`;
}

function applyOperation(operation: string, operands: bigint[]): bigint {
    let result = 0n;

    operands.forEach(o => {
        if (operation === "+") {
            result += o;
        } else if (operation === "*") {
            if (result === 0n) {
                result = 1n;
            }

            result *= o;
        }
    });

    return result;
}