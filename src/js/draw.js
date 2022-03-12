import { ctx } from "./cnv";
import { map } from "./map/main";
import { fun_dom } from "./menu/fun_dom";
import { dom_id } from "./menu/get_dom_id";
import { lends } from "./map/generate_world";
import { loading } from "./menu/loading";

fun_dom.check()

let fps;



function draw() {
    if(localStorage.getItem("player")) {
      dom_id.continue_game.style.display = 'block'
    }
    ctx.beginPath()
    ctx.fillStyle = 'blue'
    ctx.fillRect(0, 0, 500, 500);
    dom_id.fps.innerHTML = 'fps: ' +fps
  
    if(loading.game) {
      
      map.draw()
      map.check()
      map.position.check()
    } else {
      lends.check()
      loading.draw()
    }
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