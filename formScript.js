let validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
let validateNumber = /^[0-9]{10}$/;

class Consulta{
    constructor(fullName , email, phone,  consulta){
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.consulta = consulta;
    }

    devolverDatos(){
        return (`${this.fullName}, ${this.email}, ${this.phone}, ${this.consulta}`)
    }
}

let consulta = []

/* Formulario de contacto */

$(() => {
    $("#formulario").submit((e) => {
        e.preventDefault()

        let datForm = new FormData(e.target)
        $('.errorMsg').hide();
        let conForm = new Consulta(datForm.get("fullName"), datForm.get("email"), datForm.get("mobile"), datForm.get("yourMessage"))

        if(!validateMail.test(datForm.get("email"))) {
            $('#errorusername').show()
        } else {
            if(!validateNumber.test(datForm.get("mobile"))) {
                $('#errormobile').show();
            } else {
                    swal.fire(
                    'Your query was successful!',
                    'The answer will come to you by email soon!',
                    'success'
                    )
                        consulta.push(conForm)
                        localStorage.setItem('consulta', JSON.stringify(consulta))
                        $("#formulario").trigger("reset")
                        
                    }
                }
        
        
            
    })
})
