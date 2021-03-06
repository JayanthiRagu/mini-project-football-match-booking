const api_key="c9dc8ea6528341c99f679ccf18869dc2";
let axiosConfig = {
    headers: {
        'X-Auth-Token': 'c9dc8ea6528341c99f679ccf18869dc2'
    }
  };
//Today's Match
function todayMatch(){
    const myNode = document.getElementById("table");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    const url=`https://api.football-data.org/v2/matches`;
    
    axios.get(url,axiosConfig).then(res=>{
        console.log(res);
        var count = res.data.count;
        
        for (var i = 0; i < count; i++){
            var table = document.createElement('table');
            var tr1 = document.createElement('tr');
            var tr2 = document.createElement('tr');
            var tr3 = document.createElement('tr');
            var tr4 = document.createElement('tr');
            var tr5 = document.createElement('tr');

            var td1 = document.createElement('td');
            td1.colSpan="2";
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            td4.colSpan="2";
            var td5 = document.createElement('td');
            td5.colSpan="2";
            var td6 = document.createElement('td');
            td6.colSpan="2";

            var text1 = document.createTextNode("League: "+res.data.matches[i].competition.name);
            var text2 = document.createTextNode(res.data.matches[i].homeTeam.name);
            var text3 = document.createTextNode(res.data.matches[i].awayTeam.name);
            var text4 = document.createTextNode("Location: "+res.data.matches[i].competition.area.name);
            var text5 = document.createTextNode(res.data.filters.dateFrom);
            var text6 = document.createTextNode("Book Ticket");

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);
            td6.appendChild(text6);

            tr1.appendChild(td1);
            tr2.appendChild(td2);
            tr2.appendChild(td3);
            tr3.appendChild(td4);
            tr4.appendChild(td5);
            tr5.appendChild(td6);

            table.appendChild(tr1);
            table.appendChild(tr2);
            table.appendChild(tr3);
            table.appendChild(tr4);
            table.appendChild(tr5);
            tr5.setAttribute("id", i + 1); 
            document.getElementById("table").appendChild(table);

            tr5.onclick=function()
            {
                console.log(this.id); 
                i = this.id -1; 
                var league = res.data.matches[i].competition.name;
                var homeTeam = res.data.matches[i].homeTeam.name;
                var awayTeam = res.data.matches[i].awayTeam.name;
                var location = res.data.matches[i].competition.area.name;
                var date = res.data.filters.dateFrom;
                window.sessionStorage.setItem('league', league);
                window.sessionStorage.setItem('homeTeam', homeTeam);
                window.sessionStorage.setItem('awayTeam', awayTeam);
                window.sessionStorage.setItem('location', location);
                window.sessionStorage.setItem('date', date);
                bookTicket();
            }
        }
        
    }).catch(function (error) {
        // handle error
        console.log(error);
      });
}
//Upcoming matches
function upcoming(){
    const myNode = document.getElementById("table");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
    var date = new Date();
    var month=date.getMonth()+1;
    var date1=date.getDate()+1;
    var year=date.getFullYear();
    if (month.toString().length < 2) 
        month = '0' + month;
    if (date1.toString().length < 2) 
        date1 = '0' + date1;
    var date2=year+"-"+month+"-"+date1;
    var date3=date.getDate()+9;
    if (date3.length < 2) 
        date3 = '0' + day;
    var date4=year+"-"+month+"-"+date3;
    const url =`https://api.football-data.org/v2/matches?dateFrom=${date2}&dateTo=${date4}&status=SCHEDULED`;
    axios.get(url,axiosConfig).then(res=>{
        console.log(res);
        var count = res.data.count;
        
        for (var i = 0; i < count; i++){
            var table = document.createElement('table');
            var tr1 = document.createElement('tr');
            var tr2 = document.createElement('tr');
            var tr3 = document.createElement('tr');
            var tr4 = document.createElement('tr');
            var tr5 = document.createElement('tr');

            var td1 = document.createElement('td');
            td1.colSpan="2";
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            td4.colSpan="2";
            var td5 = document.createElement('td');
            td5.colSpan="2";
            var td6 = document.createElement('td');
            td6.colSpan="2";

            var date5 = new Date(res.data.matches[i].utcDate);
            
            var matchDate = date5.getFullYear()+'- 0' + (date5.getMonth()+1) + '- 0'+date5.getDate();

            var text1 = document.createTextNode("League: "+res.data.matches[i].competition.name);
            var text2 = document.createTextNode(res.data.matches[i].homeTeam.name);
            var text3 = document.createTextNode(res.data.matches[i].awayTeam.name);
            var text4 = document.createTextNode("Location: "+res.data.matches[i].competition.area.name);
            var text5 = document.createTextNode(matchDate);
            var text6 = document.createTextNode("Book Ticket");

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);
            td6.appendChild(text6);

            tr1.appendChild(td1);
            tr2.appendChild(td2);
            tr2.appendChild(td3);
            tr3.appendChild(td4);
            tr4.appendChild(td5);
            tr5.appendChild(td6);

            table.appendChild(tr1);
            table.appendChild(tr2);
            table.appendChild(tr3);
            table.appendChild(tr4);
            table.appendChild(tr5);
            tr5.setAttribute("id", i + 1); 
            document.getElementById("table").appendChild(table);
            
            tr5.onclick=function()
            {
                console.log(this.id); 
                i = this.id -1; 
                var league = res.data.matches[i].competition.name;
                var homeTeam = res.data.matches[i].homeTeam.name;
                var awayTeam = res.data.matches[i].awayTeam.name;
                var location = res.data.matches[i].competition.area.name;
                var date5 = new Date(res.data.matches[i].utcDate);
            
                var matchDate = date5.getFullYear()+'- 0' + (date5.getMonth()+1) + '- 0'+date5.getDate();
                var date = matchDate;
                window.sessionStorage.setItem('league', league);
                window.sessionStorage.setItem('homeTeam', homeTeam);
                window.sessionStorage.setItem('awayTeam', awayTeam);
                window.sessionStorage.setItem('location', location);
                window.sessionStorage.setItem('date', date);
                bookTicket();
            }
        }
    }).catch(function (error) {
        // handle error
        console.log(error);
      });
}
function bookTicket(){
    window.location.href="matchDesc.html";
}
