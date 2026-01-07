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

// ========================================
// PROJECT MODAL
// ========================================
const projectData = {
    'holocaust-website': {
        title: 'Holocaust Educational Website',
        subtitle: 'First-year project',
        description: 'A comprehensive educational platform dedicated to Holocaust history and remembrance. The website features historical documentation, interactive timelines, educational resources, and archival content to foster awareness and understanding.',
        learnings: [
            'Semantic HTML structure and accessibility',
            'Responsive web design principles',
            'DOM manipulation with vanilla JavaScript',
            'Managing complex historical data and presentations'
        ],
        image: 'https://opengraph.githubassets.com/1/DeGrozer/Holocaust-Educational-Website',
        github: 'https://github.com/DeGrozer/Holocaust-Educational-Website',
        deployed: 'https://degrozer.github.io/Holocaust-Educational-Website/',
        tags: ['HTML', 'CSS', 'JavaScript']
    },
    'volleyball-world-rankings': {
        title: 'Volleyball World Rankings',
        subtitle: 'Data visualization project',
        description: 'An interactive site that displays global volleyball rankings with clear tables and country flags, optimized for quick scan and responsive viewing.',
        learnings: [
            'Rendering dynamic data tables with vanilla JavaScript',
            'Responsive layout for wide tables on mobile',
            'Using GitHub Pages for static site hosting'
        ],
        image: 'https://opengraph.githubassets.com/1/DeGrozer/volleyball-world-rankings',
        github: 'https://github.com/DeGrozer/volleyball-world-rankings',
        deployed: 'https://degrozer.github.io/volleyball-world-rankings/',
        tags: ['HTML', 'CSS', 'JavaScript']
    }
};

function openProjectModal(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    document.getElementById('modalProjectImage').src = project.image;
    document.getElementById('modalProjectTitle').textContent = project.title;
    
    // Add subtitle if exists
    const subtitleEl = document.getElementById('modalProjectSubtitle');
    if (project.subtitle) {
        subtitleEl.textContent = project.subtitle;
        subtitleEl.style.display = 'block';
    } else {
        subtitleEl.style.display = 'none';
    }
    
    document.getElementById('modalProjectDesc').textContent = project.description;
    document.getElementById('modalProjectUrl').href = project.deployed || project.github;
    document.getElementById('modalProjectUrl').textContent = project.deployed ? ' View Live Site' : 'View Repository';
    
    // Update GitHub link if deployed site exists
    const githubLinkEl = document.getElementById('modalProjectGithub');
    if (project.github && project.deployed) {
        githubLinkEl.href = project.github;
        githubLinkEl.style.display = 'inline-flex';
    } else {
        githubLinkEl.style.display = 'none';
    }
    
    // Update tags
    const tagsContainer = document.getElementById('modalProjectTags');
    tagsContainer.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Update learnings
    if (project.learnings) {
        const learningsContainer = document.getElementById('modalProjectLearnings');
        learningsContainer.innerHTML = project.learnings.map(learning => `<li>${learning}</li>`).join('');
        document.getElementById('modalLearningsSection').style.display = 'block';
    } else {
        document.getElementById('modalLearningsSection').style.display = 'none';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    modal.classList.remove('minimized');
    document.body.style.overflow = 'auto';
}

function toggleMinimizeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.toggle('minimized');
}

function toggleMaximizeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.toggle('maximized');
}

// Close modal when clicking overlay
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});
