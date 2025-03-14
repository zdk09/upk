let input = document.querySelector('.submit-input')

function submit_btn() {
    input.style.size = '82%';
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

    event.preventDefault(); 

    let name = document.querySelector('[name="name"]').value;
    let email = document.querySelector('[name="email"]').value;
    let num = document.querySelector('[name="tel"]').value;
    let name_company = document.querySelector('[name="name-company"]').value;


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
            
            // Пример отправки email с помощью EmailJS
            send_email(name, email, num, name_company);

            alert('Заявка отправлена!');

            console.log('Name:', name)
            console.log('Email:', email)
            console.log('Phone number:', num)
            console.log('Name company:', name_company)
        }
    }  
}

// Отправка письма через EmailJS
function send_email(name, email, num, name_company) {
    emailjs.init('waaqK1-CprNcLRQ-p'); // Замените YOUR_USER_ID на ваш настоящий User ID

    const templateParams = {
        from_name: name,
        from_email: email,
        phone_number: num,
        company_name: name_company,
    };

    emailjs.send('service_bnah7is', 'template_atrbadd', templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
        }, function(error) {
            console.log('Failed to send email:', error);
        });
}

let submit_btn_send = document.querySelector('.btn-warning')
submit_btn_send.addEventListener('click', submit_send)
