let $ = document
let get = function (id){return document.getElementById(id)}
let getC = function (className){return document.querySelector('.'+className)}

///theme handler 
let localStorageTheme = localStorage.getItem('vakilDadTheme')
if(localStorageTheme === "dark"){
    document.documentElement.classList.add('dark')
}
// let images=[
//     "images/judgeicons/1.png",
//     "images/judgeicons/2.png",
//     "images/judgeicons/3.png",
//     "images/judgeicons/4.png",
//     "images/judgeicons/5.png",
// ]

// const arrowrightBtn = get('right-arrow')
// const arrowLeftBtn = get('left-arrow')
// let imageIndex = 0

// let imageElem = get('temlate-left__img')

// arrowLeftBtn.addEventListener('click',pervImage)
// arrowrightBtn.addEventListener('click',nextImage)

// function nextImage(){
//     imageIndex++
//     if(imageIndex === images.length){
//         imageIndex = 0
//     }
//     imageElem.src = images[imageIndex]
//     addAnim()
// }
// function pervImage(){
//     imageIndex--
//     if(imageIndex < 0){
//         imageIndex = images.length-1
//     }
//     imageElem.src = images[imageIndex]
//     addAnim()
// }

// function addAnim(){
//     imageElem.style.animation = "imageAnim 500ms 1 both "
//     setTimeout(() => {
//         imageElem.style.animation = ""
//     }, 500);
// }

// setInterval(function(){
//     nextImage()
// },7000)

////////////// select rule toggler


const selectRuleBtns = $.querySelectorAll('.template-right__select-rule')
const RuleBtnVakil = get('select-rule-vakil')
const RuleBtnMovakel = get('select-rule-movakel')

RuleBtnMovakel.addEventListener('click',function(){
    clearRuleBtnActives()
    this.classList.add('template-right__select-rule--active')
})
RuleBtnVakil.addEventListener('click',function(){
    clearRuleBtnActives()
    this.classList.add('template-right__select-rule--active')
})

function clearRuleBtnActives(){
    selectRuleBtns.forEach(function(btn){
        btn.classList.remove('template-right__select-rule--active')
    })
}


///// upload image

const vakilProfileImageElem = $.querySelector('.vakil-form__profile-img')
const uploadImageInput = $.getElementById('vakil-image')
uploadImageInput.addEventListener('input',function(event){


    let file = uploadImageInput.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        vakilProfileImageElem.setAttribute('src',e.target.result)
    }
    reader.readAsDataURL(file);
    })

//parvane year generator
const vakilParvaneYearSelect = get('vakil__parvaneYear')
let yearHolderFragment = $.createDocumentFragment()
for(let i=1320;i<=1403;i++){
    let newYearOption = $.createElement('option')
    newYearOption.value = i
    newYearOption.innerHTML = i
    yearHolderFragment.append(newYearOption)
}
vakilParvaneYearSelect.append(yearHolderFragment)
//step by step
currentTab = 4

const vakilForm = get('vakil-form')
const stepParent = getC('vakil-form__step-wrapper')
const tabsArray = $.querySelectorAll('.tab')
const vakilFormSubmitBtn = get('vakil-submit')
const vakilFormPervBtn = get('vakil-perv')

function generateSteps (){
    let stepFragment = $.createDocumentFragment()
    for(i=0;i<tabsArray.length;i++){
        let newStepElem = $.createElement('span')
        newStepElem.classList.add('step')

        stepFragment.appendChild(newStepElem)
    }
    stepParent.append(stepFragment)
}

function showTab(tabIndex){
    tabsArray[tabIndex].classList.add('tab--show')
   

    if(tabIndex == 0){
        vakilFormPervBtn.style.display = 'none'
    } else {
        vakilFormPervBtn.style.display = 'block'
    }
    if(tabIndex == (tabsArray.length -1)){
        vakilFormSubmitBtn.innerHTML = 'ثبت'
    } else {
        vakilFormSubmitBtn.innerHTML = 'بعدی'
    }
}

function nextPerv(nextOrPerv){

    if(nextOrPerv == 1 && !isFormValid()){
        return false
    }

    tabsArray[currentTab].classList.remove('tab--show')
    if(nextOrPerv === 1){
        tabsArray[currentTab].style.right = '100%'
    } else if(nextOrPerv === -1) {
        tabsArray[currentTab].style.right = '-100%'
    }
    // tabsArray[currentTab].classList.add('tab--out')

    currentTab = currentTab + nextOrPerv

    if(currentTab >= tabsArray.length){
        vakilForm.submit()
        return false
    }

    showTab(currentTab)
}

function isFormValid(){
    isValid = true
    let tabInputs = (tabsArray[currentTab].getElementsByTagName('input'))
    for(i=0;i<tabInputs.length;i++){
        if(tabInputs[i].value == ""){
            isValid = false
            console.log('invalid');
        }    
    }

    if(isValid){
        const steps = $.querySelectorAll('.step')
        steps[currentTab].classList.add('step--pased')
    }

    return isValid
}
generateSteps()
showTab(currentTab)
vakilFormSubmitBtn.addEventListener('click',function(){
    nextPerv(1)
})
vakilFormPervBtn.addEventListener('click',function(){
    nextPerv(-1)
})

//// skill pick change

const skillListElem = getC('skill-list')
const skillSelectBox = get('vakil__skill')
let selectedSkillArr = []

skillSelectBox.addEventListener('input',function(){
    let newLiElem = $.createElement('li')
    newLiElem.classList.add('skill-list__item')
    newLiElem.innerHTML = this.value

    if(selectedSkillArr.includes(this.value)){

    } else {
        selectedSkillArr.push(this.value)
        skillListElem.append(newLiElem)
    }

})