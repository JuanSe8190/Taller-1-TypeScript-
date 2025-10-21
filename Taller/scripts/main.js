import { series } from './data.js';
var tbody = document.getElementById('series-body');
var avgSpan = document.getElementById('avg');
var total = 0;
var count = 0;
for (var _i = 0, _a = series; _i < _a.length; _i++) {
    var s = _a[_i];
    // Crear fila
    var tr = document.createElement('tr');
    var tdId = document.createElement('td');
    tdId.textContent = String(s.id);
    tr.appendChild(tdId);
    var tdName = document.createElement('td');
    tdName.textContent = s.name;
    tr.appendChild(tdName);
    var tdChannel = document.createElement('td');
    tdChannel.textContent = s.channel;
    tr.appendChild(tdChannel);
    var tdSeasons = document.createElement('td');
    tdSeasons.textContent = String(s.seasons);
    tr.appendChild(tdSeasons);
    // Agregar a la tabla
    tbody.appendChild(tr);
    // Acumular para promedio
    total += s.seasons;
    count += 1;
}
var average = count ? total / count : 0;
avgSpan.textContent = average.toFixed(2);
