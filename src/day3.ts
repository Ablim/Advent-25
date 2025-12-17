export function solvePart1(rows: string[]): string {
    let sum = 0;

    rows.forEach(bank => {
        let left = Number(bank.charAt(0));
        let right = Number(bank.charAt(1));

        for (let i = 2; i < bank.length; i++) {
            let next = Number(bank.charAt(i));
            let oldLeft = left;
            let oldRight = right;

            if (Number(`${oldLeft}${oldRight}`) < Number(`${oldLeft}${next}`)) {
                left = oldLeft;
                right = next;
            }

            if (Number(`${oldLeft}${next}`) < Number(`${oldRight}${next}`)) {
                left = oldRight;
                right = next;
            }
        }

        sum += Number(`${left}${right}`);
    });

    return `${sum}`;
}

export function solvePart2(rows: string[]): string {
    let sum = 0;

    rows.forEach(row => {
        let bank = [...row].map(b => Number(b));
        let voltage = loop(bank, 0, 0);
        sum += voltage;
    });

    return `${sum}`;
}

function loop(bank: number[], index: number, flipped: number): number {
    if (flipped === 12) {
        for (let i = index; i < bank.length; i++) {
            bank[i] = 0;
        }

        return batteryVoltage(bank);
    }

    if (index === bank.length) {
        return batteryVoltage(bank);
    }

    let copySkip = [...bank];
    let copyKeep = [...bank];
    copySkip[index] = 0;

    return Math.max(loop(copySkip, index + 1, flipped), loop(copyKeep, index + 1, flipped + 1));
}

function batteryVoltage(bank: Number[]): number {
    let voltage = "";

    bank.filter(b => b != 0)
        .forEach(element => {
            voltage += `${element}`;
        });

    return Number(voltage);
}