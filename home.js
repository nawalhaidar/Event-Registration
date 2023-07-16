let keys=['fname','lname', 'email','gender','phone', 'birthdate','univ', 'maj','employed'];

if(localStorage.getItem('scroll')==='1'){
    const element = document.getElementById('univ');
    element.scrollIntoView({ behavior: 'smooth' });
    localStorage.setItem('scroll','0');
}

if(localStorage.getItem('scrollToReg')==='1'){
    const element = document.getElementById('register');
    element.scrollIntoView({ behavior: 'smooth' });
    localStorage.setItem('scrollToReg','0');
}


let discover=document.getElementById("discoverMore");
if(discover){
    discover.addEventListener('click',(event)=>{
        event.preventDefault();
        discover.style.display='none';
        let speakerBlock=document.getElementById('speakers');
        speakerBlock.style.marginBottom='20px';
        let hidden=document.getElementById('hiddenSpeakers');
        hidden.style.display="block";
        let speaker2=document.getElementById('speaker2');
        speaker2.scrollIntoView({ behavior: 'smooth' });
        
    })
}

let showLess=document.getElementById('showLess');
if(showLess){
    showLess.addEventListener('click',(event=>{
        event.preventDefault();
        let speakerBlock=document.getElementById('speakers');
        speakerBlock.style.marginBottom='0';
        let discover=document.getElementById("discoverMore");
        discover.style.display='block';
        let hidden=document.getElementById('hiddenSpeakers');
        hidden.style.display="none";
        let speakers=document.getElementById('speakers');
        speakers.scrollIntoView({ behavior: 'smooth' });
    }))
}


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


let form = document.getElementById("register");
if(form){
    form.addEventListener("submit",function (event){
        event.preventDefault();

        let motivation=document.getElementById("motive").value;

        let gender;
        let genderRadio=this.querySelectorAll('#gender label');
        genderRadio.forEach(labl=>{
            if(labl.querySelector("input").checked)
                gender=labl.textContent.trim();
        })   

        let employed;
        let employedRadio=this.querySelectorAll('#experience label');
        employedRadio.forEach(labl=>{
            if(labl.querySelector("input").checked)
                employed=labl.textContent.trim();
        }) 

        let data={
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
            email: document.getElementById("email").value,
            gender: gender,
            phone: document.getElementById("phone").value,
            birthdate: document.getElementById("birthdate").value,
            univ: document.getElementById("univ").value,
            maj: document.getElementById("maj").value,
            employed: employed,
            motivation: motivation
        }

        for(let i=3; i<keys.length;i++){
            if(!data[keys[i]])
            data[keys[i]]='-';
        }

        let valid = true;
        if(!(/^[a-zA-Z\s-]{2,30}$/.test(data.fname))){
            addNoti('Invalid name.','notifName','ffname');
            valid = false;
        }
        if(!(/^[a-zA-Z\s-]{2,30}$/.test(data.lname))){
            addNoti('invalid name','notiLname','llname');
            valid = false;
        }
        if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))){
            addNoti('Invalid email.','notiEmail','eemail');
            valid = false;
        }
        if(!(/^\+?[0-9\s-]+[0-9]$/.test(data.phone))){
            addNoti('Invalid phone.','notiPhone','pphone');
            valid = false;
        }
        if(!(/(^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$)|(^$)/.test(data.birthdate))){
            addNoti('Invalid date.','notiDate','bbirth');
            valid = false;
        }

        
        // localStorage.setItem('myData','');
        if(valid){
            //Note: :( I wrote these and then later on realized i could have written the block in html and set the display to none and here set the display to block
            let storedData=localStorage.getItem('myData');
            let dataArray=[];
            if(storedData)
                dataArray=JSON.parse(storedData);
            dataArray.push(data);
            localStorage.setItem('myData',JSON.stringify(dataArray));

            let toRemove=document.getElementById('register');
            toRemove.remove();

            let speakerBlock=document.getElementById('discoverMore');
            speakerBlock.style.marginBottom='20px';

            const newBlock=document.createElement('div');

            const textBlock=document.createElement('p');
            const txt=document.createTextNode('Your registration has been submitted successfully. Thank you!');
            textBlock.appendChild(txt);
            newBlock.appendChild(textBlock);

            const goBackContainer=document.createElement('div');
            newBlock.appendChild(goBackContainer);    

            const goBack=document.createElement('button');
            const txtt=document.createTextNode('New Registration');
            goBack.appendChild(txtt);
            goBackContainer.appendChild(goBack);

            let sibling=document.getElementById('discoverMore');
            sibling.insertAdjacentElement("afterend",newBlock);

            const BlockAttribute=document.createAttribute('id');
            BlockAttribute.value='submission';
            newBlock.setAttributeNode(BlockAttribute);

            const ButtonContainerAttribute=document.createAttribute('id');
            ButtonContainerAttribute.value='goBackContainer';
            goBackContainer.setAttributeNode(ButtonContainerAttribute);

            const ButtonAttribute=document.createAttribute('id');
            ButtonAttribute.value='goBack';
            goBack.setAttributeNode(ButtonAttribute);

            goBack.addEventListener('click', ()=>{
                localStorage.setItem('scroll','1');
                window.location.href='index.html';
            })



        }
    })
}


let display= document.getElementById("display-button");
if(display){
    display.addEventListener('click',()=>{
        window.location.href='login.html';
    })
}