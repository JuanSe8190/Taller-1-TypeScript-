import { series } from './data.js';
var tbody = document.getElementById('series-body');
var avgSpan = document.getElementById('avg');
var detail = document.getElementById('detail');
listarSerie(series);
calcularPromedioTemporadas(series);
function listarSerie(series) {
    var _loop_1 = function (s) {
        // Crear fila
        var tr = document.createElement('tr');
        tr.innerHTML = "<td>".concat(s.id, "</td>\n                            <td \">").concat(s.name, "</td>\n                            <td>").concat(s.channel, "</td>\n                            <td>").concat(s.seasons, "</td>");
        tr.addEventListener('click', function () { return mostrarDetalle(s); });
        tbody.appendChild(tr);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var s = series_1[_i];
        _loop_1(s);
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
function mostrarDetalle(s) {
    detail.innerHTML = "\n    <div class=\"card shadow-sm\">\n      <img src=\"".concat(s.imageUrl, "\" class=\"card-img-top\" alt=\"Poster de ").concat(s.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(s.name, "</h5>\n        <p class=\"card-text\">").concat(s.description, "</p>\n        <p class=\"card-text\">\n          <small class=\"text-body-secondary\">\n            <strong>Canal:</strong> ").concat(s.channel, " &nbsp;\u2022&nbsp;\n            <strong>Temporadas:</strong> ").concat(s.seasons, "\n          </small>\n        </p>\n        <a href=\"").concat(s.link, "\" target=\"_blank\" rel=\"noopener\"\n           class=\"btn btn-primary\">Ver m\u00E1s</a>\n      </div>\n    </div>\n  ");
}
