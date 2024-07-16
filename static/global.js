function $$(selector, context = document) {
  // the fuction returns an array of links given a selector for example $$('nav a')
  return Array.from(context.querySelectorAll(selector));
}
// choose the background color-scheme using a selector
document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select>
			<!-- TODO add <option> elements here -->
      <option value="light dark">Automatic</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
		</select>
	</label>`
);

let UISelector = document.querySelector(".color-scheme select");
UISelector.addEventListener("input", function(event) {
  document.documentElement.style.setProperty("color-scheme", event.target.value);
  localStorage.colorScheme = event.target.value;
});

// keep the color-scheme in our nav links
if (localStorage.colorScheme) {
  document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
}


