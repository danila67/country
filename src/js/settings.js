const wh = 100;
const z = Math.ceil((((wh * wh) / 100) / (wh / 10)) / 2);
const xy = -((((wh * wh) / 100) / (wh / 10)) - z) * 500;

export const settings = {
    lend: {
        quantity: 0,
        x: 250,
        y: 250
    },
    cell: {
        width: wh, 
        height: wh,
        x: xy,
        y: xy,
    }
}
