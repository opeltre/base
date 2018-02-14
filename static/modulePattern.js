/* **Le fin du fin du js**
 * 
 * Ca date d'avant les classes et c'est plus puissant, 
 * le constructeur pouvant retourner une fonction, qui est aussi un objet en js.
 */

function Constructeur() {
    
    // attributs en variables locales
    // (call stack de la fonction `my`, garde en memoire)
    var un_attribut = 0
    
    // juste un objet local 
    var self = {                   
        autre_attribut: 1
    }
    
    // l'instance
    function my (...args) {         
        return un_attribut + self.autre_attribut;
    }
    
    // ses methodes
    my.methode = function (x) {
        un_attribut = x;
        return my
    }
    
     // un accesseur getter/setter a la fois et chainable
    my.autre_methode = (...args) => {
        if (!args.length) return self.autre_attribut; 
        self.autre_attribut = args[0];
        return my;
    }
    
    // retourne l'instance
    return my;
}

var obj = Constructeur()
    .methode(2)
    .autre_methode(3)

obj();
//--> 5

obj.autre_methode()
//--> 3

/*
 *  Si ca te plait:
 *  vas voir une petite automatisation des accesseurs chainables :p
 *  u-press/surf/lib/getset.js 
 *  (juste la 1e fonction, getset!)
 */ 
