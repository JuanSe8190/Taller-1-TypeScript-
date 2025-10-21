
import { series } from './data.js';
import { Serie } from './Serie.js';

const tbody = document.querySelector<HTMLTableSectionElement>('#series-body')!;
const avgEl = document.querySelector<HTMLSpanElement>('#average')!;

function renderTable(items: Serie[]) {
  tbody.innerHTML = items
    .map(
      (s) => `
      <tr>
        <td>${s.id}</td>
        <td><a href="${s.link}" target="_blank" rel="noopener">${s.name}</a></td>
        <td>${s.channel}</td>
        <td>${s.seasons}</td>
      </tr>`
    )
    .join('');
}

function getAverageSeasons(items: Serie[]) {
  if (items.length === 0) return 0;
  const total = items.reduce((acc, s) => acc + s.seasons, 0);
  
  return Math.round(total / items.length);
}

renderTable(series);
avgEl.textContent = String(getAverageSeasons(series));
