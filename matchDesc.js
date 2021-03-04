window.onload=function()
{
    
    document.getElementById("team1").textContent="Team1: "+window.sessionStorage.getItem('homeTeam');
    document.getElementById("team2").textContent="Team2: "+window.sessionStorage.getItem('awayTeam');
    document.getElementById("league").textContent="League:  "+window.sessionStorage.getItem('league');
    document.getElementById("location").textContent="Location:  "+window.sessionStorage.getItem('location');
    document.getElementById("date").textContent="Date: "+window.sessionStorage.getItem('date');
}
function incNumber(){
    var c = parseInt(document.getElementById("display").value);
    c++;
    document.getElementById("display").value = c;
    document.getElementById("price").textContent = "Total Price " +c*500;
}
function decNumber(){
    var c = parseInt(document.getElementById("display").value);
    c--;
    document.getElementById("display").value = c;
    document.getElementById("price").textContent = "Total Price " +c*500;
}
function book()
{
    window.location.href="orderConfirm.html";
}