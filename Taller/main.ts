

import { Serie } from './Serie.js';
import { series } from './data.js';

let tbody = document.getElementById('series-body') as HTMLTableSectionElement;
let avgSpan = document.getElementById('avg') as HTMLSpanElement;
let detail = document.getElementById('detail') as HTMLDivElement;
listarSerie(series);
calcularPromedioTemporadas(series);

function listarSerie(series:Serie[]):void{
  for (const s of series) {
  // Crear fila
  const tr = document.createElement('tr');

  tr.innerHTML = `<td>${s.id}</td>
                            <td ">${s.name}</td>
                            <td>${s.channel}</td>
                            <td>${s.seasons}</td>`;
  tr.addEventListener('click', () => mostrarDetalle(s));
  tbody.appendChild(tr);
 

  }
}

function calcularPromedioTemporadas(series: Serie[]): void {
  let total = 0, count = 0;

  for (const s of series) {
    total += s.seasons;
    count++;
  }

  let promedio = count ? total / count : 0;
  avgSpan.textContent = promedio.toFixed();
}

function mostrarDetalle(s: Serie): void {
  
  detail.innerHTML = `
    <div class="card shadow-sm">
      <img src="${s.imageUrl}" class="card-img-top" alt="Poster de ${s.name}">
      <div class="card-body">
        <h5 class="card-title">${s.name}</h5>
        <p class="card-text">${s.description}</p>
        <p class="card-text">
          <small class="text-body-secondary">
            <strong>Canal:</strong> ${s.channel} &nbsp;•&nbsp;
            <strong>Temporadas:</strong> ${s.seasons}
          </small>
        </p>
        <a href="${s.link}" target="_blank" rel="noopener"
           class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
}

