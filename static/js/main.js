document.getElementById("hamburger").addEventListener("click", function(event)
{
  event.preventDefault();
  document.querySelector("nav").classList.toggle("closed");
}, false);

document.getElementById("language").addEventListener("change", function()
{
  window.location = this.value;
}, false);
