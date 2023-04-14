import { Serie } from './serie.js';

import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avSeasons: HTMLElement = document.getElementById("av-seasons")!;

renderCoursesInTable(dataSeries);

avSeasons.innerHTML = `${getAverageSeasons(dataSeries)}`

function renderCoursesInTable(series: Serie[]): void {
    console.log('Desplegando cursos');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                            <td>${serie.name}</td>
                            <td>${serie.distributor}</td>
                            <td>${serie.seasons}</td>
                            <td>${serie.description}</td>
                            <td><a href=${serie.link}>${serie.link}</a></td>
                            <td><img src = ${serie.image} style="width: 100px"></td>`;
        seriesTbody.appendChild(trElement);
    });
    let averageSeasons = getAverageSeasons(series);
    let trElement = document.createElement("tr");
    let tdElement = trElement.insertCell();
    tdElement.colSpan = 7;
    tdElement.innerText = "Seasons average: " + averageSeasons;
    seriesTbody.appendChild(trElement);
}
 
function getAverageSeasons(series: Serie[]): number {
  let totalCredits: number = 0;
  series.forEach((serie) => totalCredits = totalCredits + serie.seasons);
  let average: number = totalCredits / series.length;
  return average;
}

function clearCoursesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
        seriesTbody.removeChild(seriesTbody.firstChild);
    }
  }
}