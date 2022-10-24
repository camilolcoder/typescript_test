import { series_m } from "./data";
import { Serie } from "./serie";

let seriesTbody: HTMLElement = document.getElementById("series")!;
const avgSeas: HTMLElement = document.getElementById("avg_seasons")!;
const btnSerieTitle: HTMLElement = document.getElementById("serie_title")!;
const btnSerieDes: HTMLElement = document.getElementById("description")!;
const btnSerieLink: HTMLElement = document.getElementById("link_serie")!;

renderSeriesInTable(series_m);

avgSeas.innerHTML = `${getAvgSeasons(series_m)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.pos}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAvgSeasons(series: Serie[]): number {
    let total_avg: number = 0;
    series.forEach((serie) => total_avg = (total_avg + serie.seasons)/2);
    return total_avg;
  }

