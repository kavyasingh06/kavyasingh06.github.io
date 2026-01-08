// Typing Effect
const text = "Kavya Singh | AI / ML Developer";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}

// Scroll Animation
const elements = document.querySelectorAll(".card, .project");
window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// GitHub Auto Fetch
fetch("https://api.github.com/users/kavyasingh06/repos")
.then(res => res.json())
.then(data => {
  const container = document.getElementById("projects");
  data.slice(0,3).forEach(repo => {
    container.innerHTML += `
      <div class="project">
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
        <a href="${repo.html_url}" target="_blank">View Repo</a>
      </div>
    `;
  });
});
