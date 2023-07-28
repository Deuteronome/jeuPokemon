const welcome = document.getElementById('welcomePopUp')

function showWelcome() {  
    
    welcome.style.opacity = 1
    
}

function hideWelcome() {
    welcome.style.opacity = 0
}

setTimeout(()=>{
    showWelcome()
    setTimeout(()=>{
        hideWelcome()
        welcome.style.display ='none'    
    }, 2000)
}, 1000)

