const appcontainer=document.querySelector(".appcontainer");
const main=document.querySelector("#main")
const header=document.querySelector(".header");
const inputcontainer=document.querySelector(".inputcontainer");
const listtitle=document.querySelector(".listtitle");
const push=document.querySelector(".push");
const myinput=document.querySelector("#myinput");
const list=document.querySelector(".list");
const notarray=[];


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

let username=document.createElement("h2");
username.textContent="Kullanıcı adınızı giriniz";
username.style.marginBottom="1em";
username.style.color="#326275";
username.style.fontSize="1.5em";



const notb=document.createElement("input");
notb.style.position="absolute";
notb.style.top="0.1%";
notb.style.right="20em";
notb.style.backgroundColor="black";
notb.style.opacity="0.9";
notb.placeholder="Başlık girin"
notb.style.padding="1em";
notb.style.borderRadius="0.2em";
notb.style.color="white";


let usernameinput=document.createElement("input");
usernameinput.style.width="20em";
usernameinput.style.height="2em";
usernameinput.style.borderRadius="0.2em";
usernameinput.style.fontSize="1em";
usernameinput.style.backgroundColor="transparent";
usernameinput.style.border="none";
usernameinput.style.borderBottom="3px solid #326275";
usernameinput.placeholder="Liste başlığını giriniz";
usernameinput.style.color="#326275";




let loginbutton=document.createElement("button");
loginbutton.style.padding="0.7em";
loginbutton.textContent="Giris yap";
loginbutton.style.marginLeft="2em";
loginbutton.style.backgroundColor="#326275";
loginbutton.style.border="none";
loginbutton.style.borderRadius="0.2em";



Login.appendChild(logincontainer);
logincontainer.appendChild(username);
logincontainer.appendChild(usernameinput);
logincontainer.appendChild(loginbutton);
main.appendChild(Login);


const Signin=() =>
{
    if(usernameinput.value!="" && usernameinput.value.length>0)
    {
        let usernamesave=usernameinput.value;
        
        Login.remove();
        main.appendChild(appcontainer);
        main.appendChild(header);
       
        let home=document.createElement("div");


        home.style.position="absolute";
        home.style.width="100%";
        home.style.height="98%";
        home.style.backgroundColor="black";
        home.style.top="2%";
        home.style.opacity="0.7";
        home.style.borderRadius="2%";
        home.style.overflowY="scroll";

        let Listeolustur=document.createElement("button");
        Listeolustur.textContent="Liste oluştur +";
        Listeolustur.style.fontSize="1.5em";
        Listeolustur.style.padding="0.2em";
        Listeolustur.style.backgroundColor="#98FB98";
        Listeolustur.style.borderRadius="0.5%";
        Listeolustur.style.color="black";
        Listeolustur.style.position="absolute";
        Listeolustur.style.right="2%";
        Listeolustur.style.top="2%";
        

       
 const yenilisteolustur=() =>
 {


appcontainer.remove();

Listeolustur.remove();
header.appendChild(notb);
const savebutton=document.createElement("button");
savebutton.style.position="absolute";
savebutton.style.padding="1em";
savebutton.textContent="kaydet";
savebutton.style.right="3.6%";
savebutton.style.top="4%";
savebutton.style.backgroundColor="#98FB98";
savebutton.style.backgroundColor="lightgreen";
savebutton.textContent="Kaydet";

header.appendChild(savebutton);




let listadd=document.createElement("textarea");
listadd.style.position="absolute";
listadd.style.left="1.5%";
listadd.style.top="9%";
listadd.style.width="97%";
listadd.style.height="90%";
listadd.style.borderRadius="2%";
listadd.style.backgroundColor="black";
listadd.style.color="lightgray";
listadd.style.textAlign="left";
listadd.style.textAlign="top";
listadd.style.padding="3em";
listadd.style.fontSize="2em";
listadd.style.opacity="0.7";


main.appendChild(listadd);
let save=() =>
{
    notb.remove();
   main.appendChild(appcontainer);
    savebutton.remove();
    Listeolustur.remove();
    let savenot=listadd.value;
    listadd.remove();
    console.log(savenot);
    header.appendChild(Listeolustur);

  
  



    let savenots=document.createElement("li");
    savenots.classList.add("notlar");
    let x=listadd.value;
    notarray.push(x);

    if(notb.value!=""&&notb.value.length>0)
    {
        savenots.textContent="Başlık : "+notb.value;
    }
    
    else 
    {
        savenots.textContent="Başlık girilmedi";
    }
    
    list.appendChild(savenots);
    home.appendChild(list);


    listadd.remove();

   for(let i2=0; i2<notarray.length; i2++)
   {
    let sayac=0;

const notprint = () =>
{
 sayac++;
    alert(notarray[i2]);
}


    notarray[i2].addEventListener("click",notprint);
   }
 
}


savebutton.addEventListener("click", save);
header.appendChild(savebutton);

 }



        
   Listeolustur.addEventListener("click", yenilisteolustur)
        listtitle.textContent=usernamesave;
        header.appendChild(Listeolustur);
        appcontainer.appendChild(home);
   
    
        
    }

}

loginbutton.addEventListener("click",Signin);


let x=1;
