import { map } from "./map/main"
import { dom_id } from "./menu/get_dom_id";

document.addEventListener('keydown', function(event) {
    switch(event.code) {
        case 'KeyQ':
            if(dom_id.position.style.display == 'none') {
                dom_id.position.style.display = 'block'
                dom_id.fps.style.display = 'block'
            } else {
                dom_id.position.style.display = 'none'
                dom_id.fps.style.display = 'none'
            }
            
            break;
        case 'KeyW':
            map.position.up = true;
            break;
        case 'KeyS':
            map.position.down = true;
            break;
        case 'KeyA':
            map.position.left = true;
            break;
        case 'KeyD':
            map.position.right = true;
            break;
    }
})

document.addEventListener('keyup', function(event) {
    switch(event.code) {
        case 'KeyW':
            map.position.up = false;
            break;
        case 'KeyS':
            map.position.down = false;
            break;
        case 'KeyA':
            map.position.left = false;
            break;
        case 'KeyD':
            map.position.right = false;
            break;
    }
})