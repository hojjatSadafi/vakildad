let $ = document
const mobileMenu = $.querySelector('.header__mobile-menu') 
const headerBtnAndNav = $.querySelector('.header-wrapper')
const line=$.querySelector('.line')
const themeChangerCircle = $.querySelector('.circle')
const themeChangerElem = $.querySelector('.header__theme-changer')
const copyArr = $.querySelectorAll('.click-copy')

//site theme loader
window.addEventListener('load',function(){
    serviceGenerator()
    let siteTheme = localStorage.getItem('vakilDadTheme')
    if(siteTheme){
        if(siteTheme==='dark'){
            $.documentElement.classList.add('dark')
        }
    }
})

mobileMenu.addEventListener('click',function(){
    headerBtnAndNav.classList.toggle('active')
    line.classList.toggle('open')
})

themeChangerElem.addEventListener('click',function(){
    changeTheme()
})

function changeTheme(){
    if($.documentElement.classList.contains('dark')){
        localStorage.setItem('vakilDadTheme','light')
    }
    else{
        localStorage.setItem('vakilDadTheme','dark')
    }
    $.documentElement.classList.toggle('dark')
}




///////////////////////////// services 
const servicesLinks = $.querySelectorAll('.services__link')

const servicesBtn1 = $.getElementById('services-btn-1')
const servicesBtn2 = $.getElementById('services-btn-2')
const servicesBtn3 = $.getElementById('services-btn-3')
const servicesContent1 = $.querySelector('.services__content')
const servicesContent2 = $.querySelector('.find-form')
const servicesContent3 = $.querySelector('.legal-info')
const insertServiceBox = $.querySelector('.insert-service-box')

servicesLinks.forEach(function(servicesLink){
    servicesLink.addEventListener('click',function(event){
        // give active class
        servicesLinks.forEach(function(link){
            link.classList.remove('services__link--active')
        })
        event.target.classList.add('services__link--active')
        // 
        // add content
        serviceGenerator()
    })
})
function serviceGenerator(){
    if (servicesBtn1.classList.contains('services__link--active')) {
        hideAllServicesForms()
        servicesContent1.classList.add('services-show')

        const service1SubmitBtn = $.getElementById('service1-submit-btn')
        service1SubmitBtn.addEventListener('click',function(){
            
            if($.getElementById('state-select').value != "pleaseSelect" && $.getElementById('city-select').value != "pleaseSelect" && $.getElementById('question-area').value.length > 100)
            $.querySelector('.services__content').submit()
            else{
                console.log('na');
            }
        })

    } else if (servicesBtn2.classList.contains('services__link--active')){
       
        hideAllServicesForms()
        servicesContent2.classList.add('services-show')

        let stateSelectBox = $.getElementById('state-select')
        let citySelectBox = $.getElementById('city-select')
        // cityAndStateGenerator(stateSelectBox,citySelectBox)
        // AnyCityGeneterator(citySelectBox)

        //sub
        const service2SubBtn = $.getElementById('services2-submit-btn')
        service2SubBtn.addEventListener('click',function(){
            $.querySelector('.find-form').submit()
        })

    } else if (servicesBtn3.classList.contains('services__link--active')){    
        hideAllServicesForms()
        servicesContent3.classList.add('services-show')
    }
}

function hideAllServicesForms(){
    servicesContent1.classList.remove('services-show')
    servicesContent2.classList.remove('services-show')
    servicesContent3.classList.remove('services-show')
}


// 
function tabError(errorText){

}


copyArr.forEach(function(copy){
    copy.addEventListener('click', copyTextFunction)
})

function copyTextFunction() {
    var copyText = this;
  
    copyText.select
    // copyText.setSelectionRange(0, 99999); // For mobile devices
    
    navigator.clipboard.writeText(copyText.textContent);

    alert("محتوا کپی شد: " + copyText.innerHTML.trim());
}