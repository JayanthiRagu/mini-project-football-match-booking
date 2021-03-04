function register(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var phone= document.getElementById("phone").value;
    window.sessionStorage.setItem('name', name);
    window.sessionStorage.setItem('email', email);
    window.sessionStorage.setItem('password', password);
    window.sessionStorage.setItem('confirm_password', confirm_password);
    window.sessionStorage.setItem('phone', phone);
    alert("Your details registered Successfully");
    location.href="login.html";
}