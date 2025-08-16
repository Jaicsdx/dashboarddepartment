
const departments = ["1. Diplomacy", "02. Business", "03. Major Projects", "04. Controlled Documents", "05. Anju Wifey", "06. Health, Fitness & Emergency", "07. Benefits, Insurance & Taxation", "08. Family Safety & Intelligence", "09. Security", "10. Law", "11. Asset Management & Properties", "12. Finance", "13. Social Committee & Family", "14. Dreams & Exploration", "15. Philanthropy", "16. Art, Film, Music & Culture", "17. Food", "18. Immigration", "19. Procurement Department", "20. Daily Logs & Planner", "21. Automobile & Transportation", "22. Science Division", "23. Employment Resources", "24. Archives & Museum", "25. Housing & Urban Development", "26. Communications", "27. Utilities", "28. Public Works", "29. Environmental & Sustainability"];
const urls = ["https://onedrive.live.com/?id=A0E5D4FE7220C501%21seee7328e7e9c4f578275995dc4435cac&cid=a0e5d4fe7220c501&ithint=folder&migratedtospo=true", "https://1drv.ms/f/c/a0e5d4fe7220c501/EnbvFoCubAFAmG6BycYyoAgB8aFRAQe_PJnIV5DTEX4uQw?e=ZX6e9p", "https://1drv.ms/f/c/a0e5d4fe7220c501/Egy4JTjVZB9Hj_fHV7WZI7wBS8gHOM4JCibmCIxUNXg3JA?e=PXsh3L", "https://1drv.ms/f/c/a0e5d4fe7220c501/EvDHgj4UV-1AuWKV5zz3rvcBIHtiG880gsP5yLSF6WYIrg?e=I78DJN", "https://1drv.ms/f/c/a0e5d4fe7220c501/Eg2wbt5jdbVLiHPI_-9b_2ABm5oBWIrC-y2yBd8qFfgj-Q?e=GxQpNJ", "https://1drv.ms/f/c/a0e5d4fe7220c501/Evxve7efbGNMrqOTk-cOXwEB5deNiFdZgW2bwfcWUtQkAw?e=uIugW5", "https://1drv.ms/f/c/a0e5d4fe7220c501/EiQBxfpY5CFFhIAu2bJuBKkBsJTsWqyxd-drZ0H848l7dQ?e=lhg9Bz", "https://1drv.ms/f/c/a0e5d4fe7220c501/ElHiLq5_CmhFi65PdCNgBhoBkdCbO6dydhFUjYg0wpXLSw?e=3QAUr8", "https://1drv.ms/f/c/a0e5d4fe7220c501/Evlz2w0hdHZEkhvu6pp49tsB5XxNFS_Cm5Py1mj-ZGna4Q?e=PVLdIf", "https://1drv.ms/f/c/a0e5d4fe7220c501/EnoSW_PPcdJMqcJdueYl_bIBHCqPEGWH-E2Hv8hTdLOsww?e=Yhq7uh", "https://1drv.ms/f/c/a0e5d4fe7220c501/EvjRP4Cp5vdOtjuDduOTnY4BqqdZS89xlRNOW6EksgKTyg?e=sQNZcc", "https://1drv.ms/f/c/a0e5d4fe7220c501/EtUoQswyBFVKpJZZOdhFhbgBTxeAVCpPR-qlECUP49uCBQ?e=hbSTH9", "https://1drv.ms/f/c/a0e5d4fe7220c501/EjVdjKqejkZNnmslISEuyrYBu0yYvSBauQMOjDForXt1rQ?e=dSEbTf", "https://1drv.ms/f/c/a0e5d4fe7220c501/EgnvLw10WE5HiKn43P__UgEBI99utn3D4olx_VIDnOGWIA?e=jFXhvQ", "https://1drv.ms/f/c/a0e5d4fe7220c501/Ek3hIqqFIn9IidmwCDErKfUBtgyu0F-yXs54_yhINHe11w?e=1ylM7D", "https://1drv.ms/f/c/a0e5d4fe7220c501/En55UIzWlHdMq_kPMnxb27wBMz0IlWLYhc1znC48EnQz2A?e=tAIbjq", "https://1drv.ms/f/c/a0e5d4fe7220c501/EtJyo9UnN3RHhmIEw0j-CxcBJRD3EOF8gIWunZUUvFgkBQ?e=Q2v5aD", "https://1drv.ms/f/c/a0e5d4fe7220c501/ErCNHmpsf0tFo9KeXBwLcU0BJRR3SBGYFD9gnxKsOmURdA?e=6arJ12", "https://onedrive.live.com/?id=A0E5D4FE7220C501%21s905ba87005bd4611a9409bbdf53015c8&cid=a0e5d4fe7220c501&ithint=folder&migratedtospo=true", "https://1drv.ms/f/c/a0e5d4fe7220c501/El-2As-gxMhIoewcdhQQDD8BluJtLj3N-FuQcQNdNwfKyg?e=F5UXiO", "https://1drv.ms/f/c/a0e5d4fe7220c501/Emh3awOG_65ApeiaLUO9dwoBDd1o1Padh8Kjrs2LyXanRw?e=ih2Cd1", "https://1drv.ms/f/c/a0e5d4fe7220c501/Et_-gWUjPp1BmRtPUKWHMRYBYv5sHZidyXS2A4d84IzXqg?e=FNehho", "https://1drv.ms/f/c/a0e5d4fe7220c501/EtNESq1VQ0REpwMmryy95QUBK5ArjstMcCsBo3uye5Zevw?e=qWdhiD", "https://1drv.ms/f/c/a0e5d4fe7220c501/Eg22sU1wlKxClu1md6813G8BfrnP7r5jBhXEvpEKuQ4Q2Q?e=7m5gSa", "https://1drv.ms/f/c/a0e5d4fe7220c501/EsqJC4IoPSBDipGf1-XTCwEBQNACPzKcYYnJC8CwXaL3ww?e=jKaHvq", "https://onedrive.live.com/?id=A0E5D4FE7220C501%21s5b8f60feb29940248fd4ed74dfb39f93&cid=a0e5d4fe7220c501&ithint=folder&migratedtospo=true", "https://1drv.ms/f/c/a0e5d4fe7220c501/EgSt-q_XwQdDtkQtojctRqYB3cqlca5DcT6EbyNg3ZrbWg?e=jdK6Wa", "https://1drv.ms/f/c/a0e5d4fe7220c501/Ehw5-wSQ0ntBnlBic-3yCS0B6IJkX3MAxFBT4fD-9D6OXQ?e=caLC7n", "https://1drv.ms/f/c/a0e5d4fe7220c501/EjNKI1nMXIFFrezPFGAD5hEBfb_GREXd5LK9odSWAGg9yQ?e=zLqRy3"];
const iconUrls = ["https://api.iconify.design/tabler/handshake.svg?color=white", "https://api.iconify.design/tabler/briefcase.svg?color=white", "https://api.iconify.design/tabler/building-skyscraper.svg?color=white", "https://api.iconify.design/tabler/files.svg?color=white", "https://api.iconify.design/tabler/heart.svg?color=white", "https://api.iconify.design/tabler/medical-cross.svg?color=white", "https://api.iconify.design/tabler/receipt-2.svg?color=white", "https://api.iconify.design/tabler/shield-lock.svg?color=white", "https://api.iconify.design/tabler/lock.svg?color=white", "https://api.iconify.design/tabler/scale.svg?color=white", "https://api.iconify.design/tabler/home.svg?color=white", "https://api.iconify.design/tabler/currency-dollar.svg?color=white", "https://api.iconify.design/tabler/users.svg?color=white", "https://api.iconify.design/tabler/rocket.svg?color=white", "https://api.iconify.design/tabler/heart-handshake.svg?color=white", "https://api.iconify.design/tabler/palette.svg?color=white", "https://api.iconify.design/tabler/utensils.svg?color=white", "https://api.iconify.design/tabler/id.svg?color=white", "https://api.iconify.design/tabler/shopping-cart.svg?color=white", "https://api.iconify.design/tabler/calendar.svg?color=white", "https://api.iconify.design/tabler/car.svg?color=white", "https://api.iconify.design/tabler/flask-2.svg?color=white", "https://api.iconify.design/tabler/toolbox.svg?color=white", "https://api.iconify.design/tabler/building-bank.svg?color=white", "https://api.iconify.design/tabler/building.svg?color=white", "https://api.iconify.design/tabler/messages.svg?color=white", "https://api.iconify.design/tabler/plug.svg?color=white", "https://api.iconify.design/tabler/tools.svg?color=white", "https://api.iconify.design/tabler/leaf.svg?color=white"];
const palette = ["#22c55e", "#38bdf8", "#f59e0b", "#60a5fa", "#0284c7", "#fbbf24", "#94a3b8", "#f59e0b", "#10b981", "#ef4444", "#3b82f6", "#22c55e", "#06b6d4", "#f97316", "#f43f5e", "#8b5cf6", "#fb7185", "#0ea5e9", "#16a34a", "#f59e0b", "#60a5fa", "#06b6d4", "#64748b", "#ea580c", "#22c55e", "#f97316", "#0891b2", "#475569", "#84cc16"];
const FALLBACK_ICON = "https://api.iconify.design/tabler/folder.svg?color=white";

function normalizeLabel(label) { return label.replace(/^\d+\.\s*/, '').trim(); }
function loadFavs() { try { return new Set(JSON.parse(localStorage.getItem('favorites')||'[]')); } catch { return new Set(); } }
function saveFavs(f) { localStorage.setItem('favorites', JSON.stringify([...f])); }

function render(list) {
  const grid = document.getElementById('grid');
  const favs = loadFavs();
  const favList = list.filter(l => favs.has(l));
  const otherList = list.filter(l => !favs.has(l));
  const finalList = [...favList,...otherList];
  grid.innerHTML = '';

  finalList.forEach(label => {
    const name = normalizeLabel(label);
    const idx = departments.indexOf(label);
    const a = document.createElement('a');
    a.href = urls[idx] || '#'; a.target = '_blank'; a.rel = 'noopener';
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
  const gs = document.getElementById('globalSearch'); if (gs) gs.addEventListener('input', e => { document.getElementById('search').value = e.target.value; render(getFilteredSorted()); });
  render(departments);
});
