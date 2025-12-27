// ========================================
// PROGRESS BAR
// ========================================
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
});

// ========================================
// TYPING EFFECT
// ========================================
const text = "I build and explore things that genuinely interest me.";
const typingTarget = document.getElementById("typing");
const terminal = document.getElementById("terminal");
const socials = document.getElementById("socials");
let index = 0;

function type() {
    if (index < text.length) {
        typingTarget.textContent += text.charAt(index);
        index++;
        setTimeout(type, 45);
    } else {
        // Show terminal window first, then socials
        terminal.classList.add("visible");
        setTimeout(() => {
            socials.classList.add("visible");
        }, 400);
    }
}

window.addEventListener("load", () => {
    setTimeout(type, 500);
});
