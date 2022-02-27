import { canvas, ctx } from "../cnv";
import { dom_id } from "../menu/get_dom_id";

export let map = {
    cellWidth: 50,
    cellHeight: 50,
    width: [50, 50], 
    height: [50, 50],
    x: -1000,
    y: -1000,
    array: [],
    position: {
        up: false,
        down: false,
        right: false,
        left: false,
        check() {
            if (this.up) {
                for (let i = 0; i < map.array.length; i++) {
                    const cell = map.array[i];
                    cell.y += 10;
                }
            }

            if (this.down) {
                for (let i = 0; i < map.array.length; i++) {
                    const cell = map.array[i];
                    cell.y -= 10;
                }
            }

            if (this.left) {
                for (let i = 0; i < map.array.length; i++) {
                    const cell = map.array[i];
                    cell.x += 10;
                }
            }

            if (this.right) {
                for (let i = 0; i < map.array.length; i++) {
                    const cell = map.array[i];
                    cell.x -= 10;
                }
            }
        }
    },
    create() {
        map.x = -1000;
        map.y = -1000;
        map.width[1] = map.width[0];
        Cell.create()
    }, 

    check() {
        canvas.onmousemove = function (e) {
            var x = e.pageX - e.target.offsetLeft,
                y = e.pageY - e.target.offsetTop;
            for (let i = 0; i < map.array.length; i++) {
                const cell = map.array[i]
                if (x >= cell.x && x <= cell.x2 && y >= cell.y && y <= cell.y2) {
                    dom_id.position.innerHTML =  'x: ' +x +' y: ' +y +' index cell: ' +cell.index
                    cell.colar = '#90EE90'
                } else {
                    cell.colar = 'white'
                }
            }
            
        }
    },
    draw() {
        for (let i = 0; i < map.array.length; i++) {
            map.array[i].draw()
        }
    }
}

export class Cell {
    constructor(x, y, index) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.colar = 'white'
    }

    static create() {
        for (let i = 0; i < map.width[0] * map.height[0]; i++) {
            map.array[i] = new Cell(map.x, map.y, i)
            map.x += map.cellWidth;

            if (i == map.width[1]) {
                map.x = -1000;
                map.y += map.cellHeight;
                map.width[1] += map.width[0];
            }
        }
    }

    draw() {
        this.x2 = this.x + map.cellWidth;
        this.y2 = this.y + map.cellHeight;
        ctx.beginPath();
        ctx.fillStyle = this.colar;

        if(this.index == 1225 || this.index == 1275 || this.index == 1226 || this.index == 1276) {
            ctx.fillStyle = 'red';
        }

        ctx.fillRect(this.x, this.y, map.cellWidth, map.cellHeight)
        ctx.strokeRect(this.x, this.y, map.cellWidth, map.cellHeight)
    }
}
