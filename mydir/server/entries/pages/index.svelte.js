import { c as create_ssr_component } from "../../chunks/index-7e88d1db.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1hkhdvr{flex-grow:3;display:flex;justify-content:center;align-items:center}.image-container.svelte-1hkhdvr{display:flex;flex-direction:column;justify-content:left;align-items:center}img.svelte-1hkhdvr{border-radius:15%;max-height:25vh}.info.svelte-1hkhdvr{max-width:50%;margin:25px;padding:10px}p.svelte-1hkhdvr{font-size:1.2em}@media only screen and (min-width: 640px){.info.svelte-1hkhdvr{overflow-y:scroll;max-height:60vh}}@media only screen and (max-width: 640px){section.svelte-1hkhdvr{flex-direction:column}img.svelte-1hkhdvr{max-height:85vh;max-width:90vw;border-radius:5%;margin-top:10vh}.info.svelte-1hkhdvr{max-width:90%}}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-1hkhdvr"}"><div class="${"image-container svelte-1hkhdvr"}"><img src="${"/profile.png"}" alt="${"profile"}" class="${"svelte-1hkhdvr"}">
        <h1>Adam Winchell</h1>
        <p class="${"svelte-1hkhdvr"}">Applied Scientist</p></div>
    <div class="${"info svelte-1hkhdvr"}"><p class="${"svelte-1hkhdvr"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias mollitia natus omnis iste praesentium rerum temporibus, quasi, itaque quos distinctio veniam odio voluptatibus magni nihil deleniti porro soluta. Unde inventore ducimus cumque voluptas assumenda praesentium dolorem molestiae, earum iure porro suscipit fugiat dolorum ipsa, nihil minus sapiente! Temporibus, autem!
        </p>
        <br>
        <p class="${"svelte-1hkhdvr"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias mollitia natus omnis iste praesentium rerum temporibus, quasi, itaque quos distinctio veniam odio voluptatibus magni nihil deleniti porro soluta. Unde inventore ducimus cumque voluptas assumenda praesentium dolorem molestiae, earum iure porro suscipit fugiat dolorum ipsa, nihil minus sapiente! Temporibus, autem!
        </p>
        <br>

        <p class="${"svelte-1hkhdvr"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias mollitia natus omnis iste praesentium rerum temporibus, quasi, itaque quos distinctio veniam odio voluptatibus magni nihil deleniti porro soluta. Unde inventore ducimus cumque voluptas assumenda praesentium dolorem molestiae, earum iure porro suscipit fugiat dolorum ipsa, nihil minus sapiente! Temporibus, autem!
        </p></div>
</section>`;
});
export { Routes as default };
