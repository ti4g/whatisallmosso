/* ═══════════════════════════════════════
   ALLMOSSO — RU IFTO Palmas
   app.js
   ═══════════════════════════════════════ */

// ─────────────────────────────────────────
// FIREBASE CONFIG
// ✏️  Cole aqui suas credenciais do Firebase
// console.firebase.google.com → Seu projeto → Config
// ─────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBkqNcDzUWoJ_DvVnprecKs8fb7p7Nlv7w",
  authDomain: "allmosso.firebaseapp.com",
  databaseURL: "https://allmosso-default-rtdb.firebaseio.com",
  projectId: "allmosso",
  storageBucket: "allmosso.firebasestorage.app",
  messagingSenderId: "220562668021",
  appId: "1:220562668021:web:e3fb9dbabd3b15091948bc",
};

// ─────────────────────────────────────────
// DADOS DO CARDÁPIO
// ✏️  Atualize aqui toda semana!
// 1 = Segunda | 2 = Terça | 3 = Quarta | 4 = Quinta | 5 = Sexta
// ─────────────────────────────────────────
const CARDAPIO = {
  0: null,
  1: {
    data: '27/04', emoji: '🍗',
    items: [
      { label: 'Prato Proteico', icon: '🍗', name: 'Strogonoff de frango' },
      { label: 'Guarnição',      icon: '🥔', name: 'Batata palha' },
      { label: 'Salada',         icon: '🥗', name: 'Alface e beterraba' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🫘', name: 'Strogonoff de grão de bico' },
    ]
  },
  2: {
    data: '28/04', emoji: '🥩',
    items: [
      { label: 'Prato Proteico', icon: '🥩', name: 'Lasanha de carne' },
      { label: 'Guarnição',      icon: '🥦', name: 'Mix de legumes' },
      { label: 'Salada',         icon: '🥗', name: 'Acelga e tomate' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🌱', name: 'Lasanha de PTS' },
    ]
  },
  3: {
    data: '29/04', emoji: '🫘',
    items: [
      { label: 'Prato Proteico', icon: '🫘', name: 'Feijoada' },
      { label: 'Guarnição',      icon: '🟤', name: 'Farofa' },
      { label: 'Salada',         icon: '🥗', name: 'Couve e vinagrete' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🌱', name: 'Feijoada vegetariana' },
    ]
  },
  4: {
    data: '30/04', emoji: '🍗',
    items: [
      { label: 'Prato Proteico', icon: '🍗', name: 'Coxa e sobrecoxa assada' },
      { label: 'Guarnição',      icon: '🌭', name: 'Macarrão com salsicha' },
      { label: 'Salada',         icon: '🥗', name: 'Salada mista' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🍳', name: 'Omelete de legumes' },
    ]
  },
  5: { data: null, emoji: '🎉', prato: 'Feriado — Dia do Trabalhador' },  6: null,
};

// ─────────────────────────────────────────
// FERIADOS
// ✏️  Formato 'DD/MM': 'Nome do feriado'
// ─────────────────────────────────────────
const FERIADOS = {
  "01/01": "Confraternização Universal 🎆",
  "16/02": "Carnaval (ponto facultativo) 🎭",
  "17/02": "Carnaval (ponto facultativo) 🎭",
  "18/02": "Quarta-feira de Cinzas (ponto facultativo até 14h) 🎭",
  "19/03": "Dia de São José — Padroeiro de Palmas 🙏",
  "03/04": "Paixão de Cristo 🕊️",
  "21/04": "Tiradentes 🇧🇷",
  "01/05": "Dia Mundial do Trabalho 👷",
  "20/05": "Aniversário de Palmas 🎂",
  "04/06": "Corpus Christi (ponto facultativo) ✝️",
  "15/08": "Senhor do Bonfim (feriado estadual) 🙏",
  "07/09": "Independência do Brasil 🇧🇷",
  "08/09": "Nossa Sra. da Natividade — Padroeira do Tocantins 🙏",
  "05/10": "Criação do Estado do Tocantins (feriado estadual) 🏛️",
  "12/10": "Nossa Sra. Aparecida — Padroeira do Brasil 🇧🇷",
  "15/10": "Dia do Professor (feriado escolar) 👩‍🏫",
  "28/10": "Dia do Servidor Público (ponto facultativo) 📋",
  "02/11": "Finados 🕯️",
  "15/11": "Proclamação da República 🇧🇷",
  "20/11": "Dia da Consciência Negra ✊",
  "24/12": "Véspera do Natal (ponto facultativo após 14h) 🎄",
  "25/12": "Natal 🎄",
  "31/12": "Véspera do Ano Novo (ponto facultativo após 14h) 🎆",
};

// ─────────────────────────────────────────
// WHATSAPP SAC
// ─────────────────────────────────────────
const WA_LINK = "https://wa.me/5563999614831";

// ─────────────────────────────────────────
// CONSTANTES
// ─────────────────────────────────────────
const DIAS = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const DIAS_SHORT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MESES = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

const now = new Date();
const today = now.getDay();

function toKey(date) {
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  return `${d}/${m}`;
}

// Chave única da semana (ex: "2026-W12") para isolar votos por semana
function getWeekKey() {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const week1 = new Date(d.getFullYear(), 0, 4);
  const wn =
    1 +
    Math.round(((d - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
  return `${d.getFullYear()}-W${wn}`;
}

const todayKey = toKey(now);
const isFeriado = todayKey in FERIADOS;
const feriadoNome = FERIADOS[todayKey] || "";
const WEEK_KEY = getWeekKey();

// ─────────────────────────────────────────
// HEADER
// ─────────────────────────────────────────
document.getElementById("header-date").textContent =
  `${DIAS[today]}, ${now.getDate()} de ${MESES[now.getMonth()]}`;

// Injeta link do WhatsApp
const waLink = document.getElementById("wa-link");
if (waLink) waLink.href = WA_LINK;

// ─────────────────────────────────────────
// RENDERIZA CARD DE UM DIA
// ─────────────────────────────────────────
function renderCard(dayIndex, checkFeriado = false) {
  if (checkFeriado && isFeriado) {
    return `<div class="weekend-msg">
      <span class="emoji">🎉</span>
      <h2>Feriado!</h2>
      <p><strong>${feriadoNome}</strong><br>O RU não funciona hoje.<br>Bom feriado! 🥳</p>
    </div>`;
  }

  const d = CARDAPIO[dayIndex];

  if (!d) {
    const isWeekend = dayIndex === 0 || dayIndex === 6;
    if (isWeekend) {
      return `<div class="weekend-msg">
        <span class="emoji">😴</span>
        <h2>Sem almoço hoje!</h2>
        <p>O RU não funciona aos finais de semana.<br>Aproveite o descanso! 🌴</p>
      </div>`;
    } else {
      const nomeF = FERIADOS[toKey(now)] || "Feriado";
      return `<div class="weekend-msg">
        <span class="emoji">🎉</span>
        <h2>Feriado!</h2>
        <p><strong>${nomeF}</strong><br>O RU não funciona hoje.<br>Bom feriado! 🥳</p>
      </div>`;
    }
  }

  const items = d.items
    .map(
      (i) => `
    <div class="menu-item">
      <div class="item-icon">${i.icon}</div>
      <div class="item-info">
        <div class="item-label">${i.label}</div>
        <div class="item-name">${i.name}</div>
      </div>
    </div>`,
    )
    .join("");

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

document.getElementById("sec-hoje").innerHTML = renderCard(today, true);

// ─────────────────────────────────────────
// ABA SEMANA
// ─────────────────────────────────────────
let selectedDay = today === 0 || today === 6 ? 1 : today;

function buildWeekNav() {
  const nav = document.getElementById("week-nav");
  nav.innerHTML = "";
  [1, 2, 3, 4, 5].forEach((d) => {
    const pill = document.createElement("button");
    pill.className =
      "day-pill" +
      (d === today ? " today-pill" : "") +
      (d === selectedDay ? " active" : "");
    pill.innerHTML = `${DIAS_SHORT[d]}<small>${d === today ? "hoje" : ""}</small>`;
    pill.onclick = () => {
      selectedDay = d;
      buildWeekNav();
      buildWeekCard();
    };
    nav.appendChild(pill);
  });
}

function buildWeekCard() {
  document.getElementById("week-card-content").innerHTML =
    renderCard(selectedDay);
}

buildWeekNav();
buildWeekCard();

// ─────────────────────────────────────────
// TROCA DE ABAS
// ─────────────────────────────────────────
function showTab(tab) {
  const isHoje = tab === "hoje";
  document.getElementById("sec-hoje").classList.toggle("hidden", !isHoje);
  document.getElementById("sec-semana").classList.toggle("hidden", isHoje);
  document.getElementById("tab-hoje").classList.toggle("active", isHoje);
  document.getElementById("tab-semana").classList.toggle("active", !isHoje);
}

// ─────────────────────────────────────────
// VOTAÇÃO — FIREBASE REALTIME DATABASE
// ─────────────────────────────────────────

// ✏️  Cardápio da semana anterior — usado na votação
// Atualize aqui toda semana com os dados da semana que passou
const CARDAPIO_VOTACAO = {
  1: { data: null,    emoji: '📚', prato: 'Dia não letivo' },
  2: { data: null,    emoji: '🎉', prato: 'Feriado — Tiradentes' },
  3: { data: '22/04', emoji: '🌭', prato: 'Linguiça suína' },
  4: { data: '23/04', emoji: '🥩', prato: 'Tiras de carne ao molho barbecue' },
  5: { data: '24/04', emoji: '🍗', prato: 'Frango assado' },
};

const VOTE_WEEK_KEY = '2026-W17';

const VOTE_DIAS = [
  { key: 1, label: "Segunda" },
  { key: 2, label: "Terça" },
  { key: 3, label: "Quarta" },
  { key: 4, label: "Quinta" },
  { key: 5, label: "Sexta" },
].map((v) => ({
  ...v,
  data: CARDAPIO_VOTACAO[v.key]?.data || null,
  emoji: CARDAPIO_VOTACAO[v.key]?.emoji || "🎉",
  prato: CARDAPIO_VOTACAO[v.key]?.prato || "Feriado",
}));

const VOTED_KEY = `allmosso_voted_${VOTE_WEEK_KEY}`;
let userVote = localStorage.getItem(VOTED_KEY);
let db = null;
let votesData = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

// Inicializa Firebase
function initFirebase() {
  try {
    if (FIREBASE_CONFIG.apiKey === "COLE_AQUI") {
      renderVotacao(false); // mostra sem Firebase (modo demo)
      return;
    }
    firebase.initializeApp(FIREBASE_CONFIG);
    db = firebase.database();

    const btnTicket = document.getElementById("btn-ticket");
    if (btnTicket && db) {
      btnTicket.addEventListener("click", () => {
        db.ref("tickets/total").transaction((v) => (v || 0) + 1);
      });
    }

    const ref = db.ref(`votos/${VOTE_WEEK_KEY}`);
    ref.on("value", (snap) => {
      const data = snap.val() || {};
      [1, 2, 3, 4, 5].forEach((k) => {
        votesData[k] = data[k] || 0;
      });
      renderVotacao(true);
    });
  } catch (e) {
    renderVotacao(false);
  }
}

function castVote(dayKey) {
  const prevVote = userVote;
  const newVote = String(dayKey);

  // Clicou no mesmo dia — ignora
  if (prevVote === newVote) return;

  userVote = newVote;
  localStorage.setItem(VOTED_KEY, userVote);

  if (db) {
    const updates = {};
    // Decrementa voto anterior
    if (prevVote) {
      updates[`votos/${VOTE_WEEK_KEY}/${prevVote}`] =
        firebase.database.ServerValue.increment(-1);
    }
    // Incrementa novo voto
    updates[`votos/${VOTE_WEEK_KEY}/${newVote}`] =
      firebase.database.ServerValue.increment(1);
    db.ref().update(updates);
  } else {
    if (prevVote)
      votesData[prevVote] = Math.max(0, (votesData[prevVote] || 0) - 1);
    votesData[newVote] = (votesData[newVote] || 0) + 1;
    renderVotacao(false);
  }
}

function renderVotacao(firebaseAtivo) {
  const container = document.getElementById("votacao-container");
  if (!container) return;

  const total = Object.values(votesData).reduce((a, b) => a + b, 0);
  const hasVoted = !!userVote;

  const dias = VOTE_DIAS.map((v) => {
    const votos = votesData[v.key] || 0;
    const pct = total > 0 ? Math.round((votos / total) * 100) : 0;
    const isVoted = String(v.key) === String(userVote);
    const isFer = !v.data;
    const clickable = !isFer && !isVoted;

    return `
      <div class="vote-item ${isVoted ? "voted" : ""} ${isFer ? "feriado" : ""} ${clickable ? "clickable" : ""}"
           onclick="${isFer ? "" : `castVote(${v.key})`}">
        <div class="vote-item-left">
          <span class="vote-emoji">${v.emoji}</span>
          <div class="vote-info">
            <span class="vote-dia">${v.label} ${v.data ? `<small>📅 ${v.data}</small>` : ""}</span>
            <span class="vote-prato">${v.prato || "Feriado 🎉"}</span>
          </div>
        </div>
        <div class="vote-right">
          ${
            hasVoted
              ? `
            <div class="vote-bar-wrap">
              <div class="vote-bar" style="width:${pct}%"></div>
            </div>
            <span class="vote-pct">${pct}%</span>
          `
              : `
            <span class="vote-btn-hint">${isFer ? "🎉" : "👆 votar"}</span>
          `
          }
          ${isVoted ? '<span class="vote-check">✅</span>' : ""}
        </div>
      </div>`;
  }).join("");

  container.innerHTML = `
    <div class="votacao-card">
      <div class="votacao-header">
        <span class="votacao-icon">🏆</span>
        <div>
          <p class="votacao-title">Qual foi o melhor almoço?</p>
          <p class="votacao-sub">${
            hasVoted
              ? `${total} voto${total !== 1 ? "s" : ""} essa semana · toque em outro para trocar`
              : "Vote no melhor da semana passada!"
          }</p>
        </div>
      </div>
      <div class="vote-list">${dias}</div>
      ${
        !firebaseAtivo && FIREBASE_CONFIG.apiKey === "COLE_AQUI"
          ? '<p class="vote-demo-msg">⚙️ Configure o Firebase para votos em tempo real</p>'
          : ""
      }
    </div>`;
}

initFirebase();