/* ═══════════════════════════════════════
   ALLMOSSO — RU IFTO Palmas
   app.js
   ═══════════════════════════════════════ */

// ─────────────────────────────────────────
// DADOS DO CARDÁPIO
// ✏️  Atualize aqui toda semana!
// 1 = Segunda | 2 = Terça | 3 = Quarta | 4 = Quinta | 5 = Sexta
// ─────────────────────────────────────────
const CARDAPIO = {
  0: null, // Domingo  — sem almoço
  1: {     // Segunda
    data: '23/02',
    emoji: '🍗',
    items: [
      { label: 'Prato Proteico', icon: '🍗', name: 'Strogonoff de frango' },
      { label: 'Guarnição',      icon: '🥔', name: 'Batata palha' },
      { label: 'Salada',         icon: '🥗', name: 'Alface e cenoura' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🫘', name: 'Strogonoff de grão-de-bico' },
    ]
  },
  2: {     // Terça
    data: '24/02',
    emoji: '🥩',
    items: [
      { label: 'Prato Proteico', icon: '🥩', name: 'Tirinhas de carne' },
      { label: 'Guarnição',      icon: '🟤', name: 'Farofa' },
      { label: 'Salada',         icon: '🥗', name: 'Couve e repolho' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🍳', name: 'Omelete de legumes' },
    ]
  },
  3: {     // Quarta
    data: '25/02',
    emoji: '🍝',
    items: [
      { label: 'Prato Proteico', icon: '🍝', name: 'Lasanha de frango' },
      { label: 'Guarnição',      icon: '🥒', name: 'Maxixada' },
      { label: 'Salada',         icon: '🥗', name: 'Acelga e tomate' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🌱', name: 'Lasanha de PTS' },
    ]
  },
  4: {     // Quinta
    data: '26/02',
    emoji: '🍖',
    items: [
      { label: 'Prato Proteico', icon: '🍖', name: 'Almôndegas ao molho' },
      { label: 'Guarnição',      icon: '🥔', name: 'Purê de batata' },
      { label: 'Salada',         icon: '🥗', name: 'Salada mista' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🌱', name: 'Almôndegas de PTS' },
    ]
  },
  5: {     // Sexta
    data: '27/02',
    emoji: '🍗',
    items: [
      { label: 'Prato Proteico', icon: '🍗', name: 'Coxa e sobrecoxa assada' },
      { label: 'Guarnição',      icon: '🍝', name: 'Macarrão com salsicha' },
      { label: 'Salada',         icon: '🥗', name: 'Alface e beterraba' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🌱', name: 'PTS à jardineira' },
    ]
  },
  6: null, // Sábado  — sem almoço
};

// ─────────────────────────────────────────
// FERIADOS
// ✏️  Adicione aqui os feriados no formato 'DD/MM': 'Nome do feriado'
// O RU não funcionará nesses dias e exibirá mensagem automática.
// ─────────────────────────────────────────
const FERIADOS = {
  // ── JANEIRO
  '01/01': 'Confraternização Universal 🎆',

  // ── FEVEREIRO
  '16/02': 'Carnaval (ponto facultativo) 🎭',
  '17/02': 'Carnaval (ponto facultativo) 🎭',
  '18/02': 'Quarta-feira de Cinzas (ponto facultativo até 14h) 🎭',

  // ── MARÇO
  '19/03': 'Dia de São José — Padroeiro de Palmas 🙏',

  // ── ABRIL
  '03/04': 'Paixão de Cristo 🕊️',
  '21/04': 'Tiradentes 🇧🇷',

  // ── MAIO
  '01/05': 'Dia Mundial do Trabalho 👷',
  '20/05': 'Aniversário de Palmas 🎂',

  // ── JUNHO
  '04/06': 'Corpus Christi (ponto facultativo) ✝️',

  // ── AGOSTO
  '15/08': 'Senhor do Bonfim (feriado estadual) 🙏',

  // ── SETEMBRO
  '07/09': 'Independência do Brasil 🇧🇷',
  '08/09': 'Nossa Sra. da Natividade — Padroeira do Tocantins 🙏',

  // ── OUTUBRO
  '05/10': 'Criação do Estado do Tocantins (feriado estadual) 🏛️',
  '12/10': 'Nossa Sra. Aparecida — Padroeira do Brasil 🇧🇷',
  '15/10': 'Dia do Professor (feriado escolar) 👩‍🏫',
  '28/10': 'Dia do Servidor Público (ponto facultativo) 📋',

  // ── NOVEMBRO
  '02/11': 'Finados 🕯️',
  '15/11': 'Proclamação da República 🇧🇷',
  '20/11': 'Dia da Consciência Negra ✊',

  // ── DEZEMBRO
  '24/12': 'Véspera do Natal (ponto facultativo após 14h) 🎄',
  '25/12': 'Natal 🎄',
  '31/12': 'Véspera do Ano Novo (ponto facultativo após 14h) 🎆',
};

// ─────────────────────────────────────────
// PIX
// ─────────────────────────────────────────
const PIX_KEY = 'tiagokxb@gmail.com';

function copyPix() {
  navigator.clipboard.writeText(PIX_KEY).then(() => {
    const btn = document.getElementById('pix-btn-text');
    btn.textContent = '✅ Copiado!';
    setTimeout(() => { btn.textContent = '💸 Copiar PIX'; }, 2500);
  });
}
// ✏️  Uma por dia da semana (1=Seg ... 5=Sex)
// ─────────────────────────────────────────
const FRASES = {
  1: 'Restaurante que tem ventilador de teto não serve farofa. 🍃',
  2: 'Tempestade revela telhado falso. ⛈️',
  3: 'O sabor do depois depende da paciência do agora. ⏳',
  4: 'Difícil não é matar o leão, é cuidar das antas. 🦁',
  5: 'Ando rápido mas nunca tenho pressa. 🏃',
};
// ─────────────────────────────────────────
const DIAS       = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
const DIAS_SHORT = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
const MESES      = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];

const now   = new Date();
const today = now.getDay();

// Chave no formato DD/MM para checar feriados
function toKey(date) {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${d}/${m}`;
}
const todayKey    = toKey(now);
const isFeriado   = todayKey in FERIADOS;
const feriadoNome = FERIADOS[todayKey] || '';

// ─────────────────────────────────────────
// HEADER — data de hoje
// ─────────────────────────────────────────
document.getElementById('header-date').textContent =
  `${DIAS[today]}, ${now.getDate()} de ${MESES[now.getMonth()]}`;

// ── Frase do dia
const frase = FRASES[today];
if (frase) {
  const el = document.getElementById('frase-do-dia');
  el.textContent = `"${frase}"`;
  el.classList.remove('hidden');
}

// ─────────────────────────────────────────
// RENDERIZA CARD DE UM DIA
// ─────────────────────────────────────────
function renderCard(dayIndex, checkFeriado = false) {
  // Feriado de hoje (só aplica na aba "Hoje")
  if (checkFeriado && isFeriado) {
    return `
      <div class="weekend-msg">
        <span class="emoji">🎉</span>
        <h2>Feriado!</h2>
        <p><strong>${feriadoNome}</strong><br>O RU não funciona hoje.<br>Bom feriado! 🥳</p>
      </div>`;
  }

  const d = CARDAPIO[dayIndex];

  if (!d) {
    return `
      <div class="weekend-msg">
        <span class="emoji">😴</span>
        <h2>Sem almoço hoje!</h2>
        <p>O RU não funciona aos finais de semana.<br>Aproveite o descanso! 🌴</p>
      </div>`;
  }

  const items = d.items.map(i => `
    <div class="menu-item">
      <div class="item-icon">${i.icon}</div>
      <div class="item-info">
        <div class="item-label">${i.label}</div>
        <div class="item-name">${i.name}</div>
      </div>
    </div>`).join('');

  return `
    <div class="day-card">
      <div class="day-card-header">
        <div class="day-card-header-left">
          <div class="day-emoji">${d.emoji}</div>
          <div>
            <span>Cardápio de hoje</span>
            <h2>${DIAS[dayIndex]}-feira</h2>
          </div>
        </div>
        <div class="card-date-badge">📅 ${d.data}</div>
      </div>
      <div class="menu-items">${items}</div>
    </div>`;
}

// ─────────────────────────────────────────
// ABA HOJE
// ─────────────────────────────────────────
document.getElementById('sec-hoje').innerHTML = renderCard(today, true);

// ─────────────────────────────────────────
// ABA SEMANA
// ─────────────────────────────────────────
let selectedDay = (today === 0 || today === 6) ? 1 : today;

function buildWeekNav() {
  const nav = document.getElementById('week-nav');
  nav.innerHTML = '';

  [1, 2, 3, 4, 5].forEach(d => {
    const pill = document.createElement('button');
    pill.className = 'day-pill'
      + (d === today      ? ' today-pill' : '')
      + (d === selectedDay ? ' active'    : '');

    pill.innerHTML = `${DIAS_SHORT[d]}<small>${d === today ? 'hoje' : ''}</small>`;
    pill.onclick   = () => { selectedDay = d; buildWeekNav(); buildWeekCard(); };
    nav.appendChild(pill);
  });
}

function buildWeekCard() {
  document.getElementById('week-card-content').innerHTML = renderCard(selectedDay);
}

buildWeekNav();
buildWeekCard();

// ─────────────────────────────────────────
// TROCA DE ABAS
// ─────────────────────────────────────────
function showTab(tab) {
  const isHoje = tab === 'hoje';
  document.getElementById('sec-hoje').classList.toggle('hidden', !isHoje);
  document.getElementById('sec-semana').classList.toggle('hidden',  isHoje);
  document.getElementById('tab-hoje').classList.toggle('active',    isHoje);
  document.getElementById('tab-semana').classList.toggle('active', !isHoje);
}