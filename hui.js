window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        var hui = document.getElementById('hui');hui.style.transition = "1s"; hui.style.opacity = "1";
    } else {
      var hui = document.getElementById('hui');hui.style.transition = "1s"; hui.style.opacity = "0";  
    }
}
function hui() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}