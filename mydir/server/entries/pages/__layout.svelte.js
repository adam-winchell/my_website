import { c as create_ssr_component, e as escape, n as null_to_empty } from "../../chunks/index-7e88d1db.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--bg:#f5ebff;--nav:#9b48e9}main.svelte-5mzt14.svelte-5mzt14{width:100vw;height:100vh;display:flex;flex-direction:column;background-color:var(--bg)}.mopen.svelte-5mzt14.svelte-5mzt14{max-height:100vh;height:55vh;align-items:center}.mclosed.svelte-5mzt14.svelte-5mzt14{max-height:7vh;height:7vh}nav.svelte-5mzt14.svelte-5mzt14{width:100%;flex-grow:1;background-color:var(--nav);display:flex;justify-content:center;align-items:center;font-weight:bold;top:0;position:absolute;z-index:100000000;transition:all 200ms ease-in-out}.nav-icon.svelte-5mzt14.svelte-5mzt14{text-decoration:none;color:white;flex-grow:1;min-width:9vw;max-width:10vw;padding:10px;height:100%;display:flex;justify-content:center;align-items:center}.menu-icon.svelte-5mzt14.svelte-5mzt14{text-decoration:none;color:white;flex-grow:1;width:90%;padding:10px;height:100%;display:flex;justify-content:center;align-items:center;font-size:2em}.active.svelte-5mzt14.svelte-5mzt14{background-color:var(--bg);color:black}.nav-icon.svelte-5mzt14.svelte-5mzt14:hover{background-color:var(--bg);color:black}.contact-icon.svelte-5mzt14 img.svelte-5mzt14{height:4vh}.contact-icon.svelte-5mzt14.svelte-5mzt14:hover{border-radius:5%;background-color:var(--nav)}footer.svelte-5mzt14.svelte-5mzt14{width:100%;flex-grow:1;max-height:7vh;display:flex;justify-content:center;align-items:center;bottom:0;padding-bottom:10px}button.svelte-5mzt14.svelte-5mzt14{flex-grow:1;border:none;background:none;padding:10px;display:none}button.svelte-5mzt14 img.svelte-5mzt14{stroke:white}@media only screen and (max-width: 640px){button.svelte-5mzt14.svelte-5mzt14{display:block}main.svelte-5mzt14.svelte-5mzt14{height:100%}nav.svelte-5mzt14.svelte-5mzt14{max-height:100%;flex-direction:column;position:fixed;align-items:flex-end;border-bottom:1px solid darkslategrey;padding:10px}.nav-icon.svelte-5mzt14.svelte-5mzt14{display:none}footer.svelte-5mzt14 .contact-icon.svelte-5mzt14{margin:5px auto}footer.svelte-5mzt14.svelte-5mzt14{flex-grow:1;align-items:flex-end}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-5mzt14"}"><nav class="${escape(null_to_empty("mclosed")) + " svelte-5mzt14"}">${`<a class="${escape(null_to_empty("nav-icon active")) + " svelte-5mzt14"}" href="${"/"}">Home</a>
        <a class="${escape(null_to_empty("nav-icon")) + " svelte-5mzt14"}" href="${"/photos"}">Photos</a>
        <a class="${escape(null_to_empty("nav-icon")) + " svelte-5mzt14"}" href="${"/publications"}">Publications</a>
        <a class="${"nav-icon svelte-5mzt14"}" href="${"/"}">Resume</a>
        <a class="${"nav-icon svelte-5mzt14"}" href="${"https://realnitogames.com/"}">Real Nito Games</a>`}
        <button class="${"contact-icon svelte-5mzt14"}">${`<img src="${"/down.svg"}" alt="${"menu"}" class="${"svelte-5mzt14"}">`}</button></nav>
    ${slots.default ? slots.default({}) : ``}
    <footer class="${"svelte-5mzt14"}"><a class="${"contact-icon svelte-5mzt14"}" href="${"#"}"><img src="${"/github.svg"}" alt="${"github"}" class="${"svelte-5mzt14"}"></a>
        <a class="${"contact-icon svelte-5mzt14"}" href="${"#"}"><img src="${"/linkedin.svg"}" alt="${"linkedin"}" class="${"svelte-5mzt14"}"></a>
        <a class="${"contact-icon svelte-5mzt14"}" href="${"#"}"><img src="${"/mortarboard.svg"}" alt="${"google scholar"}" class="${"svelte-5mzt14"}"></a></footer>
</main>`;
});
export { _layout as default };
