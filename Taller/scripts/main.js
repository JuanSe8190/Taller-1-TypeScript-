import { series } from './data.js';
var tbody = document.getElementById('series-body');
var avgSpan = document.getElementById('avg');
listarSerie(series);
calcularPromedioTemporadas(series);
function listarSerie(series) {
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var s = series_1[_i];
        // Crear fila
        var tr = document.createElement('tr');
        tr.innerHTML = "<td>".concat(s.id, "</td>\n                            <td \">").concat(s.name, "</td>\n                            <td>").concat(s.channel, "</td>\n                            <td>").concat(s.seasons, "</td>");
        tbody.appendChild(tr);
    }
}
function calcularPromedioTemporadas(series) {
    var total = 0, count = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var s = series_2[_i];
        total += s.seasons;
        count++;
    }
    var promedio = count ? total / count : 0;
    avgSpan.textContent = promedio.toFixed();
}
