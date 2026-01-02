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
        let worm = bank.slice(0, 12);
        let maxWorm = [...worm];
        let candidates = bank.slice(12, bank.length);

        while (candidates.length > 0) {
            let maxValue = print(worm);
            let next = candidates[0]!;
            let skip = 0;

            for (let i = worm.length - 1; i >= 0; i--) {
                skip = worm[i]!;
                worm[i] = next;

                if (print(worm) > maxValue) {
                    maxWorm = [...worm];
                    maxValue = print(maxWorm);
                }

                next = skip;
            }

            worm = [...maxWorm];
            candidates = candidates.slice(1, candidates.length);
        }

        sum += print(maxWorm);
    });

    return `${sum}`;
}

function print(bank: number[]): number {
    let result = "";

    bank.forEach(element => {
        result += `${element}`;
    });

    return Number(result);
}