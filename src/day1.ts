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

        count += Math.floor(clicks / 100);

        if (rows[i]?.startsWith("L")) {
            const newDial = mod(dial - clicks, 100);
            if (newDial === 0 || dial > 0 && newDial > dial) {
                count++;
            }

            dial = newDial;
        } else {
            const newDial = mod(dial + clicks, 100);
            if (newDial === 0 || dial > 0 && newDial < dial) {
                count++;
            }

            dial = newDial;
        }
    }

    return `${count}`;
}

function mod(x: number, n: number) {
    return ((x % n) + n) % n;
}