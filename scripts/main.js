import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var avSeasons = document.getElementById("av-seasons");
renderCoursesInTable(dataSeries);
avSeasons.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderCoursesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.name, "</td>\n                            <td>").concat(serie.distributor, "</td>\n                            <td>").concat(serie.seasons, "</td>\n                            <td>").concat(serie.description, "</td>\n                            <td><a href=").concat(serie.link, ">").concat(serie.link, "</a></td>\n                            <td><img src = ").concat(serie.image, " style=\"width: 100px\"></td>");
        seriesTbody.appendChild(trElement);
    });
    var averageSeasons = getAverageSeasons(series);
    var trElement = document.createElement("tr");
    var tdElement = trElement.insertCell();
    tdElement.colSpan = 7;
    tdElement.innerText = "Seasons average: " + averageSeasons;
    seriesTbody.appendChild(trElement);
}
function getAverageSeasons(series) {
    var totalCredits = 0;
    series.forEach(function (serie) { return totalCredits = totalCredits + serie.seasons; });
    var average = totalCredits / series.length;
    return average;
}
function clearCoursesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
