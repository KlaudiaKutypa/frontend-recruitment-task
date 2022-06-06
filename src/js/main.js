const button = document.querySelector("button");
const span = document.querySelector("span");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close_button");
const overlay = document.querySelector(".overlay");
const restart = document.querySelector(".restart");
const restartbtn = document.querySelector(".restart_button");
const section = document.querySelector("section");
let clickCount = 0
button.addEventListener("click", function (event) {
    
    clickCount ++;
    span.innerText = clickCount;
    popup.style.transform = "scale(1)";
    overlay.style.display = "block";

    if (clickCount >= 6) {
        restart.style.display="flex";
    }
});

restartbtn.addEventListener("click", function (event) {

    clickCount=0;
    popup.style.transform = "scale(0)";
    overlay.style.display = "none";
    restart.style.display="none";
});


close.addEventListener("click", function (event) {
   
    span.innerText = clickCount;
    popup.style.transform = "scale(0)";
    overlay.style.display = "none";
});;


/*ADDITIONAL TASK*/
const API = "https://jsonplaceholder.typicode.com/users"

const handleSeeProducts = () => {
    fetch(`${API}`)
    .then(response => response.json())
    .then(response => {console.log(response)
    
        user = response
        console.log(user)
        
        for ( i=0; i < user.length; i++) {

            console.log(user[i].name)
            console.log(user[i].email)
            console.log(user[i].address)
            console.log(user[i].phone)
            console.log(user[i].company)
            
            const name = document.getElementsByClassName("name");
            name[i].innerHTML = user[i].name;

            const email = document.getElementsByClassName("email");
            email[i].innerHTML = user[i].email;

            const address = document.getElementsByClassName("address");
            address[i].innerHTML = user[i].address.city + "; "+ user[i].address.street + "; "+ user[i].address.suite;

            const phone = document.getElementsByClassName("phone");
            phone[i].innerHTML = user[i].phone;

            const company = document.getElementsByClassName("company");
            company[i].innerHTML = user[i].company.name;
        }
})}

handleSeeProducts();


