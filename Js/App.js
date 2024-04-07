const appcontainer=document.querySelector(".appcontainer");
const main=document.querySelector("#main")
const header=document.querySelector(".header");

header.remove();
appcontainer.remove();


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







let usernameinput=document.createElement("input");
usernameinput.style.width="20em";
usernameinput.style.height="2em";
usernameinput.style.borderRadius="0.2em";
usernameinput.style.fontSize="1em";
usernameinput.style.backgroundColor="transparent";
usernameinput.style.border="none";
usernameinput.style.borderBottom="3px solid #326275";
usernameinput.placeholder="Kullanıcı ismi belirleyiniz";
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
        console.log(usernamesave);
        Login.remove();
        main.appendChild(appcontainer);
        main.appendChild(header);
    }

}

loginbutton.addEventListener("click",Signin);