import { c as create_ssr_component } from "../../chunks/index-7e88d1db.js";
var photos_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-sus03y{flex-grow:1;display:flex;justify-content:center;align-items:center;margin-top:7vh;min-height:93vh}#myCarousel.svelte-sus03y{max-height:80vh}img.svelte-sus03y{max-height:80vh;margin:0 auto}",
  map: null
};
const Photos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-sus03y"}"><div class="${"container"}"><div id="${"myCarousel"}" class="${"carousel slide svelte-sus03y"}" data-ride="${"carousel"}">
          <ol class="${"carousel-indicators"}"><li data-target="${"#myCarousel"}" data-slide-to="${"0"}" class="${"active"}"></li>
            <li data-target="${"#myCarousel"}" data-slide-to="${"1"}"></li>
            <li data-target="${"#myCarousel"}" data-slide-to="${"2"}"></li></ol>
      
          
          <div class="${"carousel-inner"}"><div class="${"item active"}"><img src="${"profile.png"}" alt="${"Los Angeles"}" class="${"svelte-sus03y"}">
              <div class="${"carousel-caption"}"><h3>New York</h3>
                <p>We love the Big Apple!</p></div></div>
      
            <div class="${"item"}"><img src="${"profile.png"}" alt="${"Chicago"}" class="${"svelte-sus03y"}">
              <div class="${"carousel-caption"}"><h3>New York</h3>
                <p>We love the Big Apple!</p></div></div>
          
            <div class="${"item"}"><img src="${"profile.png"}" alt="${"New york"}" class="${"svelte-sus03y"}">
              <div class="${"carousel-caption"}"><h3>New York</h3>
                <p>We love the Big Apple!</p></div></div></div>
      
          
          <a class="${"left carousel-control"}" href="${"#myCarousel"}" data-slide="${"prev"}"><span class="${"glyphicon glyphicon-chevron-left"}"></span>
            <span class="${"sr-only"}">Previous</span></a>
          <a class="${"right carousel-control"}" href="${"#myCarousel"}" data-slide="${"next"}"><span class="${"glyphicon glyphicon-chevron-right"}"></span>
            <span class="${"sr-only"}">Next</span></a></div></div>
</section>`;
});
export { Photos as default };
