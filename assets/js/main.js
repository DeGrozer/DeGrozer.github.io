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
    updateUptime();
    setInterval(updateUptime, 1000);
});

// ========================================
// UPTIME CALCULATOR
// ========================================
function updateUptime() {
    const birthDate = new Date(2003, 10, 5, 4, 0, 0); // November 5, 2003, 4:00 AM
    const now = new Date();
    
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();
    
    // Adjust for negative values
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    
    const uptimeSpan = document.getElementById("uptime");
    if (uptimeSpan) {
        uptimeSpan.textContent = `${years}y ${months}mo ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
