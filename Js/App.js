const appcontainer = document.querySelector(".appcontainer");
const main = document.querySelector("#main");
const header = document.querySelector(".header");
const push = document.querySelector(".push");
const myinput = document.querySelector("#myinput");
const Todo = document.querySelector(".Todo");
const inputcontainer=document.querySelector(".inputcontainer");
main.appendChild(appcontainer);
main.appendChild(header);

let sayac = 0;

const pushF = () => {
    
 if(myinput.value!="" && myinput.value.length>0)
 {
    let li = document.createElement("li");
    li.style.color = "orange";
    li.style.backgroundColor = "black";
    li.style.opacity = "0.9";
    li.style.border = "none";
    li.style.borderBottom = "2px solid orange";
    li.style.marginBottom = "1em";
    li.style.padding = "1em";
    li.textContent = myinput.value;
    li.style.listStyle = "none";

    let deletebtn = document.createElement("button");
    let deletebtnimg=document.createElement("img");
    deletebtnimg.src="İmg/deletebutton.png";
    deletebtnimg.style.width="2em";
    deletebtnimg.style.height="2em";
    deletebtn.appendChild(deletebtnimg);
    deletebtn.style.color = "orange";
    deletebtn.style.padding = "0.5em";
    deletebtn.style.backgroundColor = "transparent";
    deletebtn.style.border = "1px solid orange";
    deletebtn.style.borderRadius = "0.2em";
    deletebtn.style.marginLeft = "2em";

    let updatebtn = document.createElement("button");
    let updatebuttonimg=document.createElement("img");
    updatebuttonimg.src="İmg/update.png";
    updatebuttonimg.style.width="2em";
    updatebuttonimg.style.height="2em";
    updatebtn.appendChild(updatebuttonimg);
    updatebtn.style.color = "orange";
    updatebtn.style.padding = "0.5em";
    updatebtn.style.backgroundColor = "transparent";
    updatebtn.style.border = "1px solid orange";
    updatebtn.style.borderRadius = "0.2em";
    updatebtn.style.marginLeft = "100em";

    li.appendChild(updatebtn);
    li.appendChild(deletebtn);

    Todo.appendChild(li);
    myinput.value = "";

    const update = () => {
        myinput.placeholder = "Yazdıkan sonra entere basın";
        push.remove();
        const updateadd = (e) => {
          
            if (e.key == "Enter") {
                li.textContent = myinput.value;
                li.appendChild(updatebtn);
                li.appendChild(deletebtn);
                myinput.removeEventListener("keypress", updateadd); // Event listener'ı kaldır
                inputcontainer.appendChild(push);
                myinput.value=="";
                const updatec=() =>
                {
                    update();
                
                }
                updatebtn.addEventListener("click", updatec);
             
            }
           
        }
        myinput.addEventListener("keypress", updateadd);
    }

    updatebtn.addEventListener("click", update);



   const deleteT  =() =>
   {
       li.remove();
   }


    deletebtn.addEventListener("click", deleteT)
 }
}

push.addEventListener("click", pushF);
