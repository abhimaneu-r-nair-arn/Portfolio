let activeAcademicProfile = null;
const { techData, langsphereData, hirelinkData, certificationData } = portfolioData;

function toggleCourse(detailsId, cardElement) {
    const detailsDiv = document.getElementById(detailsId);
    const modal = document.getElementById('academic-modal');
    const status = cardElement.querySelector('.status-pill');
    const institution = cardElement.querySelector('.institution-link');

    document.getElementById('academic-modal-kicker').textContent = cardElement.querySelector('.profile-mark').textContent;
    document.getElementById('academic-modal-status').className = `status-pill ${status.classList.contains('completed') ? 'completed' : 'active'}`;
    document.getElementById('academic-modal-status').textContent = status.textContent;
    document.getElementById('academic-modal-title').textContent = cardElement.querySelector('h3').textContent;
    document.getElementById('academic-modal-institution').textContent = cardElement.querySelector('.subtitle').textContent;
    document.getElementById('academic-modal-summary').textContent = cardElement.querySelector('p').textContent;
    document.getElementById('academic-modal-details').innerHTML = detailsDiv.innerHTML;
    document.getElementById('academic-modal-link').href = institution.href;

    cardElement.setAttribute('aria-expanded', 'true');
    activeAcademicProfile = cardElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    document.getElementById('academic-modal-close').focus();
}

function closeAcademicProfile() {
    const modal = document.getElementById('academic-modal');
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (activeAcademicProfile) {
        activeAcademicProfile.setAttribute('aria-expanded', 'false');
        activeAcademicProfile.focus();
        activeAcademicProfile = null;
    }
}

document.getElementById('academic-modal-close').addEventListener('click', closeAcademicProfile);
document.getElementById('academic-modal').addEventListener('click', event => {
    if (event.target.id === 'academic-modal') closeAcademicProfile();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.getElementById('academic-modal').classList.contains('open')) {
        closeAcademicProfile();
    }
});

const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNavLinks = document.getElementById('nav-links');

function closeMobileMenu() {
    mobileNavLinks.classList.remove('open');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenuToggle.setAttribute('aria-label', 'Open navigation menu');
}

mobileMenuToggle.addEventListener('click', () => {
    const isOpen = mobileNavLinks.classList.toggle('open');
    mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
    mobileMenuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

mobileNavLinks.addEventListener('click', event => {
    if (event.target.closest('a')) closeMobileMenu();
});

function renderCertificationDocuments() {
    const list = document.getElementById('certification-list');

    if (!certificationData.length) {
        list.innerHTML = '<p class="certification-empty">Certification documents will appear here when they are added.</p>';
        return;
    }

    certificationData.forEach(certification => {
        const card = document.createElement('article');
        card.className = 'card certification-card';

        const content = document.createElement('div');
        const title = document.createElement('h3');
        title.textContent = certification.title;
        const meta = document.createElement('div');
        meta.className = 'certification-meta';

        [certification.issuer, certification.date].forEach(value => {
            const item = document.createElement('span');
            item.textContent = value;
            meta.appendChild(item);
        });

        const link = document.createElement('a');
        link.className = 'certification-link';
        link.href = certification.document;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Open verification document ↗';
        link.setAttribute('aria-label', `Open ${certification.title} for verification`);

        content.append(title, meta);
        card.append(content, link);
        list.appendChild(card);
    });
}

renderCertificationDocuments();

document.addEventListener('click', event => {
    if (!event.target.closest('nav')) closeMobileMenu();
});

// Show Selected Technology in Interactive Panel
function showTechDetail(key, element) {
    const data = techData[key];
    if (!data) return;

    // Update badge visual states
    document.querySelectorAll('.badge').forEach(b => b.classList.remove('active'));
    element.classList.add('active');

    // Update Panel Content
    const panel = document.getElementById('tech-panel');
    const title = document.getElementById('tech-title');
    const cat = document.getElementById('tech-cat');
    const desc = document.getElementById('tech-desc');

    element.after(panel);
    panel.classList.add('inline');
    panel.classList.add('visible');
    panel.style.borderLeftColor = data.borderColor;
    title.textContent = data.title;
    title.style.color = data.borderColor;
    cat.textContent = data.category;
    desc.textContent = data.desc;
}

function showProjectDetail(key, element) {
    const data = langsphereData[key];
    if (!data) return;

    document.querySelectorAll('.project-feature').forEach(feature => feature.classList.remove('active'));
    element.classList.add('active');
    const panel = document.getElementById('project-detail-title').closest('.project-detail-panel');
    panel.classList.add('visible');
    document.getElementById('project-detail-title').textContent = data.title;
    document.getElementById('project-detail-desc').textContent = data.desc;
}

function showHirelinkDetail(key, element) {
    const data = hirelinkData[key];
    if (!data) return;

    document.querySelectorAll('.hirelink-feature').forEach(feature => feature.classList.remove('active'));
    element.classList.add('active');
    const panel = document.getElementById('hirelink-detail-title').closest('.project-detail-panel');
    panel.classList.add('visible');
    document.getElementById('hirelink-detail-title').textContent = data.title;
    document.getElementById('hirelink-detail-desc').textContent = data.desc;
}

// Reveal content as it enters the viewport and keep navigation in sync.
const revealItems = document.querySelectorAll('section, .card, .tech-detail-panel');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealItems.forEach((item, index) => {
    item.classList.add('reveal');
    item.style.transitionDelay = `${Math.min(index * 35, 280)}ms`;
    if (item.id === 'about') item.classList.add('visible');
    revealObserver.observe(item);
});

const sectionLinks = [...document.querySelectorAll('.nav-links a')];
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
    });
}, { rootMargin: '-35% 0px -55% 0px' });

document.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section));

document.querySelectorAll('.academic-profile').forEach(profile => {
    profile.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            profile.click();
        }
    });
});

document.querySelectorAll('.badge').forEach(badge => {
    badge.setAttribute('role', 'button');
    badge.setAttribute('tabindex', '0');
    badge.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            badge.click();
        }
    });
});

showTechDetail('csharp', document.querySelector('.badge.dev.active'));
