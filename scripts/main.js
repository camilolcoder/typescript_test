import { series_m } from "./data";
var seriesTbody = document.getElementById("series");
var avgSeas = document.getElementById("avg_seasons");
renderSeriesInTable(series_m);
avgSeas.innerHTML = "".concat(getAvgSeasons(series_m));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.pos, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var total_avg = 0;
    series.forEach(function (serie) { return total_avg = (total_avg + serie.seasons) / 2; });
    return total_avg;
}
