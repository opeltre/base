ajax()
    .get('/ls')
    .then(JSON.parse)
    .then(affichageAvecD3); 

function affichageAvecD3 (liens) {
    var divDesLiens = d3.select('#le-div-des-liens');
    divDesLiens
        .append('h3').html('$ls static/');
    divDesLiens
        .selectAll('.lien').data(liens)
        .enter().append('div')
            .attr('class', 'lien')
            .call(vizDuLien);
}

function vizDuLien (div) {
    div.append('a')
        .attr('href', d => '/static/' + d)
        .html(d => d)
        .style('text-decoration','none');
}
