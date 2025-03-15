document.body.addEventListener("click", function(event) {
    const colors = ["red", "blue", "green", "purple", "orange", "pink", "yellow"]; 
    const splash = document.createElement("div");
    splash.className = "color-splash";
    splash.style.background = colors[Math.floor(Math.random() * colors.length)];
    splash.style.left = `${event.clientX - 50}px`;
    splash.style.top = `${event.clientY - 50}px`;
    document.body.appendChild(splash);
    setTimeout(() => splash.remove(), 600);
});