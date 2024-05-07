var kioskNumber = 2012;

var kiosk5gNumber = 114;


const init =()=>{
    var linkvisual = document.getElementById("link-1-kiosk");
    let dotarray = Array.from({length: kioskNumber});
    
    dotarray.forEach((dot)=>{

        linkvisual.innerHTML+=  `<div class="circle"></div>`;
    })
    
    var linkvisual = document.getElementById("link-5g-kiosk");
    let dotarray5g = Array.from({length: kiosk5gNumber});
    
    dotarray5g.forEach((dot)=>{

    linkvisual.innerHTML+=  `<div class="circle-5g"></div>`;
    })

    
    gsap.fromTo(".kiosk-motif", { opacity: 0 }, { opacity: 1, duration: 1, onComplete: ()=>
       
        {gsap.fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 0.5, onComplete: ()=>
        
            {gsap.fromTo(".instruct", { opacity: 0 }, { opacity: 0.5, duration: 0.5, onComplete: ()=>
                
                { document.querySelector("main").style.overflowY="scroll";}}); }}); 
}}); 

}







window.addEventListener("load", init); 

