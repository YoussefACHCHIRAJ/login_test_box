const trBar= document.querySelector(".bar");
const signup= document.querySelector(".signup");
const signin= document.querySelector(".signin");
const signin_box= document.querySelector(".signin_box");
const signup_box= document.querySelector(".signup_box");

    signup.addEventListener("click", ()=>{
        trBar.style.transform= "translateX(150%)"
        signin_box.style.transform= "translateX(-20em)"
        signup_box.style.transform= "translateX(0)"
    });
    signin.addEventListener("click", ()=>{
        trBar.style.transform= "translateX(20%)"
        signin_box.style.transform= "translateX(0)"
        signup_box.style.transform= "translateX(20em)"
    })



