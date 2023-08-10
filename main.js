const items = document.querySelectorAll(".accordion-container");

items.forEach(con => {
  const button = con.querySelector(".btn");
  const content = con.querySelector(".accordion-content");

  con.addEventListener("click", () => {
    if (con.classList.contains('open')) {
      con.classList.remove('open');
      button.textContent = "+"; 
      content.style.maxHeight = null;
    } else {
      items.forEach(subcon => {
        subcon.classList.remove('open');
        subcon.querySelector(".btn").textContent = "+";
        subcon.querySelector(".accordion-content").style.maxHeight = null;
      });
      con.classList.add('open');
      button.textContent = "-"; 
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}); 









