
const form = document.getElementById("form-register");

function send(event) {
    
    event.preventDefault();
    const values = new FormData(event.target);
    const name = values.get('name');
    const lastName = values.get('lastName');
    const email = values.get('email');
    const phoneNumber = phoneInput.getNumber();

    const myHeaders = new Headers();
    myHeaders.append("x-trackbox-username", "username");
    myHeaders.append("x-trackbox-password", "password");
    myHeaders.append("x-api-key", "2643889w34df345676ssdas323tgc738");
    myHeaders.append("Content-Type", "application/json");

    const myJson = {
        "ai": "ask from your trackbox partner",
        "ci": "1",
        "gi": "ask from your trackbox partner",
        "userip": ip_user,
        "firstname":  name,
        "lastname": lastName,
        "email":  email,
        "password": "",
        "phone": phoneNumber,
        "so": "funnelname",
        "sub": "FreeParam",
        "MPC_1": "FreeParam",
        "MPC_2": "FreeParam",
        "MPC_3": "FreeParam",
        "MPC_4": "FreeParam",
        "MPC_5": "FreeParam",
        "MPC_6": "FreeParam",
        "MPC_7": "FreeParam",
        "MPC_8": "FreeParam",
        "MPC_9": "FreeParam",
        "MPC_10": "FreeParam",
        "MPC_11": "FreeParam",
        "MPC_12": "FreeParam",
        "ad": "FreeParam",
        "term": "FreeParam",
        "campaign": "FreeParam",
        "medium": "FreeParam"
    };

    
    console.log(myJson); // json Data form
    

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: myJson,
        redirect: 'follow'
    };

    fetch("https://platform.yourdomain.com/api/signup/procform", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)})
        .catch(error => console.log('error', error));

}

function validateEmail() {
    let mail = document.getElementById('txtEmail');
    let divEmailValidation = document.getElementById('divEmailValidation');

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value)) {
        divEmailValidation.style.display = 'none';
        mail.style.boxShadow = 'none';
        mail.style.border = '1px solid #ced4da';
        return (true)
    } else {
        divEmailValidation.style.display = 'flex';
        divEmailValidation.style.color = 'red';
        mail.style.border = '1px solid red';
        return (false)
    }
}

function validatePhone() {
    let phone = document.getElementById('phone');
    let divPhoneValidation = document.getElementById('divPhoneValidation');

    if (/^[1-9]{3}[0-9]{3}[0-9]{4}$/.test(phone.value)) {
        divPhoneValidation.style.display = 'none';
        phone.style.boxShadow = 'none';
        phone.style.border = '1px solid #ced4da';
        return (true)
    } else {
        divPhoneValidation.style.display = 'flex';
        divPhoneValidation.style.color = 'red';
        phone.style.border = '1px solid red';
        return (false)
    }
}

form.addEventListener("submit", send)



