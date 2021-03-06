// /surf/ajax.js :

/* synopsis:
 * >    ajax().method(url, data) ---> Promise
 *
 * usage:
 * >    ajax().get(url).then(res => {...})
 * >    ajax().post(url,data).then(res => {...});
 */

function ajax () {
    
    var my = {
        xhr: new XMLHttpRequest(),
        data: null
    };
    
    ['get','post','put','move','delete'].forEach(method => {
       my[method] = (url, data) => {
           my.xhr.open(method.toUpperCase(), url);
           my.xhr.setRequestHeader('Content-Type','application/json');
           my.data = data || null;
           return new Promise(resolve => my.then(resolve));
       };
    });
    
    my.then = f => {
        my.xhr.onreadystatechange = () => my.ok() && f(my.xhr.responseText);
        my.xhr.send(my.data);
    }
    
    my.ok = () => (my.xhr.readyState === 4 && my.xhr.status === 200);
    
    //retro del
    my.del = my.delete;
   
    return my;
}
