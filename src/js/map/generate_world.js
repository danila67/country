import { loading } from "../menu/loading";
import { settings } from "../settings";
import { map } from "./main";

export const lends = {
    array: [],
    check() {
        for (let i = 0; i < this.array.length; i++) {
            const lend = this.array[i];
            lend.check()
        }
    }
}

export class Lend {
	constructor(index) {
		this.x = settings.lend.x;
		this.y = settings.lend.y;
		this.index = index;
		this.local = true;
		this.random = Math.floor(Math.random() * 4);
	}

	static createWord(quantity) {
		for(let i = 0; i < quantity; i++) {
			lends.array[i] = new Lend(i);
		}
	}

	check() {
		if(!this.local) return;

		switch(this.random) {
			case 0: 
				this.x += map.cellWidth; 
				break;
			case 1: 
				this.x -= map.cellWidth;
				break;
			case 2: 
				this.y += map.cellHeight;
				break;
			case 3: 
				this.y -= map.cellHeight;
				break;
		}
        
		for(let i = 0; i < map.array.length; i++) {
			this.cell = map.array[i];

			if(this.cell.x == this.x && this.cell.y == this.y) {
				if(this.cell.who == 'cell') {
					this.cell.who = 'lend';
					this.local = false;
					loading.quantity += loading.width;
				} else {
					this.random = Math.floor(Math.random() * 4);
				}
			} 

			
		}   
	}
}
