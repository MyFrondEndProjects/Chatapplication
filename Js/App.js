const appcontainer=document.querySelector(".appcontainer");
const main=document.querySelector("#main")
const header=document.querySelector(".header");
const push=document.querySelector(".push");
const myinput=document.querySelector("#myinput");
const Todo=document.querySelector(".Todo");
main.appendChild(appcontainer);
main.appendChild(header);

let sayac=0;
const pushF=()=>
{
    sayac++;
   let li=document.createElement("li");
   li.style.color="orange";
   li.style.backgroundColor="black";
   li.style.opacity="0.9";
   li.style.border="none";
   li.style.borderBottom="2px solid orange";
   li.style.marginBottom="1em";
   li.style.padding="1em";
   li.textContent=myinput.value;
   Todo.appendChild(li);
   myinput.value="";
}


push.addEventListener("click", pushF);