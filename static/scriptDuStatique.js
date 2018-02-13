ajax()
    .get('/ls')
    .then(JSON.parse)
    .then(affichageAvecD3); 

function affichageAvecD3 (liens) {
    var divDesLiens = d3.select('#le-div-des-liens');
    divDesLiens
        .append('h3').html('$ls static/');
    divDesLiens
        .selectAll('.lien').data(liens) //lie l'array liens a la selection
        .enter().append('div')		//cree un div pour chaque lien non
            .attr('class', 'lien')	//represente (tous)
            .call(vizDuLien);	
}

function vizDuLien (div) {
    div.append('a')
        .attr('href', d => '/static/' + d)	//l'argument d parcourt la data
        .html(d => d)				//c.a.d. l'array liens
        .style('text-decoration','none');
}
