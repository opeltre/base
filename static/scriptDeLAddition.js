function additionne () {
    
    var termes = ['a','b']
        .map(selectionne)
        .map(input => +input.value);
    
    ajax()
        .post('/addition', JSON.stringify(termes))
        .then(afficheResultat);

    function selectionne (name) {
        return  document.querySelector(`#addition *[name=${name}]`)
    }
    
    function afficheResultat (somme) {
        selectionne('c').innerHTML = somme;
    }

    console.log(termes.reduce((a,b) => a+b));

}

/* Ca c'est vraiment la methode du full control
 * 
 * C'est bien de prendre l'habitude d'emballer ses fonctions dans d'autres fonctions
 * pour pas polluer l'espace de noms et rester modulaire. 
 *
 * Pour aller plus loin: vas voir modulePattern.js :)
 */
