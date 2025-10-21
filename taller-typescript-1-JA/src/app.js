"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
const Serie_js_1 = require("./Serie.js");
const tbody = document.getElementById('series-body');
const avgSpan = document.getElementById('average');
function renderTable(items) {
    if (!tbody)
        return;
    for (const s of items) {
        const tr = document.createElement('tr');
        const tdId = document.createElement('td');
        tdId.textContent = String(s.id);
        const tdName = document.createElement('td');
        tdName.textContent = s.name;
        const tdChannel = document.createElement('td');
        tdChannel.textContent = s.channel;
        const tdSeasons = document.createElement('td');
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
    let total = 0;
    for (const s of items) {
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
//# sourceMappingURL=app.js.map