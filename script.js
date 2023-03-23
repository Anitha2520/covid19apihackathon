var div = document.createElement("div");
div.style.textAlign="center";

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button = document.createElement("button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="7px";
button.addEventListener("click",foo);

let active = document.createElement("div");
active.setAttribute("id","active");
active.className="p-3";

let deaths = document.createElement("div");
deaths.setAttribute("id","deaths");
deaths.className="p-1";

let recovered = document.createElement("div");
recovered.setAttribute("id","recovered");
recovered.className="p-1";

div.append(input,button,active,deaths,recovered);
document.body.append(div);

async function foo(){
  try {
  let res =  document.getElementById("country").value;
 let url = `https://api.covid19api.com/total/dayone/country/${res}`;
 let res1 = await fetch(url);
 let res2 = await res1.json();
 var index = res2.length-1;
 console.log(res2[index]);
 console.log(res2[index].Active);
 active.innerHTML = `Total Active cases: ${res2[index].Active}`;
deaths.innerHTML =  `Total Active cases: ${res2[index].Deaths}`;
recovered.innerHTML = `Total Active cases: ${res2[index].Recovered}`;
  } catch(error){
    console.log(error);
  }



}

