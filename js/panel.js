let $ = document
const changeThemeBtn = $.querySelector('.header__theme-changer')
const mobileMenu = $.querySelector('.header__mobile-menu') 
const headerBtnAndNav = $.querySelector('.header-wrapper')
const line=$.querySelector('.line')
const panelList = $.querySelector('.panel-list')
const panelListLis = $.querySelectorAll('.panel-list__item')
const mainLeftBox = $.querySelector('.main__left-box') // appending container
const panelProfileBtn = $.querySelector('.panel-list__profile')
const panelToggler = $.querySelector('.panel-toggler')

window.addEventListener('load',function(){
    let siteTheme = localStorage.getItem('vakilDadTheme')
    if(siteTheme){
        if(siteTheme==='dark'){
            $.documentElement.classList.add('dark')
        }
    }
})

changeThemeBtn.addEventListener('click', function(){
    changeTheme()
})

mobileMenu.addEventListener('click',function(){
    headerBtnAndNav.classList.toggle('active')
    line.classList.toggle('open')
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


panelList.addEventListener('click',function(event){
     if(event.target.parentElement.classList.contains('panel-list__item')){
        panelListLis.forEach(function(item){
            item.classList.remove('panel-list__item--active')
        })
        event.target.parentElement.classList.add('panel-list__item--active')
    }
    
})





const vakilFrm = $.querySelector('vakil-form')
panelProfileBtn.addEventListener('click',function(){
    mainLeftBox.innerHTML = ''
    
})

const uploadImageInput = $.getElementById('user-profile-pic-input')
    uploadImageInput.addEventListener('input',function(event){
    let imageContainer = $.querySelector('.vakil-form__profile-photo')

    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        imageContainer.setAttribute('src',e.target.result)
  
    }
    reader.readAsDataURL(file);
    })

panelToggler.addEventListener('click',function(){
    panelList.classList.toggle('panel-list--active')
})


