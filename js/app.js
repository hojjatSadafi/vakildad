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




////////

// let loginBtns = $.querySelectorAll('.login-btn')
// let primaryColor = (getComputedStyle(document.documentElement)).getPropertyValue('--primary-color')
// let primaryColorNoSharp = primaryColor.slice(1)
// loginBtns.forEach(function(btn){
//     btn.setAttribute('href',`loginForm.html?PColor=${primaryColorNoSharp}`)
// })

///////////////////////////// services 
const servicesLinks = $.querySelectorAll('.services__link')

const servicesBtn1 = $.getElementById('services-btn-1')
const servicesBtn2 = $.getElementById('services-btn-2')
const servicesBtn3 = $.getElementById('services-btn-3')
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
        insertServiceBox.innerHTML = ''
        insertServiceBox.insertAdjacentHTML('beforeend',`
        <form class="services__content" action="" method="post">
        <textarea name="question-area" id="question-area" cols="30" rows="10" placeholder="سوال خود را بنویسید..." class="services__text-area" maxlength="1400" minlength="100"></textarea>
        <div class="services__select-wrapper">
            <select name="state" id="state-select" class="services__select-box state-select">
            </select>
            <select name="city" id="city-select" class="services__select-box city-select">
            </select>
        </div>
        <div class="services__form-submit-btn" id="service1-submit-btn">ارسال</div>
        </form>`)
        const stateSelectBox = $.getElementById('state-select')
        const citySelectBox = $.getElementById('city-select')
        cityAndStateGenerator(stateSelectBox,citySelectBox)

        const service1SubmitBtn = $.getElementById('service1-submit-btn')
        service1SubmitBtn.addEventListener('click',function(){
            
            if($.getElementById('state-select').value != "pleaseSelect" && $.getElementById('city-select').value != "pleaseSelect" && $.getElementById('question-area').value.length > 100)
            $.querySelector('.services__content').submit()
            else{
                console.log('na');
            }
        })

    } else if (servicesBtn2.classList.contains('services__link--active')){
        insertServiceBox.innerHTML = ''
        insertServiceBox.insertAdjacentHTML('beforeend',`
        <form action="" class="find-form">
            <select name="state" id="state-select" class="find-form__select state-select">
                
            </select>
            <select name="city" id="city-select" class="find-form__select city-select">
                
            </select>
            <select name="skill" id="skill-select" class="find-form__select">
                <option value="everyskill">هر تخصصی</option>
            </select>
            <input type="text" maxlength="30" placeholder="جستجو در نام..." class="find-form__select">
            <div class="services__form-submit-btn" id="services2-submit-btn">جستجو</div>
        </form>
        `)
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
        insertServiceBox.innerHTML = ''
        insertServiceBox.insertAdjacentHTML('beforeend',`
        <form action="" class="legal-info">
        <select name="legal-info-select" class="legal-info__select" id="">
            <option value="everyskill">هر تخصصی</option>
        </select>
        <div class="services__form-submit-btn">جستجو</div>
        </form>
        `)
    }
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