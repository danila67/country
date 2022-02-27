import { map } from "../map/main";
import { localStorageReturn } from "../map/save";
import { dom_id } from "./get_dom_id";

const raw = localStorage.getItem("player");
const person = JSON.parse(raw);

export let name_country;
export const fun_dom = {
    get_id: {
      start_menu: document.getElementById("button_new_game"),
      create: document.getElementById("button_create_country"),
      about_developer_menu: document.getElementById("button_about_developer"),
      about_developer_back: document.getElementById("button_back_about_developer"),
      start_back: document.getElementById("button_back_start"),
      cnv_div_back: document.getElementById("button_back_cnv_div"),
      continue_game: document.getElementById("button_continue_game"),
      save_game_yes: document.getElementById('button_save_game_yes'),
      save_game_no: document.getElementById('button_save_game_no'),
    },
    check() {
      this.get_id.continue_game.addEventListener('click', (event) => {
        dom_id.menu.style.display = 'none';
        dom_id.cnv.style.display = 'block';

        if(localStorage.getItem("player")) {
          map.create()
          
          for(let i = 0; i < map.width[0] * map.height[0]; i++) {
          	map.array[i].x = person.map[i].x;
          	map.array[i].y = person.map[i].y;
          }

          name_country = person.name_country;
          dom_id.name_country.innerHTML = name_country;
        } 
      });

      this.get_id.start_menu.addEventListener('click', (event) => {
        dom_id.start_menu.style.display = 'block'
      });

      this.get_id.save_game_yes.addEventListener('click', (event) => {
        dom_id.save_game_menu.style.display = 'none'
        dom_id.menu.style.display = 'block';
        dom_id.cnv.style.display = 'none';
        localStorageReturn()
      });

      this.get_id.save_game_no.addEventListener('click', (event) => {
        dom_id.save_game_menu.style.display = 'none'
      });

      this.get_id.about_developer_back.addEventListener('click', (event) => {
        dom_id.about_developer_menu.style.display = 'none'
      });

      this.get_id.cnv_div_back.addEventListener('click', (event) => {
        dom_id.save_game_menu.style.display = 'block';
      });

      this.get_id.start_back.addEventListener('click', (event) => {
        dom_id.start_menu.style.display = 'none'
      });

      this.get_id.about_developer_menu.addEventListener('click', (event) => {
        dom_id.about_developer_menu.style.display = 'block'
      });

      this.get_id.create.addEventListener('click', (event) => {
        name_country = document.getElementById('name_country_input').value;
        dom_id.start_menu.style.display = 'none';
        dom_id.menu.style.display = 'none';
        dom_id.cnv.style.display = 'block';
        dom_id.name_country.innerHTML = name_country;
        map.create();
        localStorageReturn()
      });
    }
}