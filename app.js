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
    data: '10/08', emoji: '🌭',
    items: [
      { label: 'Prato Proteico', icon: '🌭', name: 'Linguiça suína' },
      { label: 'Guarnição',      icon: '🍝', name: 'Macarronese' },
      { label: 'Salada',         icon: '🥗', name: 'Alface, couve e tomate' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🌱', name: 'PTS à jardineira' },
    ]
  },
  2: {
    data: '11/08', emoji: '🥩',
    items: [
      { label: 'Prato Proteico', icon: '🥩', name: 'Carne de panela' },
      { label: 'Guarnição',      icon: '🥔', name: 'Purê de batata' },
      { label: 'Salada',         icon: '🥗', name: 'Alface e beterraba' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🌱', name: 'Ensopadinho de PTS' },
    ]
  },
  3: {
    data: '12/08', emoji: '🍗',
    items: [
      { label: 'Prato Proteico', icon: '🍗', name: 'Bife de frango' },
      { label: 'Guarnição',      icon: '🥦', name: 'Mix de legumes' },
      { label: 'Salada',         icon: '🥗', name: 'Salada mista' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🌱', name: 'Disco de PTS' },
    ]
  },
  4: {
    data: '13/08', emoji: '🥩',
    items: [
      { label: 'Prato Proteico', icon: '🥩', name: 'Panqueca de carne' },
      { label: 'Guarnição',      icon: '🟣', name: 'Beterraba' },
      { label: 'Salada',         icon: '🥗', name: 'Alface e cenoura' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🌱', name: 'Panqueca de PTS' },
    ]
  },
  5: {
    data: '14/08', emoji: '🍗',
    items: [
      { label: 'Prato Proteico', icon: '🍗', name: 'Frango assado' },
      { label: 'Guarnição',      icon: '🟤', name: 'Farofa mista' },
      { label: 'Salada',         icon: '🥗', name: 'Repolho e tomate' },
      { label: 'Acompanhamento', icon: '🍚', name: 'Arroz e feijão' },
      { label: 'Vegetariano',    icon: '🍳', name: 'Omelete de legumes' },
    ]
  },
  6: null,
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
// ?dia=0..6 simula um dia específico (debug). Afeta tanto o cardápio
// exibido quanto a chave TODAY_ISO usada no Firebase — então votar em ?dia=1
// num domingo já popula o slot da próxima segunda.
const _diaOverride = new URLSearchParams(location.search).get("dia");
let today;
let _refDate;
if (_diaOverride !== null && /^[0-6]$/.test(_diaOverride)) {
  today = Number(_diaOverride);
  _refDate = new Date(now);
  const diff = (today - now.getDay() + 7) % 7;
  _refDate.setDate(now.getDate() + diff);
} else {
  today = now.getDay();
  _refDate = now;
}

function toKey(date) {
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  return `${d}/${m}`;
}

const todayKey = toKey(now);
const isFeriado = todayKey in FERIADOS;
const feriadoNome = FERIADOS[todayKey] || "";

// Chave ISO do dia em hora LOCAL (ex: "2026-06-07") — usada como path no Firebase
// Usa _refDate (que respeita ?dia=N) e componentes locais para evitar drift de UTC.
const TODAY_ISO = `${_refDate.getFullYear()}-${String(_refDate.getMonth() + 1).padStart(2, "0")}-${String(_refDate.getDate()).padStart(2, "0")}`;

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
function renderCard(dayIndex, checkFeriado = false, eyebrow = "Cardápio de hoje") {
  if (checkFeriado && isFeriado) {
    return `<div class="weekend-msg">
      <span class="emoji">🎉</span>
      <h2>Feriado!</h2>
      <p><strong>${feriadoNome}</strong><br>O RU não funciona hoje.<br>Bom feriado! 🥳</p>
    </div>`;
  }

  const d = CARDAPIO[dayIndex];

  if (d && d.naoLetivo) {
    return `<div class="weekend-msg">
      <span class="emoji">📅</span>
      <h2>Dia não letivo</h2>
      <p>Não há aula nesta data${d.data ? ` (${d.data})` : ""}.<br>Sem cardápio no RU hoje.</p>
    </div>`;
  }

  if (!d || !d.items) {
    const isWeekend = dayIndex === 0 || dayIndex === 6;
    if (isWeekend) {
      return `<div class="weekend-msg">
        <span class="emoji">😴</span>
        <h2>Sem almoço hoje!</h2>
        <p>O RU não funciona aos finais de semana.<br>Aproveite o descanso! 🌴</p>
      </div>`;
    } else {
      const nomeF = d?.prato || FERIADOS[toKey(now)] || "Feriado";
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
            <span>${eyebrow}</span>
            <h2>${DIAS[dayIndex]}-feira</h2>
          </div>
        </div>
        <div class="card-date-badge">📅 ${d.data}</div>
      </div>
      <div class="menu-items">${items}</div>
    </div>`;
}

// ─────────────────────────────────────────
// DIA EM FOCO (coluna esquerda no desktop; sempre "hoje" no mobile)
// ─────────────────────────────────────────
let focusedDay = today;

function renderFocus() {
  const isToday = focusedDay === today;
  const eyebrow = isToday
    ? "Cardápio de hoje"
    : `Cardápio de ${DIAS[focusedDay].toLowerCase()}`;
  document.getElementById("sec-hoje").innerHTML = renderCard(
    focusedDay,
    isToday,
    eyebrow,
  );
  document.querySelectorAll(".week-rail-day").forEach((el) => {
    el.classList.toggle("active", Number(el.dataset.day) === focusedDay);
  });
}

// Clique num dia da lista (desktop) troca o card grande
function focusDay(di) {
  focusedDay = di;
  renderFocus();
}

// ─────────────────────────────────────────
// LISTA DA SEMANA — RAIL (só desktop)
// ─────────────────────────────────────────
function renderWeekRail() {
  const rail = document.getElementById("week-rail");
  if (!rail) return;

  const cards = [1, 2, 3, 4, 5]
    .map((di) => {
      const d = CARDAPIO[di];
      const isToday = di === today;
      const dateLabel = d?.data || "";

      let body;
      if (d && d.naoLetivo) {
        body = `<span class="wr-msg">📅 Não letivo</span>`;
      } else if (!d || !d.items) {
        body = `<span class="wr-msg">Sem cardápio</span>`;
      } else {
        body = `<ul class="wr-items">${d.items
          .filter((i) => i.label !== "Acompanhamento")
          .map(
            (i) =>
              `<li><span class="wr-ic">${i.icon}</span><span>${i.name}</span></li>`,
          )
          .join("")}</ul>`;
      }

      return `
      <button class="week-rail-day${isToday ? " is-today" : ""}"
              data-day="${di}" onclick="focusDay(${di})">
        <div class="wr-top">
          <span class="wr-dayname">${DIAS_SHORT[di]}${dateLabel ? ` · ${dateLabel}` : ""}</span>
          ${isToday ? '<span class="wr-badge">hoje</span>' : ""}
        </div>
        ${body}
      </button>`;
    })
    .join("");

  rail.innerHTML = `<div class="week-rail-head">📅 A semana</div><div class="wr-list">${cards}</div>`;

  document.querySelectorAll(".week-rail-day").forEach((el) => {
    el.classList.toggle("active", Number(el.dataset.day) === focusedDay);
  });
}

renderFocus();
renderWeekRail();

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
// TERMÔMETRO DO DIA — FIREBASE REALTIME DATABASE
// ─────────────────────────────────────────
const REACTIONS = [
  { key: "bom",    emoji: "🔥", label: "Tá bom"  },
  { key: "normal", emoji: "😄", label: "Normal"  },
  { key: "ruim",   emoji: "🥲", label: "Tá ruim" },
];

const REACTED_KEY = `allmosso_reacted_${TODAY_ISO}`;
let userReaction = localStorage.getItem(REACTED_KEY); // 'bom'|'normal'|'ruim'|null
let reactionData = { bom: 0, normal: 0, ruim: 0 };
let db = null;
let _castCooldown = false;
let _firebaseLoaded = false;

function initFirebase() {
  try {
    if (FIREBASE_CONFIG.apiKey === "COLE_AQUI") {
      renderTermometro(false);
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

    // Renderiza imediatamente (estado vazio) — listener só atualiza depois
    renderTermometro(true);

    db.ref(`termometro/${TODAY_ISO}`).on(
      "value",
      (snap) => {
        _firebaseLoaded = true;
        const data = snap.val() || {};
        REACTIONS.forEach((r) => {
          reactionData[r.key] = data[r.key] || 0;
        });
        renderTermometro(true);
      },
      (err) => {
        console.warn(
          "Termômetro: leitura negada pelo Firebase. Verifique se a regra de termometro/* foi adicionada.",
          err
        );
      }
    );
  } catch (e) {
    console.warn("Termômetro: erro ao inicializar Firebase.", e);
    renderTermometro(false);
  }
}

function castReaction(tipo) {
  if (_castCooldown) return;
  const prev = userReaction;
  if (prev === tipo) return;

  _castCooldown = true;
  setTimeout(() => { _castCooldown = false; }, 800);

  userReaction = tipo;
  localStorage.setItem(REACTED_KEY, tipo);

  // Update otimista: aplica localmente antes do servidor confirmar
  if (prev) reactionData[prev] = Math.max(0, (reactionData[prev] || 0) - 1);
  reactionData[tipo] = (reactionData[tipo] || 0) + 1;
  renderTermometro(!!db);

  if (db) {
    const updates = {};
    if (prev) {
      updates[`termometro/${TODAY_ISO}/${prev}`] =
        firebase.database.ServerValue.increment(-1);
    }
    updates[`termometro/${TODAY_ISO}/${tipo}`] =
      firebase.database.ServerValue.increment(1);
    db.ref().update(updates);
  }
}

function renderTermometro(firebaseAtivo) {
  const container = document.getElementById("votacao-container");
  if (!container) return;

  // Sem prato hoje (fim de semana ou feriado) → some
  const semPrato = isFeriado || !CARDAPIO[today] || !CARDAPIO[today].items;
  if (semPrato) {
    container.innerHTML = "";
    return;
  }

  const total = REACTIONS.reduce((sum, r) => sum + (reactionData[r.key] || 0), 0);
  const hasReacted = !!userReaction;

  const pills = REACTIONS.map((r) => {
    const count = reactionData[r.key] || 0;
    const isMine = r.key === userReaction;
    return `
      <button class="therm-pill therm-${r.key} ${isMine ? "reacted" : ""}"
              onclick="castReaction('${r.key}')"
              aria-label="${r.label}">
        ${isMine ? '<span class="therm-check">✓</span>' : ""}
        <span class="therm-emoji">${r.emoji}</span>
        <span class="therm-label">${r.label}</span>
        <span class="therm-count">${count}</span>
      </button>`;
  }).join("");

  const segBar = total > 0
    ? REACTIONS.map((r) => {
        const count = reactionData[r.key] || 0;
        const pct = Math.round((count / total) * 100);
        return `<div class="therm-seg ${r.key}" style="flex-grow:${count || 0.001}">
          ${pct >= 15 ? `<span class="therm-seg-pct">${pct}%</span>` : ""}
        </div>`;
      }).join("")
    : _firebaseLoaded
      ? `<div class="therm-seg-empty">Ninguém votou ainda hoje · seja o primeiro 👆</div>`
      : `<div class="therm-seg-loading"></div>`;

  const subText = hasReacted
    ? `<strong>${total}</strong> reaç${total === 1 ? "ão" : "ões"} · toque em outro pra trocar`
    : `<strong>${total}</strong> reaç${total === 1 ? "ão até agora" : "ões até agora"} · toque pra reagir`;

  container.innerHTML = `
    <div class="votacao-card therm-card">
      <div class="votacao-header">
        <span class="votacao-icon">🌡️</span>
        <div>
          <p class="votacao-title">Termômetro do dia</p>
          <p class="votacao-sub">${subText}</p>
        </div>
      </div>
      <div class="therm-pills">${pills}</div>
      <div class="therm-seg-wrap">
        <div class="therm-seg-label">Temperatura geral do dia</div>
        <div class="therm-seg-bar ${total === 0 ? "therm-seg-bar-empty" : ""}">${segBar}</div>
        <div class="therm-seg-legend">
          ${REACTIONS.map((r) => `<span>${r.emoji} ${r.label}</span>`).join("")}
        </div>
      </div>
      ${
        !firebaseAtivo && FIREBASE_CONFIG.apiKey === "COLE_AQUI"
          ? '<p class="vote-demo-msg">⚙️ Configure o Firebase para reações em tempo real</p>'
          : ""
      }
    </div>`;
}

initFirebase();