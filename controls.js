var menu = document.getElementById("menu-list");
var menubtn = document.getElementById("menu-btn");
var menulnk = document.getElementsByClassName("menu-link");
var iframe = document.getElementsByClassName("zola-registry-iframe");
//var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

for (var i = 0; i < menulnk.length; i++) {
  menulnk[i].addEventListener("click", (e) => {
    menubtn.classList.toggle("btn-open");
    menu.classList.toggle("open");
  });
}
menubtn.addEventListener("click", (e) => {
  menubtn.classList.toggle("btn-open");
  menu.classList.toggle("open");
});
menulnk.addEventListener("click", (e) => {
  menubtn.classList.toggle("btn-open");
  menu.classList.toggle("open");
});
