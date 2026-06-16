document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

const projects = [
    {
        semester: "[Ano]-[Semestre] · [Nº Semestre do Curso]",
        name: "[Nome do Projeto]",
        type: "[Web / Desktop / App]",
        company: "[Empresa Parceira ou Professor Responsável e área]",
        problem: "[Descrição completa do problema — mín. 3 linhas em 1080p/100%. Lembre: o problema é diferente do objetivo.]",
        solution: "[Descrição resumida da solução — até 5 linhas em 1080p/100%. Informe explicitamente o tipo de sistema: desktop, web ou app.]",
        repo: "[link do repositório]",
        technologies: [
            { name: "[Tecnologia]", where: "[Onde foi utilizada no projeto]" },
            { name: "[Tecnologia]", where: "[Onde foi utilizada no projeto]" },
            { name: "[Tecnologia]", where: "[Onde foi utilizada no projeto]" },
        ],
        contributions: "[Papel Scrum: Desenvolvedor / Scrum Master / Product Owner]<br><br>[Descrição de suas contribuições — mín. 5 linhas. Liste artefatos gerados e tecnologias que você usou pessoalmente.]",
        code: "[Cole aqui um trecho de código relevante do projeto, ou remova este campo se preferir]",
        hardSkills: [
            { name: "[Tecnologia]", level: "[Ouvi falar / Faço/uso com ajuda / Faço/uso com autonomia / Consigo ensinar]" },
            { name: "[Tecnologia]", level: "[Nível]" },
        ],
        softSkills: [
            { name: "[Soft Skill]", example: "[Descreva um evento específico e real em que utilizou essa habilidade durante o projeto.]" },
            { name: "[Soft Skill]", example: "[Descreva um evento específico.]" },
        ],
    },
    {
        semester: "[Ano]-[Semestre] · [Nº Semestre do Curso]",
        name: "[Nome do Projeto]",
        type: "[Web / Desktop / App]",
        company: "[Empresa Parceira ou Professor Responsável e área]",
        problem: "[Descrição completa do problema.]",
        solution: "[Descrição resumida da solução.]",
        repo: "[link do repositório]",
        technologies: [
            { name: "[Tecnologia]", where: "[Onde foi utilizada]" },
            { name: "[Tecnologia]", where: "[Onde foi utilizada]" },
        ],
        contributions: "[Papel Scrum + descrição de contribuições]",
        code: "[Trecho de código ou deixe vazio]",
        hardSkills: [
            { name: "[Tecnologia]", level: "[Nível]" },
        ],
        softSkills: [
            { name: "[Soft Skill]", example: "[Exemplo pontual real]" },
        ],
    },
];

function openModal(i) {
    const p = projects[i];

    const techHtml = p.technologies.map(t => `
        <div class="skill-card">
            <div class="name">${t.name}</div>
            <div class="detail">${t.where}</div>
        </div>`).join('');

    const hardHtml = p.hardSkills.map(s => `
        <div class="skill-card">
            <div class="name">${s.name}</div>
            <div class="detail">${s.level}</div>
        </div>`).join('');

    const softHtml = p.softSkills.map(s => `
        <div class="soft-skill-item">
            <strong>${s.name}</strong>
            <p>${s.example}</p>
        </div>`).join('');

    const codeBlock = p.code ? `
        <div class="toggle">
            <div class="toggle-header" onclick="toggleCode(this)">
                <span>📄 Detalhes / Código</span>
                <span class="toggle-arrow">▼</span>
            </div>
            <div class="toggle-body">
                <pre>${p.code}</pre>
            </div>
        </div>` : '';

    document.getElementById('modalContent').innerHTML = `
        <h2>${p.name}</h2>
        <div class="modal-badges">
            <span class="badge badge-semester">${p.semester}</span>
            <span class="badge badge-type">${p.type}</span>
        </div>

        <div class="modal-section">
            <h3>Empresa Parceira</h3>
            <p>${p.company}</p>
        </div>

        <div class="modal-section">
            <h3>Problema</h3>
            <p>${p.problem}</p>
        </div>

        <div class="modal-section">
            <h3>Solução</h3>
            <p>${p.solution}</p>
        </div>

        <div class="modal-section">
            <h3>Link do Repositório</h3>
            <a href="${p.repo}" target="_blank" style="color:var(--primary);font-weight:600;">🔗 ${p.repo}</a>
        </div>

        <div class="modal-section">
            <h3>Tecnologias Utilizadas</h3>
            <div class="skills-grid">${techHtml}</div>
        </div>

        <div class="modal-section">
            <h3>Contribuições Pessoais</h3>
            <p>${p.contributions}</p>
            ${codeBlock}
        </div>

        <div class="modal-section">
            <h3>Hard Skills</h3>
            <div class="skills-grid">${hardHtml}</div>
        </div>

        <div class="modal-section">
            <h3>Soft Skills</h3>
            ${softHtml}
        </div>
    `;

    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('modal').addEventListener('click', e => {
    if (e.target.id === 'modal') closeModal();
});

function toggleCode(header) {
    header.querySelector('.toggle-arrow').classList.toggle('open')};
