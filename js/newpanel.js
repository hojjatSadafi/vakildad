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

////////////// select rule tiggler


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

////skill picker

const skillPickerBtn = get('pick-skill-btn')
const modalBox = get('vakil-modal')
const coverElem = get('cover')
const x = getC('x')
function toggleModal(){
    modalBox.classList.toggle('vakil-form__modal--show')
    coverElem.classList.toggle('cover--show')
}
skillPickerBtn.addEventListener('click',toggleModal)
x.addEventListener('click',toggleModal)