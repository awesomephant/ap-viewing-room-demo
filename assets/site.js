const initFlowButtons = function(){
    console.log('hi');
    let buttons = document.querySelectorAll('.js_flowButton')
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            let allScreens = document.querySelectorAll('.flow-screen')
            for (let j = 0; j < allScreens.length; j++){
                allScreens[j].classList.remove('active')
            }
            let targetScreen = document.querySelector('#' + this.getAttribute('data-to'))
            targetScreen.classList.add('active')
        })
    }
}

initFlowButtons()