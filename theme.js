const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark",
};

const theme = localStorage.getItem("theme") || ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);

const bodyClass = document.body.classList;

bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem("theme");
  const next = themeMap[current];
  
  console.log("Estava no: " + current);
  console.log("Agora é o: " + next);

  bodyClass.replace(current, next);
  localStorage.setItem("theme", next);

}


document.getElementById("themeButton").onclick = toggleTheme;
