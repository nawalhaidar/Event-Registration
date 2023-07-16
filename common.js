let navButton=document.getElementById('navButton');
if(navButton){

    let navBar=document.getElementById('navBar');
    let docWidth, navWidth, initialLeft, left;

    function moveNavRight(){
        left+=0.1*navWidth;
        navBar.style.left=left+'px';
        if(left>=0)
            return;
        requestAnimationFrame(moveNavRight);
    }
    function moveNavLeft(){
        left-=0.1*navWidth;
        navBar.style.left=left+'px';
        if(left<=-navWidth)
            return;
        requestAnimationFrame(moveNavLeft);
    }

    navButton.addEventListener('click',(event)=>{
        event.preventDefault();
        docWidth=document.documentElement.clientWidth;
        navWidth=0.15*docWidth;
        initialLeft=navBar.offsetLeft;

        if(initialLeft<0){
            left=-navWidth;
            moveNavRight();
        }
        // else{
        //     left=0;
        //     moveNavLeft();

        // }
    })
}

let navHome=document.getElementById('navHome');
if(navHome){
    navHome.addEventListener('click',(event)=>{
        event.preventDefault();
        if(document.getElementById('speakers')){
            // left=0;
            // moveNavLeft();
            let home=document.getElementById('title');
            home.scrollIntoView({ behavior: 'smooth' });
        }
        else{
            window.location.href='index.html';
        }
    })
}

let navReg=document.getElementById('navReg');
if(navReg){
    navReg.addEventListener('click',(event)=>{
        event.preventDefault();
        if(document.getElementById('speakers')){
            // left=0;
            // moveNavLeft();
            let reg=document.getElementById('register');
            reg.scrollIntoView({ behavior: 'smooth' });
        }
        else{
            localStorage.setItem('scrollToReg','1');
            window.location.href='index.html';
        }

    })
}

let navDisplay= document.getElementById("navDisplay");
if(navDisplay){
    navDisplay.addEventListener('click',()=>{
        window.location.href='login.html';
    })
}

let navContact= document.getElementById("navContact");
if(navContact){
    navContact.addEventListener('click',()=>{
        if(document.getElementById('speakers')){
            // left=0;
            // moveNavLeft();
            let reg=document.getElementById('register');
            reg.scrollIntoView({ behavior: 'smooth' });
        }
        else{
            localStorage.setItem('scrollToReg','1');
            window.location.href='index.html';
        }
    })
}

document.addEventListener('click',(event)=>{
    left=0;
    moveNavLeft();
})

let home= document.getElementById("home-button");
if(home){
    home.addEventListener('click',()=>{
        window.location.href='index.html';
    })
}


