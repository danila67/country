import { dom_id } from "./get_dom_id";

export const fun_dom = {
    get_id: {
      start_menu: document.getElementById("button_new_game"),
      create: document.getElementById("button_create_country"),
      about_developer_menu: document.getElementById("button_about_developer"),
      about_developer_back: document.getElementById("button_back_about_developer"),
      start_back: document.getElementById("button_back_start"),
      cnv_div: document.getElementById("button_back_cnv_div"),
    },
    check() {
      this.get_id.start_menu.addEventListener('click', (event) => {
        dom_id.start_menu.style.display = 'block'
      });

      this.get_id.about_developer_back.addEventListener('click', (event) => {
        dom_id.about_developer_menu.style.display = 'none'
      });

      this.get_id.cnv_div.addEventListener('click', (event) => {
        dom_id.cnv.style.display = 'none'
        dom_id.menu.style.display = 'block';
      });

      this.get_id.start_back.addEventListener('click', (event) => {
        dom_id.start_menu.style.display = 'none'
      });

      this.get_id.about_developer_menu.addEventListener('click', (event) => {
        dom_id.about_developer_menu.style.display = 'block'
      });

      this.get_id.create.addEventListener('click', (event) => {
        const name_country = document.getElementById('name_country_input').value;
        dom_id.start_menu.style.display = 'none';
        dom_id.menu.style.display = 'none';
        dom_id.cnv.style.display = 'block'
        dom_id.name_country.innerHTML = name_country;
        console.log(name_country)
      });
    }
}