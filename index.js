let modeChanger = document.getElementById("darkMode");
let html = document.getElementsByTagName("html")[0];
let r = document.querySelector(":root");
modeChanger.addEventListener("click", () => {
  if (modeChanger.classList.contains("bi-sun")) {
    modeChanger.classList.remove("bi-sun");
    modeChanger.classList.add("bi-moon");
    r.style.setProperty("--white", "255, 255, 255");
    r.style.setProperty("--black", "0, 0, 0");
    html.removeAttribute("data-bs-theme", "light");
    html.setAttribute("data-bs-theme", "dark");
  } else {
    modeChanger.classList.add("bi-sun");
    modeChanger.classList.remove("bi-moon");
    r.style.setProperty("--black", "255, 255, 255");
    r.style.setProperty("--white", "0, 0, 0");
    html.removeAttribute("data-bs-theme", "dark");
    html.setAttribute("data-bs-theme", "light");
  }
});
const date = document.getElementById('date').innerHTML;
const eventDate = new Date(date).getTime();
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;
  document.getElementById("days").innerText = Math.floor( distance / (1000 * 60 * 60 * 24) );
  document.getElementById("hours").innerText = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
  document.getElementById("minutes").innerText = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) );
  document.getElementById("seconds").innerText = Math.floor( (distance % (1000 * 60)) / 1000 );
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Event Started";
  }
}, 1000);