var menu = document.getElementById("menu-list");
var menubtn = document.getElementById("menu-btn");
var menulnk = document.getElementsByClassName("menu-link");
var iframe = document.getElementsByClassName("zola-registry-iframe");
//var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

var weddingDate = 'May 01, 2022 00:00:00';

let togglestate = () =>{

for (var i = 0; i < menulnk.length; i++) {
  menulnk[i].addEventListener("click", (e) => {
    menubtn.classList.toggle("btn-open");
    menu.classList.toggle("open");
};
let countdown = date =>{
    console.log(date);

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


