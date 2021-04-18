var menu = document.getElementById("menu-list");
var menubtn = document.getElementById("menu-btn");
var menulnk = document.getElementsByClassName("menu-link");
var iframe = document.getElementsByClassName("zola-registry-iframe");
//var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

var weddingDate = 'May 01, 2022 00:00:00';

// let togglestate = () =>{

// for (var i = 0; i < menulnk.length; i++) {
//   menulnk[i].addEventListener("click", (e) => {
//     menubtn.classList.toggle("btn-open");
//     menu.classList.toggle("open");
//   });
// }
let togglestate = () =>{
    menubtn.classList.toggle("btn-open");
    menu.classList.toggle("open");
}
let countdown = date =>{
    console.log(date);
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    let weddingDay = new Date(date).getTime();
    
    let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = weddingDay - now;
    document.getElementById('days').innerText = Math.floor(distance/(day));
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    },0)
}
for (var i = 0; i < menulnk.length; i++) {
  menulnk[i].addEventListener("click", (e) => {
      togglestate()
  });
}
menubtn.addEventListener("click", (e) => {
    togglestate()
});

countdown(weddingDate);