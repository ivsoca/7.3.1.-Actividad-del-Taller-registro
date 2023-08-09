

regBtn.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let regBtn = document.getElementById("regBtn");
    let terminos = document.getElementById("terminos");

    if(nombre == "" || apellido == "" || password1 == "" || password2 == "" ){
        showAlertError()
    } else if(password1.lenght < 6 || password2.length < 6){
        showAlertError()
    }else if(password1 !== password2 ){
        showAlertError()
    }else if(!terminos.checked){
        showAlertError()
    }else{
        showAlertSuccess();
    }
})





function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}


function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


   



