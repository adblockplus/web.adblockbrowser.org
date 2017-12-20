document.getElementById("language").addEventListener("change", function()
{
  window.location = this.value;
}, false);

document.querySelector("#email-me a").addEventListener("click", function(event)
{
  event.preventDefault();
  document.body.setAttribute("class", "modal");
}, false);

document.getElementById("modal-close").addEventListener("click", function(event)
{
  event.preventDefault();
  document.querySelector("#request-links input").value = "";
  document.body.removeAttribute("class");
  document.getElementById("modal").removeAttribute("class");
}, false);

document.getElementById("request-links").addEventListener("submit", function(event)
{
  event.preventDefault();
  var textbox = document.querySelector("#request-links input");
  var request = new XMLHttpRequest();

  request.open("POST", "/sendInstallationLink", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.onreadystatechange = function()
  {
    var modal = document.getElementById("modal");
    if (request.readyState == 4)
    {
      if (request.status >= 200 && request.status < 300)
        modal.setAttribute("class", "success");
      else if (request.status == 400)
        modal.setAttribute("class", "invalid");
      else
        modal.setAttribute("class", "error");
    }
  };
  request.onerror = function()
  {
    document.getElementById("modal").setAttribute("class", "error");
  };
  request.send(textbox.name + "=" + encodeURIComponent(textbox.value));
}, false);
