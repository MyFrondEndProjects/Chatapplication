const header = document.getElementsByTagName(".header");
const main = document.querySelector(".app");
const createnot = document.querySelector(".createnot");
const list = document.querySelector(".list");
const savebtn = document.querySelector(".savebtn");


if (savebtn) {



    savebtn.remove(); // savebtn öğesi varsa kaldır
}

const notadd = () => {

    
    createnot.remove(); 
    let notscrean = document.createElement("textarea");
    notscrean.classList.add("notscrean");
    main.appendChild(notscrean);

    const notsave = () => 
    {
       let nots = notscrean.value;

       let li = document.createElement("li");
       li.textContent = nots;
       list.appendChild(li);

    }

    if (savebtn) 
    {
        header.appendChild(savebtn); 
        savebtn.addEventListener("click", notsave);
    }

    
}

createnot.addEventListener("click", notadd);
