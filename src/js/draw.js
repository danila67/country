import { ctx } from "./cnv";
import { Cell, map } from "./map/main";
import { fun_dom } from "./menu/fun_dom";
import { dom_id } from "./menu/get_dom_id";
import { localStorageReturn } from './map/save'

fun_dom.check()

let fps;

if(localStorage.getItem("player")) {
  dom_id.continue_game.style.display = 'block'
}

function draw() {
    dom_id.fps.innerHTML = 'fps: ' +fps
    ctx.clearRect(0, 0, 500, 500);
    map.draw()
    map.check()
    map.position.check()
}
  
  const times = [];
  
  
  function refreshLoop() {
    draw()
    window.requestAnimationFrame(() => {
      const now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;
      
      refreshLoop();
    });
  }
  
  refreshLoop();