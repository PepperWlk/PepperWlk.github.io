// =====================================================================
//  MAIN.JS — Logique du site (navigation, rendu des cartes, page détail)
//  Tu n'as normalement pas besoin de toucher à ce fichier.
// =====================================================================


// ── RENDU DES CARTES PROJET ──────────────────────────────────────────
function renderCard(project, category) {
  const card = document.createElement('div');
  card.className = 'project-card';

  // Fond : image si disponible, sinon emoji + couleur
  const bgHTML = project.image
    ? `<img class="project-card-img" src="${project.image}" alt="${project.title}" />`
    : `<div class="project-card-placeholder" style="background:${project.bgColor}">${project.emoji}</div>`;

  card.innerHTML = `
    ${bgHTML}
    <div class="project-card-overlay">
      <div class="project-card-tag">${project.tag}</div>
      <div class="project-card-title">${project.title}</div>
      <div class="project-card-desc">${project.desc}</div>
    </div>
    <div class="project-card-arrow">→</div>
  `;
  card.addEventListener('click', () => openDetail(project, category));
  return card;
}

// Peuple les deux grilles au chargement de la page
document.getElementById('school-grid').append(...schoolProjects.map(p => renderCard(p, 'school')));
document.getElementById('perso-grid').append(...persoProjects.map(p => renderCard(p, 'perso')));


// ── PAGE DÉTAIL D'UN PROJET ──────────────────────────────────────────
let previousPage = 'school';

function openDetail(project, fromPage) {
  previousPage = fromPage;

  document.getElementById('detail-tag').textContent = project.tag;
  document.getElementById('detail-title').textContent = project.title;

  // Hero : image si dispo, sinon emoji + couleur
  const heroBgContent = project.image
    ? `<img src="${project.image}" alt="${project.title}" style="width:100%;height:100%;object-fit:cover" />`
    : `<div style="width:100%;height:100%;background:${project.bgColor};display:flex;align-items:center;justify-content:center;font-size:12rem;filter:blur(2px);transform:scale(1.05)">${project.emoji}</div>`;
  document.getElementById('detail-hero-bg').innerHTML = heroBgContent;

  // Métadonnées
  document.getElementById('detail-meta').innerHTML = `
    <div class="detail-meta-item"><div class="key">Durée</div><div class="val">${project.duration}</div></div>
    <div class="detail-meta-item"><div class="key">Équipe</div><div class="val">${project.team}</div></div>
    <div class="detail-meta-item"><div class="key">Stack</div><div class="val">${project.stack}</div></div>
    <div class="detail-meta-item"><div class="key">Catégorie</div><div class="val">${fromPage === 'school' ? 'École' : 'Personnel'}</div></div>
  `;

  // Sections texte
  const content = document.getElementById('detail-content');
  content.innerHTML = '';
  project.sections.forEach(sec => {
    const div = document.createElement('div');
    div.className = 'detail-section';
    let inner = `<h3>${sec.title}</h3>`;
    if (sec.text)  inner += `<p>${sec.text}</p>`;
    if (sec.items) inner += `<ul>${sec.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    div.innerHTML = inner;
    content.appendChild(div);
  });

  // Images page détail
  // → Si le projet a un tableau "images" dans projets.js, on les affiche
  // → Sinon on affiche des placeholders grisés
  const imagesDiv = document.createElement('div');
  imagesDiv.className = 'detail-images';
  if (project.images && project.images.length > 0) {
    project.images.forEach(src => {
      imagesDiv.innerHTML += `<img src="${src}" alt="" style="width:100%;aspect-ratio:16/10;object-fit:cover;border:1px solid var(--border)" />`;
    });
  } else {
    imagesDiv.innerHTML = `
      <div class="detail-img-placeholder">🖼️<span>Ajouter une image dans projets.js</span></div>
      <div class="detail-img-placeholder">🖼️<span>Ajouter une image dans projets.js</span></div>
    `;
  }
  content.appendChild(imagesDiv);

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('project-detail').classList.add('active');
  window.scrollTo(0, 0);
}

document.getElementById('detail-back-btn').addEventListener('click', () => {
  document.getElementById('project-detail').classList.remove('active');
  showPage(previousPage);
});


// ── NAVIGATION ───────────────────────────────────────────────────────
function showPage(pageId) {
  document.getElementById('project-detail').classList.remove('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) page.classList.add('active');
  const link = document.querySelector(`[data-page="${pageId}"]`);
  if (link) link.classList.add('active');
  window.scrollTo(0, 0);
  return false;
}

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', e => { e.preventDefault(); });
});
