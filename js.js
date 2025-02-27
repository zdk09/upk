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
    let name = document.querySelector('.submit-input-name').value
    let email = document.querySelector('.submit-input-email').value
    let num = document.querySelector('.submit-input-number').value
    let name_company =  document.querySelector('.submit-input-namecomp').value

    let check = false

    if (check == false) {
        if (name == "") {
            check = false
        } else if (email == "") {
            check = false
        } else if (num == "") {
            check = false
        } else {
            check = true
        }

        if (check == true) {
            let applicant = {
                name: name,
                email: email,
                number: num,
                name_company: name_company,
            }
            
            //applicants.push(applicant)

            //send_email()

            alert('Заявка отправлена!')

            send_email()

            console.log('Name:', name)
            console.log('Email:', email)
            console.log('Phone number:', num)
            console.log('Name company:', name_company)
            
        }
    }  
}

function send_email() {
    document.getElementById('submitForm').addEventListener('submit', function(event) {
        event.preventDefault();
            
        const formData = new FormData(this);
        const data = {
            from: `${formData.get('name')} <${formData.get('email')}>`,
            to: 'sychevdenis2009@gmail.com', // Email получателя
            subject: 'Новое сообщение',
            body_text: `Имя: ${formData.get('name')} Почта: ${formData.get('email')} Телефон: ${formData.get('tel')} Название компании: ${formData.get('name-company')}`
        };

        axios({
            method: 'post',
            url: `https://api.elasticemail.com/v2/email/send`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-ElasticEmail-ApiKey': 'EE1AA0E95DC1F2C32B040831FDCA57903636C351AA6CE1A220D17CF7DE88DAFE88E9F2F8F2D0A97BA326957D2C89927D'
            },
            params: data
        })
    });
}

let applicants = []

let submit_btn_send = document.querySelector('.submit-btn')
submit_btn_send.addEventListener('click', submit_send)
//transport@oooyupk.ru

