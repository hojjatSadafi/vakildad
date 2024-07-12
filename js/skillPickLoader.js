// How to Use :
// 
// 1. set skill-select class name for each of skill select box 
// 2. link it to your html
// 
// 

let skillArr = [
    'ملکی',
    'ثبت احوال',
    'شرکت ها',
    'انحصار وراثت',
    'دیوان عدالت اداری',
    'اداره کار',
    'جرایم اینترنتی',
    'وصول مطالبات',
    'خانواده',
    'بیمه',
    'ثبت اسناد',
    'اجرای احکام',
    'مالکیت معنوی',
    'جرایم علیه امنیت کشور',
    'جرایم علیه اموال',
    'جرایم علیه اشخاص',
    'اموال و مالکیت',
    'سربازی و نظام وظیفه',
    'کیفری',
    'داوری',
    'مالیات',
    'قرارداد'
]


const skillSelectElemArray = document.querySelectorAll('.skill-select')


skillSelectElemArray.forEach(function(skillItem){
    skillsGenerator(skillItem)
})

function skillsGenerator(skillSelectBox){
    let skillFragment = $.createDocumentFragment() 

skillArr.forEach(function(item){
    let newOptionElem = $.createElement('option')
    newOptionElem.setAttribute('value',item)
    newOptionElem.innerHTML = item
   
    skillFragment.appendChild(newOptionElem)
})
skillSelectBox.append(skillFragment)

}