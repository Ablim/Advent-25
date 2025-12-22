export function solvePart1(rows: string[]): string {
    let sum = 0;
    let map = rows.map(row => [...row]);

    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < (map[0]?.length ?? 0); col++) {
            if (canAccess(map, row, col)) {
                sum++;
            }
        }
    }

    return `${sum}`;
}

export function solvePart2(rows: string[]): string {
    let sum = 0;
    let map = rows.map(row => [...row]);
    let rolls: Roll[] = [];

    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < (map[0]?.length ?? 0); col++) {
            if (map[row]?.[col] === "@") {
                rolls.push({
                    row: row,
                    col: col
                });
            }
        }
    }

    let canRemove = true;
    while (canRemove) {
        canRemove = false;
        let newRolls: Roll[] = [];

        rolls.forEach(roll => {
            if (canAccess(map, roll.row, roll.col)) {
                canRemove = true;
                map[roll.row]![roll.col] = "x";
                sum++;
            }
            else {
                newRolls.push(roll);
            }
        });

        rolls = newRolls;
    }

    return `${sum}`;
}

function canAccess(map: string[][], row: number, col: number): boolean {
    if (map[row]?.[col] !== "@") {
        return false;
    }

    let rolls = -1;

    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            let maybeRow = map[i];

            if (maybeRow) {
                let maybeCell = maybeRow[j];

                if (maybeCell === "@") {
                    rolls++;
                }
            }
        }
    }


    return rolls < 4;
}

interface Roll {
    row: number,
    col: number
};