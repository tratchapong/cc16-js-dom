const loginForm = document.querySelector('.login-form')

const hdlSubmit = (e) => {
    e.preventDefault()
    // let uname = loginForm.elements.username.value
    console.log(loginForm.elements['username'].value)
    console.log(loginForm.elements['password'].value)
    // console.log('uname = ', uname)'

    // let result = {
    //     username: loginForm.elements['username'].value,
    //     password: loginForm.elements['password'].value,
    // }
    // console.log(result)
    
    let userObj = {}

    for( let el of loginForm.elements) {
        console.log(el.id)
        if(el.id.trim() === '') {
            continue
        }
        userObj[el.id] = el.value
    }
    console.log(userObj)
}

loginForm.addEventListener('submit', hdlSubmit)