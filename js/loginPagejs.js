let $ = document
let urlParams = new URLSearchParams(location.search)
let primaryColor = urlParams.get('PColor')
if(primaryColor)
$.documentElement.style.setProperty('--primary-color', '#' + primaryColor)


const loginBox = $.querySelector('.login')
const x = $.querySelector('.x')
const noAccLink = $.querySelector('.login-form__link')
const skillModal = $.querySelector('.skill-modal')
var skillArr =[
    'یوتب'
]
window.onload = function(){
    skillGenerator(skillModal,skillArr)
    
}

function hideModal() {
    const modalBox = $.querySelector('.login__modal-box')
    // modalBox.style.opacity = '0'
    // setTimeout(() => {
        modalBox.style.display = 'none'
    //}, 100);
}

//events
noAccLink.addEventListener('click',function(){
    loginBox.innerHTML=''
    selectRulePageGenerator()
})


//forms Function

function selectRulePageGenerator(){
    
    loginBox.insertAdjacentHTML('beforeend',`<div class="login__modal-box">
    <h2 class="login__modal-title">نقش خود را انتخاب کنید</h2>
    <div class="login__modal-btn-wrapper">
    <div class="login__modal-btn" id="vakil-btn">وکیل</div>
    <div class="login__modal-btn" id="movakel-btn">موکل</div>
    </div>
    <img src="images/scales.svg" alt="" class="scales-image">
    <div class="x" ontouchend="history.back()" onclick="history.back()">X</div>
    </div>` )
    const lowyerBtnElem = $.getElementById('vakil-btn')
    const customerBtnElem = $.getElementById('movakel-btn')

    lowyerBtnElem.addEventListener('click', function () {
        hideModal()
        vakilFormGenerator()
    })
    customerBtnElem.addEventListener('click', function () {
        hideModal()
        movakelFormGenerator()
    })
}
function movakelFormGenerator() {
    
    loginBox.insertAdjacentHTML('beforeend',`<div class="login-card">
    <form action="" class="movakel-form" method="post">
        <div class="fild-wrapper">
            <label for="name" class="form-label">نام و نام خانوادگی</label>
            <input type="text" id="name" name="name" required autocomplete="off" class="form-input" maxlength="25">
        </div>
        <div class="fild-wrapper">
            <label for="phone" class="form-label">شماره تلفن</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" required class="form-input" autocomplete="off">
        </div>
        <div class="sub-button-wrapper">
            <button type="submit" class="submit-btn">ثبت اطلاعات</button>
            <div onclick="history.go(-1)" class="back-btn">لغو و بازگشت</div>
        </div>
    </form>
    <div class="form-left-box">
        <h2 class="form-left-box__title">وکیل داد</h2>
        <img src="images/scales.svg" alt="" class="form-left-box__img">
    </div>
</div>`)
}

function vakilFormGenerator(){
    loginBox.insertAdjacentHTML('beforeend',`  <div class="login-card basis-80">
    <form action="" method="post" class="vakil-form" enctype="multipart/form-data">
        <div class="vakil-form__inputs">
            <div class="vakil-form__input-label-wrapper">
                <label for="user-name-family" class="vakil-form__label">نام و نام خانوادگی</label>
                <input title="نام و نام خانوادگی کامل خود را وارد کنید" type="text" id="user-name-family" required maxlength="50" class="vakil-form__input" autocomplete="off" name="vakil-name">
            </div>
            <div class="vakil-form__input-label-wrapper">
                <label for="phone" class="vakil-form__label">شماره تماس</label>
                <input title="شماره تلفن خودتان را وارد کنید" type="text" id="phone" required maxlength="11" class="vakil-form__input" autocomplete="off" name="vakil-phone" pattern="[0-9]{11}">
            </div>
            <div class="vakil-form__input-label-wrapper">
                <label for="parvaneNumber" class="vakil-form__label">شماره پروانه وکالت</label>
                <input type="text" id="parvaneNumber" required maxlength="5" class="vakil-form__input" autocomplete="off" name="vakil-parvane" pattern="[0-9]{11}">
            </div>
            <div class="vakil-form__input-label-wrapper">
                <label for="cardNumber" class="vakil-form__label">شماره کارت بانکی</label>
                <input type="text" id="cardNumber" required maxlength="16" class="vakil-form__input" autocomplete="off" name="vakil-card-number" pattern="[0-9]{11}">
            </div>
            <div class="vakil-form__input-label-wrapper">
                <label for="state" class="vakil-form__label">انتخاب استان</label>
                <select id="state" required class="vakil-form__input" name="state">
                </select>
            </div>
            <div class="vakil-form__input-label-wrapper">
                <label for="city" class="vakil-form__label">انتخاب شهر</label>
                <select id="city" required class="vakil-form__input" name="city">
                </select>
            </div>
        </div>
        <div class="vakil-form__about-self-wrapper">
            <div class="text-area-wrapper">
                <label for="aboutSelf" class="vakil-form__label">توضیحات و تخصصات شما</label>
                <textarea title="توضیحاتی مختصر راجب خودتان" id="aboutSelf" cols="30" rows="5" class="vakil-form__input" maxlength="100" required name="vakil-details"></textarea>
            </div>
            <div class="text-area-wrapper">
                <label for="resume" class="vakil-form__label">رزومه کاری شما</label>
                <textarea id="resume" cols="30" rows="7" class="vakil-form__input" required name="vakil-resume"></textarea>
            </div>
            <div class="text-area-wrapper">
                <label for="address" class="vakil-form__label">آدرس</label>
                <textarea id="address" cols="30" rows="7" class="vakil-form__input" required name="vakil-address"></textarea>
            </div>
            <p class="skill-select-link">انتخاب تخصص</p>
        </div>
        <div class="vakil-form__photo-upload-wrapper">
            <img src="images/simple-user-default-icon-free-png.png" alt="" class="vakil-form__profile-photo" width="100%">
            <label for="user-profile-pic-input" class="profile-pic-choose">تصویر پروفایل انتخاب کنید</label>
            <input type="file" id="user-profile-pic-input" required name="vakil-photo" accept="image/*">
        </div>
        <div class="rule-accept-wrapper">
            <input type="checkbox" id="rule-accept" class="checkbox-input" required>
            <label for="rule-accept" class="vakil-form__label">شرایط و قوانین وکیل داد را قبول دارم</label>
        </div>
        <div class="vakil-form__sub-button-wrapper">
            <button type="submit" class="vakil-form__submit-btn">ثبت اطلاعات</button>
            <div onclick="history.go(-1)" class="vakil-form__back-btn">لغو و بازگشت</div>
        </div>
    </form>
    </div>`)

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

    const selectSkillBtn = $.querySelector('.skill-select-link')
    const skillModal = $.querySelector('.skill-modal')
    const cover = $.querySelector('.cover')
    const skillModalX = $.querySelector('.skill-modal__x')
    
    selectSkillBtn.addEventListener('click',function(){
        skillModal.classList.add('skill-modal--show')
        cover.classList.add('cover--show')
    }) 
    cover.addEventListener('click',removeSkillModal)
    skillModalX.addEventListener('click',removeSkillModal)
    
    function removeSkillModal(){
        skillModal.classList.remove('skill-modal--show')
        cover.classList.remove('cover--show')
    }
    // state city
    const stateSelectElem = $.getElementById('state')
    const citySelectElem = $.getElementById('city')
    cityAndStateGenerator(stateSelectElem,citySelectElem)

}


function skillGenerator(skillModal,skillArray){

    skillArray.forEach(function(skill){
        skillModal.insertAdjacentHTML('beforeEnd',`
        <div class="skill-modal__input-wrapper">
            <label for="${skill}" class="skill-modal__label">${skill}</label>
            <input type="checkbox" class="skill-modal__check-box" name="${skill}" id="${skill}">
        </div>
        `)
    });

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
    findedArr = findedArr[1]
    findedArr.forEach(function(item){
        let newOptionElem = document.createElement('option')
        newOptionElem.setAttribute('value',item)
        newOptionElem.innerHTML = item

        cityFragment.appendChild(newOptionElem)
    })
    citySelectBox.append(cityFragment)
})


}
