let controls = document.querySelectorAll('.control');

for (let i = 0; i < controls.length; i++){
    controls[i].addEventListener("click", () => {
        document.querySelector(".activeBtn").classList.remove("activeBtn")
        controls[i].classList.add("activeBtn")
        document.querySelector(".active").classList.remove("active")
        let active = controls[i].getAttribute("data-id");
         document.querySelector(`#${active}`).classList.add("active")
    })
   
}





