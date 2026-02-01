const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const heartsContainer = document.getElementById("hearts");

const moveButton = () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
};

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

yesBtn.addEventListener("click", () => {
    message.innerHTML = `
        <div style="font-size: 18px; line-height: 1.6; color: #ff4d6d; margin-top: 20px;">
            YAYYY!!! 💖<br><br>
            My dearest chutti,<br>
            You have no idea how happy you've made me. 
            Every moment with you is like a dream come true, and I'm so lucky 
            to have you by my side. You're my favorite person in the world 
            and I promise to always keep you smiling. I love you forever! ❤️ send nudes😋
        </div>
    `;
    document.querySelector(".buttons").style.display = "none";
    if (music.src) music.play();
    startHearts();
});


function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}
