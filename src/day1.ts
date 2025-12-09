export function solvePart1(rows: string[]): string {
    let dial = 50;
    let count = 0;

    for (let i = 0; i < rows.length; i++) {
        let clicks = rows[i]?.substring(1);

        if (rows[i]?.startsWith("L")) {
            dial = (dial - Number(clicks)) % 100;
        } else {
            dial = (dial + Number(clicks)) % 100;
        }

        if (dial === 0) {
            count++;
        }
    }

    return `${count}`;
}

export function solvePart2(rows: string[]): string {
    let dial = 50;
    let count = 0;

    for (let i = 0; i < rows.length; i++) {
        let clicks = Number(rows[i]?.substring(1));

        if (rows[i]?.startsWith("L")) {
            // let a = clicks - dial; // 250 - 50 = 200
            // if (a > 0) {
            //     count++;
            // }

            // let completeTurns = Math.floor(a / 100);
            // count += completeTurns;

            // dial = (dial - clicks) % 100;

            while (clicks >= 100) {
                clicks -= 100;
                count++;
            }

            const newDial = (dial - clicks) % 100;
            if (newDial > dial) {
                count++;
            }

            dial = newDial;
        } else {
            // let a = clicks - (100 - dial);
            // if (a > 0) {
            //     count++;
            // }

            // let completeTurns = Math.floor(a / 100);
            // count += completeTurns;

            // dial = (dial + clicks) % 100;
            while (clicks >= 100) {
                clicks -= 100;
                count++;
            }

            const newDial = (dial + clicks) % 100;
            if (newDial < dial) {
                count++;
            }

            dial = newDial;
        }

        if (dial === 0) {
            count++;
        }
    }

    return `${count}`;
}