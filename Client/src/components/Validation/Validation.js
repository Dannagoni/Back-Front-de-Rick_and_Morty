
const validation= (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'el email ingresado no es valido';
    }
    if(!userData.email) {
        errors.email = 'debe ingresar un email';
    }
    if(userData.email.lenght > 35){
        errors.email = 'el email no puede superar los 35 caracteres'
    }
    if(!/.*\d+/.test(userData.password)){
        errors.password = 'la contraseña tiene que tener al menos un número'
    }
    if(userData.password.lenght < 6 || userData.password.lenght > 10 ){
        errors.password = 'la contraseña tiene que tener entre 6 y 10 caracteres.'
    }
    return errors;
}
export default validation;
//userData se puede llamar como quiero pero es mas organizado decirlo asi, q el estado se llama userData