function addNoti(notiContent, ID, siblingID){
    let noti=document.getElementById(ID);
        if(!noti){
            const notiElement=document.createElement('p');
            const notiText=document.createTextNode(notiContent);
            notiElement.appendChild(notiText);
            const attributeNode=document.createAttribute('id');
            attributeNode.value=ID;
            notiElement.setAttributeNode(attributeNode);

            notiElement.style.color = "red";
            notiElement.style.fontStyle = "italic";
            notiElement.style.fontSize="0.8rem";


            let sibling=document.getElementById(siblingID);
            sibling.insertAdjacentElement("afterend",notiElement);
        }
}

let login = document.getElementById("loginBlock");
if(login){
    login.addEventListener("submit",function (event){
        event.preventDefault();
        let username=document.getElementById("username").value;
        let password=document.getElementById("password").value;

        if(username!=='nawalhaidar' || password!=='P@55W0RD'){
            addNoti('Incorrect username or password. Please try again.','noti','notiAfter');
        }
        else{
            window.location.href='display.html';
        }
    })
}