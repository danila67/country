import { dom_id } from "./get_dom_id";

export const fun_dom = {
    get_id: {
      start: document.getElementById("start"),
    },
    check() {
      this.get_id.start.addEventListener('click', (event) => {
        dom_id.start_menu.style.display = 'block'
      });
    }
}