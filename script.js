
const _d = (window.__DEPTS__||[]), _u = (window.__URLS__||[]), _s = (window.__SVGS__||[]);
document.write(''); // ensure script executes after globals

const departments = (window.__DEPTS__||["1. Diplomacy", "02. Business", "03. Major Projects", "04. Controlled Documents", "05. Anju Wifey", "06. Health, Fitness & Emergency", "07. Benefits, Insurance & Taxation", "08. Family Safety & Intelligence", "09. Security", "10. Law", "11. Asset Management & Properties", "12. Finance", "13. Social Committee & Family", "14. Dreams & Exploration", "15. Philanthropy", "16. Art, Film, Music & Culture", "17. Food", "18. Immigration", "19. Procurement Department", "20. Daily Logs & Planner", "21. Automobile & Transportation", "22. Science Division", "23. Employment Resources", "24. Archives & Museum", "25. Housing & Urban Development", "26. Communications", "27. Utilities", "28. Public Works", "29. Environmental & Sustainability"] );
const urls = (window.__URLS__||["https://onedrive.live.com/?id=A0E5D4FE7220C501%21seee7328e7e9c4f578275995dc4435cac&cid=a0e5d4fe7220c501&ithint=folder&migratedtospo=true", "https://1drv.ms/f/c/a0e5d4fe7220c501/EnbvFoCubAFAmG6BycYyoAgB8aFRAQe_PJnIV5DTEX4uQw?e=ZX6e9p", "https://1drv.ms/f/c/a0e5d4fe7220c501/Egy4JTjVZB9Hj_fHV7WZI7wBS8gHOM4JCibmCIxUNXg3JA?e=PXsh3L", "https://1drv.ms/f/c/a0e5d4fe7220c501/EvDHgj4UV-1AuWKV5zz3rvcBIHtiG880gsP5yLSF6WYIrg?e=I78DJN", "https://1drv.ms/f/c/a0e5d4fe7220c501/Eg2wbt5jdbVLiHPI_-9b_2ABm5oBWIrC-y2yBd8qFfgj-Q?e=GxQpNJ", "https://1drv.ms/f/c/a0e5d4fe7220c501/Evxve7efbGNMrqOTk-cOXwEB5deNiFdZgW2bwfcWUtQkAw?e=uIugW5", "https://1drv.ms/f/c/a0e5d4fe7220c501/EiQBxfpY5CFFhIAu2bJuBKkBsJTsWqyxd-drZ0H848l7dQ?e=lhg9Bz", "https://1drv.ms/f/c/a0e5d4fe7220c501/ElHiLq5_CmhFi65PdCNgBhoBkdCbO6dydhFUjYg0wpXLSw?e=3QAUr8", "https://1drv.ms/f/c/a0e5d4fe7220c501/Evlz2w0hdHZEkhvu6pp49tsB5XxNFS_Cm5Py1mj-ZGna4Q?e=PVLdIf", "https://1drv.ms/f/c/a0e5d4fe7220c501/EnoSW_PPcdJMqcJdueYl_bIBHCqPEGWH-E2Hv8hTdLOsww?e=Yhq7uh", "https://1drv.ms/f/c/a0e5d4fe7220c501/EvjRP4Cp5vdOtjuDduOTnY4BqqdZS89xlRNOW6EksgKTyg?e=sQNZcc", "https://1drv.ms/f/c/a0e5d4fe7220c501/EtUoQswyBFVKpJZZOdhFhbgBTxeAVCpPR-qlECUP49uCBQ?e=hbSTH9", "https://1drv.ms/f/c/a0e5d4fe7220c501/EjVdjKqejkZNnmslISEuyrYBu0yYvSBauQMOjDForXt1rQ?e=dSEbTf", "https://1drv.ms/f/c/a0e5d4fe7220c501/EgnvLw10WE5HiKn43P__UgEBI99utn3D4olx_VIDnOGWIA?e=jFXhvQ", "https://1drv.ms/f/c/a0e5d4fe7220c501/Ek3hIqqFIn9IidmwCDErKfUBtgyu0F-yXs54_yhINHe11w?e=1ylM7D", "https://1drv.ms/f/c/a0e5d4fe7220c501/En55UIzWlHdMq_kPMnxb27wBMz0IlWLYhc1znC48EnQz2A?e=tAIbjq", "https://1drv.ms/f/c/a0e5d4fe7220c501/EtJyo9UnN3RHhmIEw0j-CxcBJRD3EOF8gIWunZUUvFgkBQ?e=Q2v5aD", "https://1drv.ms/f/c/a0e5d4fe7220c501/ErCNHmpsf0tFo9KeXBwLcU0BJRR3SBGYFD9gnxKsOmURdA?e=6arJ12", "https://onedrive.live.com/?id=A0E5D4FE7220C501%21s905ba87005bd4611a9409bbdf53015c8&cid=a0e5d4fe7220c501&ithint=folder&migratedtospo=true", "https://1drv.ms/f/c/a0e5d4fe7220c501/El-2As-gxMhIoewcdhQQDD8BluJtLj3N-FuQcQNdNwfKyg?e=F5UXiO", "https://1drv.ms/f/c/a0e5d4fe7220c501/Emh3awOG_65ApeiaLUO9dwoBDd1o1Padh8Kjrs2LyXanRw?e=ih2Cd1", "https://1drv.ms/f/c/a0e5d4fe7220c501/Et_-gWUjPp1BmRtPUKWHMRYBYv5sHZidyXS2A4d84IzXqg?e=FNehho", "https://1drv.ms/f/c/a0e5d4fe7220c501/EtNESq1VQ0REpwMmryy95QUBK5ArjstMcCsBo3uye5Zevw?e=qWdhiD", "https://1drv.ms/f/c/a0e5d4fe7220c501/Eg22sU1wlKxClu1md6813G8BfrnP7r5jBhXEvpEKuQ4Q2Q?e=7m5gSa", "https://1drv.ms/f/c/a0e5d4fe7220c501/EsqJC4IoPSBDipGf1-XTCwEBQNACPzKcYYnJC8CwXaL3ww?e=jKaHvq", "https://onedrive.live.com/?id=A0E5D4FE7220C501%21s5b8f60feb29940248fd4ed74dfb39f93&cid=a0e5d4fe7220c501&ithint=folder&migratedtospo=true", "https://1drv.ms/f/c/a0e5d4fe7220c501/EgSt-q_XwQdDtkQtojctRqYB3cqlca5DcT6EbyNg3ZrbWg?e=jdK6Wa", "https://1drv.ms/f/c/a0e5d4fe7220c501/Ehw5-wSQ0ntBnlBic-3yCS0B6IJkX3MAxFBT4fD-9D6OXQ?e=caLC7n", "https://1drv.ms/f/c/a0e5d4fe7220c501/EjNKI1nMXIFFrezPFGAD5hEBfb_GREXd5LK9odSWAGg9yQ?e=zLqRy3"] );
const svgs = (window.__SVGS__||["<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 12l4 4 12-12M4 18h8M14 6h6\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 8h16v10H4z M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 20h16M7 20V10h4v10M15 20V4h4v16\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 4h7l4 4v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 0v4h4 M9 12h6\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 21s-7-4.8-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.2-7 10-7 10z\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 4h12v16H6z M8.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 11l-9-9\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 4a8 8 0 1 0 8 8h-4l3-3 3 3h-4A8 8 0 0 1 12 4z\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 11V8a5 5 0 1 1 10 0v3M6 11h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7z\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 5l4 9H8l4-9zm-8 9h16M12 5v14\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 10l9-6 9 6v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z M9 20v-6h6v6\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 8h16M6 12h12M8 16h8M12 4v16\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 18h16M6 14l3-3 3 3 3-3 3 3\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 2v7M9 10l3 4 3-4M5 20h14\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 13l8-3 8 3M12 10V4\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 19c1.5-3 4-5 7-6 3 1 5.5 3 7 6M8 9h.01M12 7h.01M10 12h.01\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 3v18M10 3v5M14 3a4 4 0 0 1 0 8h-1v10\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 5h12v14H6z M9 9h6M9 13h6\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 6h3l2 8h8l2-5H9M10 18a2 2 0 1 0 0 .01M16 18a2 2 0 1 0 0 .01\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 4v3M17 4v3M5 8h14v10H5z M8 12h3M13 12h3\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 16l2-5h10l2 5M5 16h14M7 20h2M15 20h2\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 3v6l-4 7h14l-4-7V3M8 19h8\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 9h16v10H4z M8 9V7h8v2\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 7h16l-2 12H6L4 7z M7 7V5h10v2\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 11l9-7 9 7M6 21V11h12v10\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 10l10-5v14L4 14v-4z M18 9v6\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 3v8M15 3v8M6 15v6h12v-6\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 19l7-14 7 14M8 14h8\"/></svg>", "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 19c6 0 12-6 12-12-6 0-12 6-12 12z M7 15c2-2 5-3 8-3\"/></svg>"] );

// favorites stored as a set of labels
function loadFavs() { try { return new Set(JSON.parse(localStorage.getItem('favorites')||'[]')); } catch { return new Set(); } }
function saveFavs(favs) { localStorage.setItem('favorites', JSON.stringify([...favs])); }

const grid = () => document.getElementById('grid');
const searchEl = () => document.getElementById('search');
const sortSel = () => document.getElementById('sort');
const globalSearch = () => document.getElementById('globalSearch');

function normalizeLabel(label) { return label.replace(/^\d+\.\s*/, '').trim(); }

function render(list) {
  const g = grid(); g.innerHTML = '';
  const favs = loadFavs();

  // favorites first (stable), then rest
  const favList = list.filter(l => favs.has(l));
  const otherList = list.filter(l => !favs.has(l));
  const finalList = [...favList, ...otherList];

  finalList.forEach((label) => {
    const name = normalizeLabel(label);
    const origIdx = departments.indexOf(label);
    const a = document.createElement('a');
    a.href = urls[origIdx] || '#'; a.target = '_blank'; a.rel = 'noopener';
    a.className = 'card';

    const star = document.createElement('span');
    star.className = 'star' + (favs.has(label) ? ' active' : '');
    star.title = favs.has(label) ? 'Unpin' : 'Pin to top';
    star.textContent = '★';
    star.addEventListener('click', (ev) => {
      ev.preventDefault(); ev.stopPropagation();
      const favs2 = loadFavs();
      if (favs2.has(label)) favs2.delete(label); else favs2.add(label);
      saveFavs(favs2);
      render(getFilteredSorted());
    });

    a.innerHTML = `
      <div class="card-top">
        <div class="icon-badge">${svgs[origIdx]}</div>
        <div>
          <div class="card-num">${label.split(' ')[0]}</div>
          <div class="card-name">${name}</div>
          <div class="card-meta">Open in OneDrive</div>
          <div class="pills">
            <span class="pill">Dept</span>
            <span class="pill">Life City</span>
          </div>
        </div>
      </div>
    `;
    a.querySelector('.card-top').appendChild(star);
    g.appendChild(a);
  });
}

function getFilteredSorted() {
  const q = (searchEl().value || '').toLowerCase().trim();
  let list = departments.filter(d => normalizeLabel(d).toLowerCase().includes(q));
  if (sortSel().value === 'alpha') list = [...list].sort((a,b)=>normalizeLabel(a).localeCompare(normalizeLabel(b)));
  else list = [...list];
  return list;
}

function onChange() { render(getFilteredSorted()); }

document.addEventListener('DOMContentLoaded', () => {
  searchEl().addEventListener('input', onChange);
  sortSel().addEventListener('change', onChange);
  globalSearch().addEventListener('input', (e)=>{ searchEl().value = e.target.value; onChange(); });
  render(departments);
});
