let login = document.querySelector(".login_button") ; 

let container = document.querySelector(".model_wrapper") ; 

let signIn = document.querySelector(".sign_in") ;

login.addEventListener("click" , () => {
    container.classList.add('active') ; 
})

container.addEventListener('click' , (e) => {
    if(e.target != this) return ; 
    container.classList.remove('active') ;
})