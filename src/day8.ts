export function solvePart1(rows: string[]): string {
    let boxes: Box[] = rows.map(row => {
        let xyz = row.split(",");
        return {
            x: Number(xyz[0]),
            y: Number(xyz[1]),
            z: Number(xyz[2])
        };
    });

    let pairs: BoxPair[] = [];

    boxes.forEach(b1 => {
        boxes.forEach(b2 => {
            if (b1 !== b2) {
                pairs.push({
                    b1: b1,
                    b2: b2,
                    distance: distanceTo(b1, b2)
                })
            }
        });
    });

    pairs.sort((b1, b2) => b1.distance - b2.distance);

    console.log(pairs[0]);
    let sum = 0;

    return `${sum}`;
}

export function solvePart2(rows: string[]): string {
    let sum = 0;

    return `${sum}`;
}

function distanceTo(b1: Box, b2: Box): number {
    return Math.sqrt(Math.pow(b1.x - b2.x, 2) + Math.pow(b1.y - b2.y, 2) + Math.pow(b1.z - b2.z, 2));
}

interface Box {
    x: number,
    y: number,
    z: number
}

interface BoxPair {
    b1: Box,
    b2: Box,
    distance: number
}