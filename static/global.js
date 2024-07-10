console.log("IT’S ALIVE!");

function $$(selector, context = document) {
  // the fuction returns an array of links given a selector for example $$('nav a')
  return Array.from(context.querySelectorAll(selector));
}
// generate the navigation links
let pages = [
  { title: 'Home', url: '' },
  { title: 'Projects', url: 'projects/' },
  { title: 'Resume', url: 'resume/' },
  { title: 'Contact', url: 'contact/' },
  { title: 'Github', url: 'https://github.com/ccalobeto' }
]
let nav = document.createElement('nav')
document.body.prepend(nav)
const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
  let url = p.url
  let title = p.title
  // this line assure correct routing between links
  url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url
  // add the nav links. Old version:
  let a = document.createElement('a')
  a.href = url
  a.textContent = title
  nav.append(a)
  // set active class the class="current"
  if (a.host === location.host && a.pathname === location.pathname) {
    a.classList.add('current')
  }
  // open a new page if the link is external like Github
  if (a.host !== location.host) {
    a.target = "_blank"
  }
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


