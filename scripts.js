// $( document ).ready(function() 
// {
//     Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
//     Galleria.run('.galleria');
// });

(function() {
//    Galleria.run('.galleria');
    console.log(document.getElementsByClassName('galleria'))
    if  (document.getElementsByClassName('galleria').length != 0)
    {
        console.log('init');
        Galleria.run('.galleria');
    }
}());

