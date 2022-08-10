async function ipUser() {
    const jsonIp = await fetch('https://ipinfo.io/json?token=fe6eb3e1ee8fb3', { headers: { 'Accept': 'application/json' } })
    const ip = await jsonIp.json();
    return ip.ip;
}

let ip_user = "";

ipUser().then(ip => { ip_user = ip;});

function getIp(callback) {
    fetch('https://ipinfo.io/json?token=fe6eb3e1ee8fb3', { headers: { 'Accept': 'application/json' } })
        .then((resp) => resp.json())
        .catch(() => {
            return {
                country: 'us',
            };
        })
        .then((resp) => callback(resp.country))
}


const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    separateDialCode: true, 
    formatOnDisplay :true,
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
