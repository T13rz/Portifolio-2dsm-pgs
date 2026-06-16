document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

const projects = [
    {
        semester: "2025-2 · 1º Semestre",
        name: "Codewave API",
        type: "Aplicação WEB",
        company: "Fatec / Fernando Massanori",
        problem: "O Secretário de Mobilidade Urbana necessitava analisar os dados do Censo Demográfico para embasar decisões de políticas públicas. As informações estavam dispersas em diferentes formatos e arquivos, dificultando a análise comparativa entre regiões e períodos. A extração e cruzamento manual dos dados consumia horas de trabalho e gerava inconsistências frequentes nos relatórios produzidos.",
        solution: "A equipe desenvolveu uma aplicação web com filtragem e visualização dos dados do Censo utilizando Python com a biblioteca Pandas para processamento e Plotly para geração de gráficos interativos. O sistema permite ao usuário selecionar indicadores específicos e visualizar comparativos entre diferentes regiões e anos de forma clara e intuitiva, com exportação de relatórios.",
        repo: "https://github.com/guilhermefpo/CodeWave-1DSM-API",
        technologies: [
            { name: "HTML", where: "Estrutura do Site" },
            { name: "CSS", where: "Estilização" },
            { name: "Python", where: "Processamento de Dados" },
            { name: "Pandas", where: "Filtragem de dados" },
            { name: "Plotly", where: "Criação de gráficos interativos" },
            { name: "Flask", where: "Roteamento e Servidor Web" },
            { name: "MySQL", where: "Armazenamento dos Dados tratados" },
        ],
        contributions: "Papel Scrum: Desenvolvedor <br> Fui responsável pela filtragem de dados em Python utilizando Pandas, tratando valores nulos e padronizando os formatos além de gerar algumas métricas com o Plotly.",

        hardSkills: [
            { name: "HTML", level: "Faço com Autonomia" },
            { name: "CSS", level: "Faço com Autonomia" },
            { name: "Mysql", level: "Faço com Autonomia" },
            { name: "Flask", level: "Faço com Ajuda" },
            { name: "Plotly", level: "Faço com Ajuda" },
            
        ],
        softSkills: [
            { name: "Trabalho em Equipe", example: "Cada membro do grupo foi designado a desenvolver uma parte do projeto. houveram algumas travas no caminho mas todos os integrantes ajudaram uns aos outros para remove-las" },

        ],
    },
    {
        semester: "2026-1 · 2º Semestre",
        name: "Janosys SIGNA",
        type: "Aplicação WEB",
        company: "AKAER - Empresa Aeronáutica",
        problem: "A empresa Akaer enfrentava dificuldades no controle e rastreabilidade de normas técnicas internas e externas utilizadas em seus projetos. O processo manual de atualização e consulta de normas gerava retrabalho e riscos de uso de versões desatualizadas, comprometendo a qualidade dos entregáveis e o cumprimento de requisitos normativos.'",
        solution: "A equipe desenvolveu uma aplicação web chamada JanoSys SIGNA para gerenciamento de normas e notas técnicas, com sistema de autenticação e controle de acesso por níveis de permissão. O sistema permite cadastrar, versionar e consultar normas.",
        repo: "https://github.com/janosystime/Janosys-Project-1-Akaer",
        technologies: [
            { name: "HTML", where: "Estrutura Base" },
            { name: "CSS", where: "Estilização complementar" },
            { name: "TypeScript", where: "Tipagem e lógica do Frontend" },
            { name: "React", where: "Componentes e Gerenciamento de Estado" },
            { name: "Node.js", where: "Servidor e API REST" },
            { name: "Prisma", where: "Integração ao Banco de Dados" },
            { name: "MySQL", where: "Armazenamento dos Dados" },
        ],
        contributions: "Desenvolvedor <br> Contribui na Criação e Implementação do Banco de dados a partir da Conexão feita com o ORM Prisma ao MySQL.",
        hardSkills: [
            { name: "MySQL", level: "Faço com Autonomia" },
            { name: "Prisma", level: "Faço com Autonomia" },
            { name: "Node.js", level: "Faço com Autonomia" },
            { name: "TypeScript", level: "Faço com Ajuda " },
            { name: "React", level: "Faço com Ajuda" },
        ],
        softSkills: [
            { name: "Trabalho em Equipe", example: "Existia um Componente do React que estava muito extenso e gerando alta demanda de processamento. Todo o grupo se dividiu e se empenhou para 'quebrar' o componente em partes menores melhorando assim o seu desempenho" },
            { name: "Comunicação", example: "Houveram vários momentos em que existiram duvidas sobre algumas funções onde para evitar conflitos entramos em contato com os clientes para sanar essas dúvidas" },
            {name: "Solução de problemas", example: "Tivemos Alguns problemas com a incompatibilidade de algumas tecnologias, porém após um periodo de estudo conseguimos encontrar a combinação certa para evitar isso"},

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
