const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
const sign = document.querySelector(".sign-up").addEventListener("click",function(){
    sign.style.display = "flex"
})
const login = document.querySelector(".log-in")

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
    
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

// let button = sign.addEventListener("click", function(){
//     Body.style.display = "flex"
//     console.log(button)
// })