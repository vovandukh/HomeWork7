let f1 = document.forms.f1;
let buttonSignUp = document.querySelector('.btn-signUp');
const regExp = /^[A-z]{1,}$/;
const regExpEmail = /^([a-z0-9_-]{1,}\.){0,}[a-z0-9_-]{1,}@[a-z0-9_-]{1,}\.[a-z]{1,}$/;
const regExpPassword = /^[A-z0-9_-]{1,}$/;



buttonSignUp.addEventListener('click', () => {
    const USER = {
        firstName: f1.firstName.value,
        lastName: f1.lastName.value,
        email: f1.email.value,
        password: f1.password.value

    }
    if (regExp.test(f1.firstName.value) == true
        && regExp.test(f1.lastName.value) == true
        && regExpEmail.test(f1.email.value) == true
        && regExpPassword.test(f1.password.value) == true) {

        let Check = () => {
            if (localStorage.length == 0) {
                return true
            } else if (!localStorage.getItem(f1.email.value)) {
                return true
            } else {
                return false
            }

        }
        if (Check() == true) {
            localStorage.setItem(f1.email.value, JSON.stringify(USER));
            f1.firstName.value = '';
            f1.lastName.value = '';
            f1.email.value = '';
            f1.password.value = '';
            document.querySelector('.emailForm').classList.remove('is-invalid');
            document.querySelectorAll('.form1').forEach((i) => {
                i.classList.remove('is-valid')
            })
            document.querySelector('.modalCheckEmail').style.visibility = 'hidden'
        } else {
            document.querySelector('.modalCheckEmail').style.visibility = 'visible';
            document.querySelector('.emailForm').classList.add('is-invalid');
            document.querySelectorAll('.form1').forEach((i) => {
                i.classList.add('is-valid')
            })
        }
        document.querySelectorAll('.form1').forEach((i) => {
            i.classList.remove('is-invalid')
        })
    } else {
        document.querySelectorAll('.form').forEach((i) => {
            i.classList.add('is-invalid')
        })
    }
});
let linkSignIn = document.querySelector('.linkSignin');
linkSignIn.addEventListener('click', () => {
    document.querySelector('.signUpWrapper').style.display = 'none';
    document.querySelector('.SignInWrapper').style.display = 'block';
})

let linlSingUp = document.querySelector('.linkSignup');
linlSingUp.addEventListener('click', () => {
    document.querySelector('.signUpWrapper').style.display = 'block';
    document.querySelector('.SignInWrapper').style.display = 'none';
})

let f2 = document.forms.f2;
let buttonSignIn = document.querySelector('.btn-signIn');

buttonSignIn.addEventListener('click', () => {
    if (regExpEmail.test(f2.email.value) == true && regExpPassword.test(f2.password.value) == true) {
        let item;
        for(let i = 0; i < localStorage.length;i++){
          if(f2.email.value == localStorage.key(i)){
              item = JSON.parse(localStorage.getItem(localStorage.key(i)))
          }
        }
        if (f2.password.value == item.password) {
            document.querySelector('.sName').innerHTML = item.firstName + ' ' + item.lastName;
            document.querySelector('.eMail').innerHTML = item.email;
            document.querySelector('.SignInWrapper').style.display = 'none';
            document.querySelector('.profileWrapper').style.display = 'block';
            f2.password.value = '';
            f2.email.value = '';
        }
        document.querySelector('.modalCheckLoginOrPassword').style.visibility = 'hidden';
    } else {
        document.querySelector('.modalCheckLoginOrPassword').style.visibility = 'visible';
    }
})

let btnSingUp = document.querySelector('.btnSignUp');

btnSingUp.addEventListener('click', () => {
    document.querySelector('.SignInWrapper').style.display = 'block';
    document.querySelector('.profileWrapper').style.display = 'none';
})