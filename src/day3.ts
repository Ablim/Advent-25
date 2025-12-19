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
        let lookup = new Map<number, number>();
        let voltage = loop(bank, 0, 0, lookup);

        // console.log(bank + ": " + voltage);
        // console.log(lookup);
        sum += voltage;
    });

    return `${sum}`;
}

function loop(bank: number[], index: number, flipped: number, lookup: Map<number, number>): number {
    let voltage = lookup.get(print(bank));
    if (voltage) {
        return voltage;
    }

    if (index === bank.length || flipped === 12) {
        if (flipped === 12) {
            for (let i = index; i < bank.length; i++) {
                bank[i] = 0;
            }
        }

        return batteryVoltage(bank);
    }

    let copySkip = [...bank];
    copySkip[index] = 0;
    let copyKeep = [...bank];

    let left = loop(copySkip, index + 1, flipped, lookup);
    let right = loop(copyKeep, index + 1, flipped + 1, lookup);
    let maxVoltage = Math.max(left, right);
    lookup.set(print(bank), maxVoltage);
    return maxVoltage;
}

function batteryVoltage(bank: Number[]): number {
    let voltage = "";

    bank.filter(b => b != 0)
        .forEach(element => {
            voltage += `${element}`;
        });

    return Number(voltage);
}

function print(bank: Number[]): number {
    let result = "";

    bank.forEach(element => {
        result += `${element}`;
    });

    return Number(result);
}