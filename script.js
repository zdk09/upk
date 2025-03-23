
let EMAILJS_USER_ID
let EMAILJS_SERVICE_ID
let EMAILJS_TEMPLATE_ID

fetch("config.json")
    .then(response => response.json())
    .then(config => {
        EMAILJS_USER_ID = config.EMAILJS_USER_ID
        EMAILJS_SERVICE_ID = config.EMAILJS_SERVICE_ID
        EMAILJS_TEMPLATE_ID = config.EMAILJS_TEMPLATE_ID

        emailjs.init(EMAILJS_USER_ID);
        console.log("EmailJs успешно загружен!")
    })
    .catch(error => console.error("Ошибка загрузки конфигураци:", error));


// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const menu = document.querySelector('.menu');

//     menuToggle.addEventListener('click', function() {
//         menu.classList.toggle('active'); // Переключение класса для отображения меню
//     });
// });


let input = document.querySelector('.submit-input')

function submit_btn() {
    input.style.size = '82%'
}

class Applicant {
   constructor(name, phone, email, name_company) {
       this.name = name
       this.email = email
       this.phone = phone
       this.name_company = name_company
   }
} 

function submit_send() {

    event.preventDefault()

    let name = document.querySelector('.submit-input-name').value
    let email = document.querySelector('.submit-input-email').value
    let phone = document.querySelector('.submit-input-number').value
    let name_company =  document.querySelector('.submit-input-namecomp').value

    let check = false

    if (check == false) {
        if (name == "") {
            check = false
        } else if (email == "") {
            check = false
        } else if (phone == "") {
            check = false
        } else {
            check = true
        }

        if (check == true) {
            let applicant = {
                name: name,
                email: email,
                phone: phone,
                name_company: name_company,
            }
            

            alert('Заявка отправлена!')

            send_email(name, email, phone, name_company)

            console.log('Name:', name)
            console.log('Email:', email)
            console.log('Phone number:', phone)
            console.log('Name company:', name_company)
            
        }
    }  
}

function send_email(name, email, phone, name_company) {
    emailjs.init(EMAILJS_USER_ID) // PUBLIC KEY, USER_ID

    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        name_company: name_company,
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams) // Service_ID, Template_ID, const
        .then(function(response) {
            console.log('Success', response)
        }, function(error) {
            console.log('Error', error)
        })
}


let submit_btn_send = document.querySelector('.submit-btn')
submit_btn_send.addEventListener('click', submit_send)


let menu_btn_open = document.querySelector('.menu-btn-open')
menu_btn_open.addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.remove('close');
    menu.classList.add('active');
})

let menu_btn_close = document.querySelector('.menu-btn-close')
menu_btn_close.addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.remove('open');
    menu.classList.add('close');
    console.log('close')
})

//transport@oooyupk.ru

