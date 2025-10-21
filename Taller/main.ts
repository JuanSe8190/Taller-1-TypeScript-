

import { Serie } from './Serie.js';
import { series } from './data.js';

let tbody = document.getElementById('series-body') as HTMLTableSectionElement;
let avgSpan = document.getElementById('avg') as HTMLSpanElement;
listarSerie(series);


function listarSerie(series:Serie[]):void{
  for (const s of series) {
  // Crear fila
  const tr = document.createElement('tr');

  tr.innerHTML = `<td>${s.id}</td>
                            <td ">${s.name}</td>
                            <td>${s.channel}</td>
                            <td>${s.seasons}</td>`;
  tbody.appendChild(tr);
 

  }

  
}




