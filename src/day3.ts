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

    return `${sum}`;
}