import { ctx } from "../cnv"
import { settings } from "../settings";
import { size } from "./fun_dom";

export const loading = {
	quantity: 0,
	local: true,
    width: 500 / 50,
	game: false,
	draw() {		
		if(this.quantity == 500) this.game = true

		ctx.beginPath();
		ctx.fillStyle = 'black'
        ctx.fillRect(0, 225, this.quantity, 50)
	},
}