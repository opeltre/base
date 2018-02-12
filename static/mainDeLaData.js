ajax().get('/data')
    .then(JSON.parse)
    .then(affichageDeLaData);

function affichageDeLaData (data) {
    data
        .forEach( d => {
            document
                .getElementById('le-div-de-la-data')
                .appendChild(vizDuDatum(d));
        });
}

function vizDuDatum(d) {
    var node = document.createElement('div');
    node.style.border = '1px solid black';
    node.style.margin = '2px';
    Object.keys(d).forEach(k => {
        var cle = document.createElement('strong');
        cle.innerHTML = k + ': ';
        var valeur = document.createElement('em');
        valeur.innerHTML = d[k] + '<br/>';
        node.appendChild(cle)
        node.appendChild(valeur)
    });
    return node;
}
