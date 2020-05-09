const dots = document.querySelector(".dots");

function handleClick(){
  const modal = document.querySelector(".modal");
  console.log(modal);
  if(modal.classList.contains("hide"))
  {
    modal.classList.remove("hide");
  }
}

dots.addEventListener("click", handleClick);
