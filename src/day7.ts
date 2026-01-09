export function solvePart1(rows: string[]): string {
    let map = rows.map(row => [...row]);
    let width = map[0]!.length;
    let currentRow = 1;
    let sum = 0;

    while (currentRow < map.length) {
        for (let i = 0; i < width; i++) {
            if (map[currentRow - 1]?.[i] === "S" || map[currentRow - 1]?.[i] === "|") {
                if (map[currentRow]?.[i] === ".") {
                    map[currentRow]![i] = "|";
                } else if (map[currentRow]?.[i] === "^") {
                    sum++;

                    if (map[currentRow]?.[i - 1]) {
                        map[currentRow]![i - 1] = "|";
                    }

                    if (map[currentRow]?.[i + 1]) {
                        map[currentRow]![i + 1] = "|";
                    }
                }
            }
        }

        currentRow++;
    }

    return `${sum}`;
}

export function solvePart2(rows: string[]): string {
    let sum = 0n;

    return `${sum}`;
}