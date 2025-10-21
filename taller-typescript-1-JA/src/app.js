"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
var tbody = document.getElementById('series-body');
var avgSpan = document.getElementById('average');
function renderTable(items) {
    if (!tbody)
        return;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var s = items_1[_i];
        var tr = document.createElement('tr');
        var tdId = document.createElement('td');
        tdId.textContent = String(s.id);
        var tdName = document.createElement('td');
        tdName.textContent = s.name;
        var tdChannel = document.createElement('td');
        tdChannel.textContent = s.channel;
        var tdSeasons = document.createElement('td');
        tdSeasons.textContent = String(s.seasons);
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdChannel);
        tr.appendChild(tdSeasons);
        tbody.appendChild(tr);
    }
}
function getAverageSeasons(items) {
    if (items.length === 0)
        return 0;
    var total = 0;
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
        var s = items_2[_i];
        total = total + s.seasons;
    }
    return Math.round((total / items.length) * 100) / 100;
}
function renderAverage(avg) {
    if (!avgSpan)
        return;
    avgSpan.textContent = String(avg);
}
renderTable(data_js_1.series);
renderAverage(getAverageSeasons(data_js_1.series));
