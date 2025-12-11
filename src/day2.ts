export function solvePart1(rows: string[]): string {
    let intervals = rows[0]?.split(",");

    if (!intervals) {
        return "";
    }

    let sum = 0;

    intervals.forEach(interval => {
        let startToEnd = interval.split("-");
        let start = Number(startToEnd[0]);
        let end = Number(startToEnd[1]);

        for (let i = start; i <= end; i++) {
            let value = `${i}`;
            let leftHalf = value.substring(0, value.length / 2);
            let rightHalf = value.substring(value.length / 2);

            if (leftHalf === rightHalf) {
                sum += i;
            }
        }
    });

    return `${sum}`;
}

export function solvePart2(rows: string[]): string {
    let intervals = rows[0]?.split(",");

    if (!intervals) {
        return "";
    }

    let sum = 0;

    intervals.forEach(interval => {
        let startToEnd = interval.split("-");
        let start = Number(startToEnd[0]);
        let end = Number(startToEnd[1]);

        for (let i = start; i <= end; i++) {
            let value = `${i}`;

            for (let j = 1; j <= value.length / 2; j++) {
                let pattern = value.substring(0, j);
                let regex = new RegExp(`^(${pattern}){2,}$`);

                if (regex.test(value)) {
                    sum += i;
                    break;
                }
            }
        }
    });

    return `${sum}`;
}