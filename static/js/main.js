document.getElementById("hamburger").addEventListener("click", function()
{
  document.querySelector("nav").classList.toggle("closed");
}, false);

document.querySelector("nav").classList.toggle("closed");

document.getElementById("language").addEventListener("change", function (event)
{
  window.location = this.value;
}, false);
