// write js code here corresponding to matches.html

var matches=JSON.parse(localStorage.getItem("schedule"))
displaydata(matches)

var matches=JSON.parse(localStorage.getItem("Favourites"))|| []
function displaydata(data){
data.forEach(function(el){
    var tr=document.createElement("tr")
    var td1=document.createElement("td")
    td1.innerText=el.number
     var td2=document.createElement("td")
     td2.innerText=el.team1;
    var td3=document.createElement("td")
    td3.innerText=el.team2;
    var td4=document.createElement("td")
     td4.innerText=el.date;
     var td5=document.createElement("td")
     td5.innerText=el.venue;
     var td6=document.createElement("td")
     td6.innerText="Add as Favourites";
     td6.color="navyblue";
     td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
     
         favfav(el)

     })
     
    
     tr.append(td1,td2,td3,td4,td5,td6)
     document.querySelector("tbody").append(tr)

    })
    function favfav(el){
        console.log(el)
        matches.push(el)
        localStorage.setItem("favourites",JSON.stringify(matches))
    }
}