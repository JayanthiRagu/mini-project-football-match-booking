function login(){
    var email1=document.getElementById("email").value;
    var password1 = document.getElementById("password").value;
    var email = window.sessionStorage.getItem("email");
    var password = window.sessionStorage.getItem("password");
    if(email==email1&&password==password1){
        location.href="home.html";
    }
    else{
        alert("Incorrect Email/password");
    }
}