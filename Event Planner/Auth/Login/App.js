import{
    auth,
    signInWithEmailAndPassword,

}from './Utils/Utils.js';

//create Account => createuserEmailAndPassword



const signup = document.getElementById("signup-btn");
const submit = document.getElementById("submit_btn");

signup.addEventListener ("submit" , function(e){
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log("email=>", email);
    console.log("password=>", password);
});

signInWithEmailAndPassword(auth,email,password).then(() =>{
    window.location.href ="/"
}) .catch ((err) => alert(err))