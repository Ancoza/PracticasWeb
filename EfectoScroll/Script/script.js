//Variables
let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountainFront = document.getElementById('mountain-front');
let mountainsBehind = document.getElementById('mountains_behind');
var text = document.getElementById("text");
let btn = document.getElementById('btn');
let header = document.querySelector('header');

//EventoScroll
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    stars.style.left = values(value, 0.25);
    moon.style.top = values(value, 1.05);
    mountainsBehind.style.top = values(value, 1.2);;

    text.style.marginRight = values(value, 4);
    text.style.marginTop = values(value, 1.2);
    
    btn.style.marginTop = values(value, 1.5);

    header.style.top = values(value, 0.8);
})

function values(num, num2){
    return num * num2 + 'px'
}
