const appcontainer=document.querySelector(".appcontainer");
const main=document.querySelector("#main")
const header=document.querySelector(".header");
const inputcontainer=document.querySelector(".inputcontainer");
const listtitle=document.querySelector(".listtitle");
const push=document.querySelector(".push");
const myinput=document.querySelector(".myinput");
const list=document.querySelector(".list");


header.remove();
appcontainer.remove();
inputcontainer.remove();

let logincontainer=document.createElement("div");
logincontainer.style.width="40em";
logincontainer.style.height="30em";
logincontainer.style.backgroundColor="Black";
logincontainer.style.paddingTop="11em";
logincontainer.style.marginLeft="36em";
logincontainer.style.borderRadius="0.2em";
logincontainer.style.opacity="0.9";

let Login=document.createElement("div");
Login.style.width="96%";
Login.style.height="96%";
Login.style.textAlign="center";
Login.style.top="2%";
Login.style.left="1.9%";
Login.style.position="absolute";
Login.style.paddingTop="10em";

let listname=document.createElement("h2");
listname.textContent="Ne listesi oluşturmak istersiniz";
listname.style.marginBottom="1em";
listname.style.color="#326275";
listname.style.fontSize="1.5em";







let listnameinput=document.createElement("input");
listnameinput.style.width="20em";
listnameinput.style.height="2em";
listnameinput.style.borderRadius="0.2em";
listnameinput.style.fontSize="1em";
listnameinput.style.backgroundColor="transparent";
listnameinput.style.border="none";
listnameinput.style.borderBottom="3px solid #326275";
listnameinput.placeholder="Liste başlığını giriniz";
listnameinput.style.color="#326275";




let loginbutton=document.createElement("button");
loginbutton.style.padding="0.7em";
loginbutton.textContent="Giris yap";
loginbutton.style.marginLeft="2em";
loginbutton.style.backgroundColor="#326275";
loginbutton.style.border="none";
loginbutton.style.borderRadius="0.2em";



Login.appendChild(logincontainer);
logincontainer.appendChild(listname);
logincontainer.appendChild(listnameinput);
logincontainer.appendChild(loginbutton);
main.appendChild(Login);


const Signin=() =>
{
    if(listnameinput.value!="" && listnameinput.value.length>0)
    {
        let listnamesave=listnameinput.value;
        
        Login.remove();
        main.appendChild(appcontainer);
        main.appendChild(header);
        main.appendChild(inputcontainer);
       
        listtitle.textContent=listnamesave;
        

        const listadd=() =>
        {
                alert("listeye eklendi");
                  
        }
        push.addEventListener("click", listadd);
    }

}

loginbutton.addEventListener("click",Signin);
