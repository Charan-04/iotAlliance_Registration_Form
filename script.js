const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const cfm = document.getElementById('cfm');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})


const sendData = (usernameVal, sRate, count) => {
    if (sRate === count) {
        alert("registration successfull" + " " + usernameVal);
        location.href = `demo.html?username= ${usernameVal}`;

    }
}


const successMsg = (usernameVal) => {
    let formControl = document.getElementsByClassName('control');
    var count = formControl.length - 1;
    for (var i = 0; i < formControl.length; i++) {
        if (formControl[i].className === "control success") {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);
        } else {
            return false;
        }

    }
}

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}


const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const numberVal = number.value.trim();
    const passwordVal = password.value.trim();
    const cfmVal = cfm.value.trim();

    if (usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'minimum 3 character');
    } else {
        setSuccessMsg(username);
    }

    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Email is not valid');
    } else {
        setSuccessMsg(email);
    }

    if (numberVal === "") {
        setErrorMsg(number, 'number cannot be blank');
    } else if (numberVal.length != 10) {
        setErrorMsg(number, 'number is not valid');
    } else {
        setSuccessMsg(number);
    }

    if (passwordVal === "") {
        setErrorMsg(password, 'password cannot be blank');
    } else if (passwordVal.length <= 5) {
        setErrorMsg(password, 'minimum 6 character');
    } else {
        setSuccessMsg(password);
    }

    if (cfmVal === "") {
        setErrorMsg(cfm, 'password cannot be blank');
    } else if (passwordVal !== cfmVal) {
        setErrorMsg(cfm, 'password is incorrect');
    } else {
        setSuccessMsg(cfm);
    }
    successMsg(usernameVal);

}
function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "control success";
}