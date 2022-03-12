import { canvas, ctx } from "../cnv";
import { dom_id } from "../menu/get_dom_id";
import { settings } from "../settings"

export let map = {
    cellWidth: 50,
    cellHeight: 50,
    width: [settings.cell.width, settings.cell.width], 
    height: [settings.cell.height, settings.cell.height],
    x: [settings.cell.x, settings.cell.x],
    y: [settings.cell.y, settings.cell.y],
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
        map.x[0] = map.x[1];
        map.y[0] = map.y[1];
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
                    dom_id.position.innerHTML =  'x: ' +x +' y: ' +y +' index cell: ' +cell.index +' who cell: ' +cell.who
                    cell.colar = '#90EE90'
                } else {
                    cell.colar = 'white'
                }
            }
            
        }
    },
    draw() {
        for (let i = 0; i < map.array.length; i++) {
            if(map.array[i].x >= -200 && map.array[i].x <= 700 && map.array[i].y >= -200 && map.array[i].y <= 700) map.array[i].draw()  
        }
    }
}

export class Cell {
    constructor(x, y, index) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.colar = 'white';
        this.who = 'cell'
    }

    static create() {
        for (let i = 0; i < map.width[0] * map.height[0] + 1; i++) {
            if(!i == 0) {
                map.array[i] = new Cell(map.x[0], map.y[0], i)
                map.x[0] += map.cellWidth;

                if (i == map.width[1]) {
                    map.x[0] = map.x[1];
                    map.y[0] += map.cellHeight;
                    map.width[1] += map.width[0];
                }
            } else {
                map.array[i] = new Cell(10000000000000000000, 10000000000000000000, i)
            }
            
        }
    }

    draw() {
        if (this.who == 'lend') {
            this.colar = 'green'
        }
        this.x2 = this.x + map.cellWidth;
        this.y2 = this.y + map.cellHeight;
        ctx.beginPath();
        ctx.fillStyle = this.colar;

        ctx.fillRect(this.x, this.y, map.cellWidth, map.cellHeight)
        ctx.strokeRect(this.x, this.y, map.cellWidth, map.cellHeight)
    }
}
