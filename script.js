const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener("click" , ()=>{
        nav.classList.add("active");
        document.body.classList.add('overlay');
    })
};
if(close){
    close.addEventListener("click" , ()=>{
        nav.classList.remove("active");
        document.body.classList.remove('overlay');
    })
};