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
    let map = rows.map(row => [...row]);
    let width = map[0]!.length;
    let currentRow = 1;

    while (currentRow < map.length) {
        for (let i = 0; i < width; i++) {
            if (map[currentRow - 1]?.[i] === "S") {
                if (map[currentRow]?.[i] === ".") {
                    map[currentRow]![i] = "1";
                } else if (map[currentRow]?.[i] === "^") {
                    if (map[currentRow]?.[i - 1]) {
                        map[currentRow]![i - 1] = "1";
                    }

                    if (map[currentRow]?.[i + 1]) {
                        map[currentRow]![i + 1] = "1";
                    }
                }
            } else if (Number(map[currentRow - 1]?.[i]) > 0) {
                let timelines = Number(map[currentRow - 1]![i]);

                if (map[currentRow]?.[i] === ".") {
                    map[currentRow]![i] = `${timelines}`;
                } else if (map[currentRow]?.[i] === "^") {
                    if (map[currentRow]?.[i - 1]) {
                        let left = map[currentRow]![i - 1]!;

                        if (left === ".") {
                            map[currentRow]![i - 1] = `${timelines}`;
                        } else if (Number(left) > 0) {
                            map[currentRow]![i - 1] = `${Number(left) + timelines}`;
                        }
                    }

                    if (map[currentRow]?.[i + 1]) {
                        let right = map[currentRow]![i + 1]!;

                        if (right === ".") {
                            map[currentRow]![i + 1] = `${timelines}`;
                        } else if (Number(right) > 0) {
                            map[currentRow]![i + 1] = `${Number(right) + timelines}`;
                        }
                    }
                } else if (Number(map[currentRow]?.[i]) > 0) {
                    let mid = Number(map[currentRow]?.[i]);
                    map[currentRow]![i] = `${mid + timelines}`;
                }
            }
        }

        currentRow++;
    }

    let sum = 0n;

    map[map.length - 1]?.forEach(cell => {
        if (Number(cell) > 0) {
            sum += BigInt(cell);
        }
    });

    return `${sum}`;
}