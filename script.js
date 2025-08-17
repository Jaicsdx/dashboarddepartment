const departments = ["1. Diplomacy","02. Business","03. Major Projects","04. Controlled Documents",
"05. Anju Wifey","06. Health, Fitness & Emergency","07. Benefits, Insurance & Taxation",
"08. Family Safety & Intelligence","09. Security","10. Law","11. Asset Management & Properties",
"12. Finance","13. Social Committee & Family","14. Dreams & Exploration","15. Philanthropy",
"16. Art, Film, Music & Culture","17. Food","18. Immigration","19. Procurement Department",
"20. Daily Logs & Planner","21. Automobile & Transportation","22. Science Division",
"23. Employment Resources","24. Archives & Museum","25. Housing & Urban Development",
"26. Communications","27. Utilities","28. Public Works","29. Environmental & Sustainability"];

const urls = [
  "https://onedrive.live.com/...?id=...Diplomacy",
  "https://1drv.ms/f/c/...Business",
  "https://1drv.ms/f/c/...MajorProjects",
  // ... fill with your real links (keep order same as departments) ...
  "https://1drv.ms/f/c/...Environmental"
];

const FALLBACK_ICON = "https://api.iconify.design/tabler/folder.svg?color=white";

// ===== NOTES TICKER =====
const STORAGE_KEY = "lifeCity.tickerNotes";
const track = document.getElementById('ticker-track');
const addBtn = document.getElementById('addNoteBtn');
const textarea = document.getElementById('newNote');

const escapeHTML = (s) => s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const loadNotes = () => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]"); } catch { return []; } };
const saveNotes = (arr) => localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));

function renderTicker(arr) {
  track.innerHTML = "";
  const frag = (data) => {
    const f = document.createDocumentFragment();
    data.forEach(text => {
      const item = document.createElement('div');
      item.className = 'ticker__item';
      item.innerHTML = `<span class="ticker__bullet"></span><span>${escapeHTML(text)}</span>`;
      f.appendChild(item);
    });
    return f;
  };
  track.appendChild(frag(arr));
  track.appendChild(frag(arr));
}

// Init
(function init() {
  const notes = loadNotes();
  if (notes.length === 0) {
    const defaults = ["Loop recording every 5 mins","Auto cleanup","Check storage before trips"];
    saveNotes(defaults);
    renderTicker(defaults);
  } else renderTicker(notes);
})();

// Add note
addBtn.addEventListener('click', () => {
  const txt = textarea.value.trim();
  if (!txt) return;
  const notes = loadNotes();
  notes.push(txt);
  saveNotes(notes);
  textarea.value = "";
  renderTicker(notes);
});

// ===== DEPARTMENTS =====
function normalizeLabel(label) { return label.replace(/^\d+\.\s*/, '').trim(); }

function render(list) {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  list.forEach((label, idx) => {
    const name = normalizeLabel(label);
    const a = document.createElement('a');
    a.href = urls[idx] || '#';
    a.target = '_blank';
    a.className = 'card';
    a.innerHTML = `
      <div class="card-top">
        <div class="card-num">${label.split(' ')[0]}</div>
        <div class="card-name">${name}</div>
        <div class="card-meta">Open in OneDrive</div>
      </div>`;
    grid.appendChild(a);
  });
}

function getFilteredSorted() {
  const q = (document.getElementById('search').value || '').toLowerCase().trim();
  let list = departments.filter(d => normalizeLabel(d).toLowerCase().includes(q));
  if (document.getElementById('sort').value === 'alpha')
    list = [...list].sort((a,b)=>normalizeLabel(a).localeCompare(normalizeLabel(b)));
  return list;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('search').addEventListener('input', ()=>render(getFilteredSorted()));
  document.getElementById('sort').addEventListener('change', ()=>render(getFilteredSorted()));
  const gs = document.getElementById('globalSearch');
  if (gs) gs.addEventListener('input', e => { document.getElementById('search').value = e.target.value; render(getFilteredSorted()); });
  render(departments);
});
