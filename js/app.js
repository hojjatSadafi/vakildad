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

let loginBtns = $.querySelectorAll('.login-btn')
let primaryColor = (getComputedStyle(document.documentElement)).getPropertyValue('--primary-color')
let primaryColorNoSharp = primaryColor.slice(1)
loginBtns.forEach(function(btn){
    btn.setAttribute('href',`loginForm.html?PColor=${primaryColorNoSharp}`)
})

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
            <select name="state" id="state-select" class="services__select-box">
                <option value="pleaseSelect" class="services__option">استان خود را انتخواب کنید...</option>
            </select>
            <select name="city" id="city-select" class="services__select-box">
                <option value="pleaseSelect" class="services__option">شهر خود را انتخواب کنید...</option>
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
            <select name="state" id="state-select" class="find-form__select">
                <option value="everywhere" selected>هر استانی</option>
            </select>
            <select name="city" id="city-select" class="find-form__select">
                
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
        cityAndStateGenerator(stateSelectBox,citySelectBox)
        AnyCityGeneterator(citySelectBox)

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

let dataArr = [
    ['اذربایجان شرقی',['تبریز','آذرشهر','اسکو','اهر','ایلخچی','بستان آباد','بناب','ترکمانچای','تسوج','جلفا','چاراویماق','خاروانا','خداآفرین','خسروشاه','خواجه','سراب','شبستر','صوفیان','عجبشیر','کلیبر','گوگان','لیلان','مراغه','مرند','ملکان','ممقان','مهربان','میانه','ورزقان','هریس','هشترود','هوراند','یامچی','هادی شهر','خسروشهر','انزاب']],

    ['آذربایجان غربی',['ارومیه','اشنویه','انزل','پلدشت','پیرانشهر','تکاب','چالدران','خوی','رحمت آباد','سردشت','سلماس','سیه چشمه','شاهین دژ','شوط','قره ضیاءالدین','کشاورز','ماکو','مرحمت آباد','مهاباد','میاندوآب','نقده','نوشین شهر']],

    ['اردبیل',['اردبیل','ارشق','انگوت','بیله سوار','پارس آباد','خلخال','سرعین','قشلاق دشت','کوثر','گرمی','مشکین شهر','نمین','نیر','هیر','جعفرآباد','اصلاندوز','لاهرود','گیوی']],

    ['اصفهان',['آران وبیدگل','اردستان','اصفهان','بادرود','باغ بهادران','برخوار','بویین میاندشت','بهارستان','تیران','جرقویه','جلگه','چادگان','خمینی شهر','خوانسار','خورو بیابانک','دولت آباد','دهاقان','زرین شهر','سمیرم','شاهین شهر','شهرضا','فریدن','فریدونشهر','فلاورجان','کاشان','کرون','کوهپایه','گلپایگان','مبارکه','مهردشت','میمه','نایین','نجف آباد','نطنز','هرند','سپاهانشهر','تیران و کرون','خوراسگان','لنجان']],

    ['البرز',['اشتهارد','طالقان','فردیس','کرج','نظراباد','هشتگرد']],

    ['ایلام',['آبدانان','ملکشاهی','ایلام','ایوان','چرداول','دره شهر','دهلران','شیروان','شیروان و چرداول','مهران','هلیلان']],

    ['بوشهر',['برازجان', 'بندر ریگ', 'تنگستان', 'جم', 'جم و ریز', 'خارک', 'خورموج', 'دشتستان', 'دشتی', 'دلوار', 'دیر', 'دیلم', 'قائنات', 'ریگ','سعدآباد', 'شبانکاره', 'عسلویه', 'کنگان','گناوه']],

    ['تهران',['اسلامشهر', 'اندیشه', 'اوشان فشم و میگون', 'بوستان', 'پاکدشت', 'پیشوا', 'جوادآباد', 'چهاردانگه', 'دماوند', 'رباط کریم', 'رودهن', 'ری', 'شمیران', 'شهریار'
    ,'فشافویه','فشم','فیروزکوه','قدس','قرچک','کهریزک','گلستان','لواسان','مارلیک','ملارد','ورامین','بومهن','پردیس','شریف آباد'
    ]], 

    ['چهارمحال و بختیاری',['اردل', 'بازفت', 'بروجن', 'بن', 'خانمیرزا', 'سامان', 'شهرکرد', 'فارسان', 'فلارد', 'کوهرنگ', 'کیار', 'گندمان', 'لاران', 'لردگان','میانکوه']],

    ['خراسان جنوبی',['بشرویه', 'بیرجند', 'خوسف', 'درمیان', 'زهان', 'زیرکوه', 'سرایان', 'سربیشه', 'طبس', 'فردوس', 'قائن', 'گندمان', 'قائنات', 'نهبندان','نیمبلوک']],

    ['خراسان رضوی',['ششتمد', 'صالح آباد', 'طرقبه', 'فریمان', 'فیض آباد', 'قوچان', 'کاشمر', 'کلات نادر', 'کوهسرخ', 'گناباد', 'لطف آباد', 'مشهد', 'مه ولات', 'میان جلگه'
    ,'نیشابور','سبزوار','تربت حیدریه','چناران','درگز','تربت جام','برداسکن','لواسان','سرخس','زبرخان','تایباد','جوین','خلیل آباد','خواف'
    ,'رشتخوار','خوشاب','باخرز','جغتای','بجستان','شاندیز','زاوه','سرولایت','خضری','بینالود'
    ]],

    ['خراسان شمالی',['شخانه', 'اسفراین', 'بجنورد', 'جاجرم', 'رازجرگلان', 'فاروج', 'مانه', 'مانه و سملقان', 'آشخانه']],

    ['خوزستان',['آبادان','آغاجاری','امیدیه','اندیکا','اندیمشک','اهواز','ایذه','باغملک','باوی','بندر امام خمینی','بندرماهشهر','بهبهان','حمیدیه','خرمشهر','دزفول','دشت آزادگان','رامشیر','رامهرمز','سوسنگرد','شادگان','شاوور','شوش','شوشتر','گتوند','لالی','مسجدسلیمان','ملاثانی','هندیجان','سربندر','هویزه']],

    ['زنجان',['ابهر', 'ایجرود', 'بزینه رود', 'خدابنده', 'خرمدره', 'دندی', 'زرین آباد', 'زنجان', 'سجاس', 'سلطانیه', 'طارم', 'قیدار', 'گرماب', 'ماهنشان']],

    ['سمنان',['ایوانکی','بسطام','بیارجمند','دامغان','سمنان','شاهرود','شهمیرزاد','گرمسار','مهدی شهر','میامی']],

    ['سیستان و بلوپستان',['ایرانشهر','چابهار','خاش','دشتیاری','زابل','زاهدان','زهک','سراوان','سیب و سوران','شهرکی ونارویی','کنارک','میان کنگی','میرجاوه','هیرمند']],

    ['فارس',['آباده', 'آباده طشک', 'ارسنجان', 'استهبان', 'اقلید', 'بوانات', 'بیضا', 'پاسارگاد', 'جره و بالاده', 'جویم', 'جهرم', 'چنارشاهیجان', 'خرامه', 'خرم بید'
    ,'خشت و کمارج','خضر','خفر','خنج','داراب','رستم','زرقان','زرین دشت','سپیدان','سروستان','سعادت شهر','شیب کوه','شیبکوه','شیراز'
    ,'صفاشهر','فراشبند','فسا','فیروزآباد','قیروکارزین','کازرون','کامفیروز','کربال','گراش','لارستان'
    ,'لامرد','مرودشت','ممسنی','مهر','نورآباد','نورآبادممسنی','نی ریز','لار','قائمیه','اوز','بیرم','بالاده'
    ]],
    
    ['قزوین',['آبگرم','آبیک','آوج','اسفرورین','البرز','الموت','الموت شرقی','الموت غربی','بشاریات','بوئین زهرا','تاکستان','خرمدشت','دشتابی','رامند','سنندج','شال','ضیا آباد','طارم سفلی','قزوین','کوهین','محمدیه','نوشهر','الوند','رودبارشهرستان','قزل']],
    
    ['قم',['جعفریه', 'دستجرد', 'کهک', 'خلجستان', 'قم']],

    ['کردستان',['بانه', 'بیجار', 'دهگلان', 'دیواندره', 'سروآباد', 'سریش آباد', 'سقز', 'شویشه', 'قروه'
    ,'کامیاران', 'کلاترزان', 'مریوان', 'موچش', 'یاسوکند', 'حسن آباد', 'کرانی'
    ]],
    
    ['کرمان',['ارزوئیه','انار','بافت','بردسیر','بم','جیرفت','رابر','راور','راین','رفسنجان','رودبار','رودبار جنوب','ریگان','زرند','سیرجان','شهداد','شهربابک','عنبراباد','فاریاب','کرمان','کهنوج','ماهان','عنبرآباد','منوجان','نرماشیر','گلباف','کوهبنان','فهرج','کرمان','قلعه گنج']],
    
    ['کرمانشاه',['اسلام آباد', 'اسلام آباد غرب', 'بیستون', 'پاوه', 'ثلاث باباجانی', 'دالاهو', 'روانسر', 'سرپل ذهاب', 'سنقر', 'سنقرکلیائی', 'صحنه', 'قصرشیرین', 'کرند غرب', 'کنگاور', 'گیلان غرب', 'هرسین']],

    ['کهگیلویه و بویراحمد',['بویراحمد', 'بهمئی', 'دنا', 'کهکیلویه', 'گچساران', 'یاسوج', 'باشت']],

    ['گلستان',['آزادشهر','آق قلا','بندر گز','بندرترکمن','بندرگز','خان ببین','داشلی برون','رامیان','علی آباد','علی آباد کتول','کردکوی','کلاکه','کمالان','گالیکش','گرگان','گمیشان','گنبد','گنبد کاووس','مراوه تپه','مینودشت','نوکنده']],

    ['گیلان',['آستارا', 'آستانه اشرفیه', 'املش', 'بندرانزلی', 'تالش', 'جیرنده', 'خمام', 'رحیم آباد', 'رشت', 'رضوانشهر', 'رودسر', 'سنگر', 'سیاهکل', 'شفت'
    ,'صومعه سرا','طالش','عمارلو','فومن','کرگانرود','کوچصفهان','لاهیجان','لنگرود','ماسال','آستانه','گرگانرود','لوشان','لشت نشاء','کیاشهر','منجیل']],

    ['لرستان',['ازنا','ازناچاپلق','اشترینان','الشتر','الیگودرز','بروجرد','پلدختر','خرم آباد','درود','دلفان','رومشکان','سراب دوره','سلسله','کوهدشت','نورآباد دلفان']],

    ['مازندران',['آمل','بابل','بابلسر','بندپی','بهشهر','تنکابن','جویبار','چالوس','چمستان','دابودشت','رامسر','رویان','ساری','سرخرود','سوادکوه','شیرگاه','عباس آباد','فریدونکنار','قائمشهر','کجور','کلاردشت','کیاسر','کیاکلا','نور','محمودآباد','نکا','قائم شهر','گلوگاه','لاریجان','میاندرود','گلوگاه بندپی','نشتا','گتاب','امیرکلا','بندپی شرقی','نشتارود','کلارآباد','زیراب','ایزدشهر','سادات محله','هچیرود','سورک','تنکاین','سلمانشهر','شیرود','بهنمیر','پلسفید','کتالم']],

    ['مرکزی',['آشتیان','اراک','تفرش','خمین','خنداب','دلیجان','زرندیه','ساوه','سربند','شازند','فراهان','کمیجان','محلات','نراق','نوبران','فرمهین','زالیان','میلاجرد']],

    ['هرمزگان',['ابوموسی','بستک','بشاگرد','بندر لنگه','بندرخمیر','بندرعباس','بندرلنگه','پارسیان','جاسک','حاجی آباد','رودان','قشم','کیش','میناب']],

    ['همدان',['اسدآباد','بهار','تویسرکان','جوکار','خزل','دمق','رزن','سامن','صالح اباد','فامنین','قروه درجزین','قهاوند','کبودرآهنگ','گل تپه','لالجین','ملایر','نهاوند','همدان','فیروزان']],

    ['یزد',['ابرکوه','اردکان','اشکذر','بافق','بهاباد','تفت','خاتم','زارچ','صدوق','مهریز','میبد','هرات و مروست','یزد','عقدا']],
    
]

function cityAndStateGenerator(stateSelectBox,citySelectBox){
    
    let statesFragment = $.createDocumentFragment() 
    let cityFragment = $.createDocumentFragment()

dataArr.forEach(function(item){
    let newOptionElem = document.createElement('option')
    newOptionElem.setAttribute('value',item[0])
    newOptionElem.innerHTML = item[0]
   
    statesFragment.appendChild(newOptionElem)
})
stateSelectBox.append(statesFragment)

stateSelectBox.addEventListener('change',function(){
    citySelectBox.innerHTML = ''
    let findedArr = dataArr.find(function(item){
        return stateSelectBox.value === item[0]
    })
    if(findedArr){
        findedArr = findedArr[1]
        findedArr.forEach(function(item){
            let newOptionElem = document.createElement('option')
            newOptionElem.setAttribute('value',item)
            newOptionElem.innerHTML = item
            
            cityFragment.appendChild(newOptionElem)
        })
        citySelectBox.append(cityFragment)
        AnyCityGeneterator(citySelectBox)
    } else {
        AnyCityGeneterator(citySelectBox)
    }
})


}
function AnyCityGeneterator(citySelectBox){
    citySelectBox.insertAdjacentHTML('afterbegin','<option value="anycity">هر شهری</option>')
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