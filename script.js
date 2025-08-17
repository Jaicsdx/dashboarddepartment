// ======= Dashboard data =======
const departments = ["1. Diplomacy","02. Business","03. Major Projects","04. Controlled Documents","05. Anju Wifey","06. Health, Fitness & Emergency","07. Benefits, Insurance & Taxation","08. Family Safety & Intelligence","09. Security","10. Law","11. Asset Management & Properties","12. Finance","13. Social Committee & Family","14. Dreams & Exploration","15. Philanthropy","16. Art, Film, Music & Culture","17. Food","18. Immigration","19. Procurement Department","20. Daily Logs & Planner","21. Automobile & Transportation","22. Science Division","23. Employment Resources","24. Archives & Museum","25. Housing & Urban Development","26. Communications","27. Utilities","28. Public Works","29. Environmental & Sustainability"];

const urls = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; // fill as needed

const iconUrls = [
  "https://api.iconify.design/tabler/handshake.svg?color=white","https://api.iconify.design/tabler/briefcase.svg?color=white","https://api.iconify.design/tabler/building-skyscraper.svg?color=white","https://api.iconify.design/tabler/files.svg?color=white","https://api.iconify.design/tabler/heart.svg?color=white","https://api.iconify.design/tabler/medical-cross.svg?color=white","https://api.iconify.design/tabler/receipt-2.svg?color=white","https://api.iconify.design/tabler/shield-lock.svg?color=white","https://api.iconify.design/tabler/lock.svg?color=white","https://api.iconify.design/tabler/scale.svg?color=white","https://api.iconify.design/tabler/home.svg?color=white","https://api.iconify.design/tabler/currency-dollar.svg?color=white","https://api.iconify.design/tabler/users.svg?color=white","https://api.iconify.design/tabler/rocket.svg?color=white","https://api.iconify.design/tabler/heart-handshake.svg?color=white","https://api.iconify.design/tabler/palette.svg?color=white","https://api.iconify.design/tabler/utensils.svg?color=white","https://api.iconify.design/tabler/id.svg?color=white","https://api.iconify.design/tabler/shopping-cart.svg?color=white","https://api.iconify.design/tabler/calendar.svg?color=white","https://api.iconify.design/tabler/car.svg?color=white","https://api.iconify.design/tabler/flask-2.svg?color=white","https://api.iconify.design/tabler/toolbox.svg?color=white","https://api.iconify.design/tabler/building-bank.svg?color=white","https://api.iconify.design/tabler/building.svg?color=white","https://api.iconify.design/tabler/messages.svg?color=white","https://api.iconify.design/tabler/plug.svg?color=white","https://api.iconify.design/tabler/tools.svg?color=white","https://api.iconify.design/tabler/leaf.svg?color=white"
];

const palette = ["#22c55e","#38bdf8","#f59e0b","#60a5fa","#0284c7","#fbbf24","#94a3b8","#f59e0b","#10b981","#ef4444","#3b82f6","#22c55e","#06b6d4","#f97316","#f43f5e","#8b5cf6","#fb7185","#0ea5e9","#16a34a","#f59e0b","#60a5fa","#06b6d4","#64748b","#ea580c","#22c55e","#f97316","#0891b2","#475569","#84cc16"];

const FALLBACK_ICON = "https://api.iconify.design/tabler/folder.svg?color=white";

// ======= Helpers =======
function normalizeLabel(label) { return label.replace(/^\d+\.\s*/, '').trim(); }
function loadFavs() { try { return new Set(JSON.parse(localStorage.getItem('favorites')||'[]')); } catch { return new Set(); } }
function saveFavs(f) { localStorage.setItem('favorites', JSON.stringify([...f])); }

// ======= Ticker with persistent notes =======
document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = "lifeCity.tickerNotes";
  const listEl = document.querySelector('#site-highlights');
  const track = document.getElementById('ticker-track');
  const addBtn = document.getElementById('addNoteBtn');
  const textarea = document.getElementById('newNote');
  const clearAllBtn = document.getElementById('clearAll');

  const escapeHTML = (s) => s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const loadNotes = () => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; } };
  const saveNotes = (arr) => localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));

  function renderList(arr) {
    listEl.innerHTML = "";
    arr.forEach((text, i) => {
      const li = document.createElement('li');
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.gap = "8px";
      li.innerHTML = `
        <span style="flex:1">${escapeHTML(text)}</span>
        <button aria-label="Remove note" data-i="${i}" style="border:none;background:#ef4444;color:#fff;padding:2px 8px;border-radius:6px;cursor:pointer;">✕</button>
      `;
      listEl.appendChild(li);
    });
  }

  function renderTicker(arr) {
    const items = arr ?? Array.from(listEl.querySelectorAll('li'))
      .map(li => li.firstElementChild ? li.firstElementChild.textContent.trim() : li.textContent.trim())
      .filter(Boolean);
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
    track.appendChild(frag(items));
    track.appendChild(frag(items)); // duplicate for seamless loop
  }

  // Bootstrap: seed storage from DOM once if empty
  const stored = loadNotes();
  if (stored.length === 0) {
    const domNotes = Array.from(listEl.querySelectorAll('li')).map(li => li.textContent.trim()).filter(Boolean);
    saveNotes(domNotes);
    renderList(domNotes);
    renderTicker(domNotes);
  } else {
    renderList(stored);
    renderTicker(stored);
  }

  addBtn?.addEventListener('click', () => {
    const txt = textarea?.value.trim();
    if (!txt) return;
    const notes = loadNotes();
    notes.push(txt);
    saveNotes(notes);
    textarea.value = "";
    renderList(notes);
    renderTicker(notes);
  });

  clearAllBtn?.addEventListener('click', () => {
    saveNotes([]);
    renderList([]);
    renderTicker([]);
  });

  listEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-i]');
    if (!btn) return;
    const idx = Number(btn.dataset.i);
    const notes = loadNotes();
    notes.splice(idx, 1);
    saveNotes(notes);
    renderList(notes);
    renderTicker(notes);
  });
});

// ======= Department grid (search/sort/favorites, links + icons) =======
function render(list) {
  const grid = document.getElementById('grid');
  const favs = loadFavs();
  const favList = list.filter(l => favs.has(l));
  const otherList = list.filter(l => !favs.has(l));
  const finalList = [...favList, ...otherList];
  grid.innerHTML = '';

  finalList.forEach(label => {
    const name = normalizeLabel(label);
    const idx = departments.indexOf(label);
    const a = document.createElement('a');
    a.href = urls[idx] || '#';
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'card';

    const star = document.createElement('span');
    star.className = 'star' + (favs.has(label) ? ' active' : '');
    star.title = favs.has(label) ? 'Unpin' : 'Pin to top';
    star.textContent = '★';
    star.addEventListener('click', (ev) => {
      ev.preventDefault(); ev.stopPropagation();
      const f = loadFavs();
      if (f.has(label)) f.delete(label); else f.add(label);
      saveFavs(f); render(getFilteredSorted());
    });

    const iconWrap = document.createElement('div');
    iconWrap.className = 'icon-badge';
    iconWrap.style.background = palette[idx % palette.length];
    const img = document.createElement('img');
    img.src = iconUrls[idx] || FALLBACK_ICON;
    img.alt = name + ' icon';
    img.onerror = () => { img.src = FALLBACK_ICON; img.onerror = null; };
    iconWrap.appendChild(img);

    a.innerHTML = `
      <div class="card-top">
        <div class="icon-slot"></div>
        <div>
          <div class="card-num">${label.split(' ')[0]}</div>
          <div class="card-name">${name}</div>
          <div class="card-meta">Open in OneDrive</div>
          <div class="pills">
            <span class="pill">Dept</span>
            <span class="pill">Life City</span>
          </div>
        </div>
      </div>`;
    a.querySelector('.icon-slot').replaceWith(iconWrap);
    a.querySelector('.card-top').appendChild(star);
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
  if (gs) gs.addEventListener('input', e => {
    document.getElementById('search').value = e.target.value;
    render(getFilteredSorted());
  });
  render(departments);
});
