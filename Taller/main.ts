

import { Serie } from './Serie.js';
import { series } from './data.js';

const tbody = document.getElementById('series-body') as HTMLTableSectionElement;
const avgSpan = document.getElementById('avg') as HTMLSpanElement;

let total = 0;
let count = 0;

for (const s of series as Serie[]) {
  // Crear fila
  const tr = document.createElement('tr');

  const tdId = document.createElement('td');
  tdId.textContent = String(s.id);
  tr.appendChild(tdId);

  const tdName = document.createElement('td');
  tdName.textContent = s.name;
  tr.appendChild(tdName);

  const tdChannel = document.createElement('td');
  tdChannel.textContent = s.channel;
  tr.appendChild(tdChannel);

  const tdSeasons = document.createElement('td');
  tdSeasons.textContent = String(s.seasons);
  tr.appendChild(tdSeasons);

  // Agregar a la tabla
  tbody.appendChild(tr);

  // Acumular para promedio
  total += s.seasons;
  count += 1;
}

const average = count ? total / count : 0;
avgSpan.textContent = average.toFixed(2);
