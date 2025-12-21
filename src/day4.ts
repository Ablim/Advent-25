export function solvePart1(rows: string[]): string {
    let sum = 0;
    let map = rows.map(row => [...row]);

    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < (map[0]?.length ?? 0); col++) {
            // console.log(map[row]?.[col]);
            if (map[row]?.[col] === "@") {
                if (canAccess(map, row, col)) {
                    sum++;
                }
            }
        }
    }

    return `${sum}`;
}

export function solvePart2(rows: string[]): string {
    let sum = 0;



    return `${sum}`;
}

function canAccess(map: string[][], row: number, col: number): boolean {
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