// forms validation
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = [...document.querySelectorAll('.needs-validation')]

    // Loop over them and prevent submission

    forms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

// validity password
// passwordInputs = [...document.querySelectorAll("input[type='password']")]
// passwordInputs.forEach((element)=>{
//     element.addEventListener("input",(event)=>{
//         console.log(element.textLength)
//         if (element.textLength>8){
//             element.setCustomValidity("The password must contain a minimum of 8 characters")
//         } else {
//             element.setCustomValidity("")
//         }
//     })
// })