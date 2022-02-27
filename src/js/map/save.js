import { name_country } from '../menu/fun_dom';
import { map } from './main';

export function localStorageReturn() {
	let storage = {
		map: [],
        name_country: name_country
	}

	for(let i = 0; i < map.width[0] * map.height[0]; i++) {
		storage.map[i] = map.array[i];
	}
    
	localStorage.setItem("player", JSON.stringify(storage));
}

//localStorage.clear();