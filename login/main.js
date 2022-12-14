//// login api
const loginForm = document.getElementById('login')

loginForm.addEventListener('submit', async function (evt) {
    evt.preventDefault(); // to prevent the custom form property of reloading on submission.

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
   
                    setTimeout(() => { location.assign('../dashboard/dashboard1.html'); }, 1700);

    await fetch('https://meetrecruitofficial.cyclic.app/api/sign-in',{
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            email: email,
            password : password,
        })
    })
        .then(res => res.json())
        .then(data => {
            const message = data.message;
            const token = data.token;
            console.log(message, token)
            if (message) {
                swal({
                    icon: "error",
                    text: message ,
                    button: false,
                })
            } else if (error) {
                swal({
                    icon: "error",
                    text: error,
                    button: false,
                })
            }
            else {
                localStorage.setItem('token',token)
                swal({
                    icon: "success",
                    text: "login successful",
                    button: false,
                })
                setTimeout(() => { location.assign('/index'); }, 1700);
                // setTimeout(() => { location.assign('/index'); }, 1000);
            }
        })

})
