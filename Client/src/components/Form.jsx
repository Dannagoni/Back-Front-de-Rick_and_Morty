import { useState } from "react";
import validation from "./Validation/Validation";
import styled from "./Form.module.css";

const Form = ({login}) => {
const [errors, setErrors] = useState ({});
const [userData, setUserData] = useState ({
    email:'',
    password:''
})


// esta funcion handleChange me permite ver los cambios en tiempo real
// esta modificando el estado ante cada cambio q hace el usuario
// (copia de todo lo q habia ...userData,)
const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })

// le voy a pasar un objeto y el objeto q le voy a pasar para validar va a ser el objeto en donde me estoy guardando toda la informacion q esta ingresando el usuario, por eso le paso toda una copia del estado y si hay algun cambio, le aviso q tiene q modificarse una de esas propiedades
//validation me esta retornando un objeto q si encuentra un error en la propiedad email o password, me va a retornar un error. Todo esto esta guardado en errors y me va a mostrar un mensaje de error
    setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value        
    }))
}

const handleOnSubmit = (event) => {
    event.preventDefault();
    login(userData);
}

    return (
        
        <div className={styled.formContainer}>
        <span className={styled.span}></span>
        <form onSubmit={handleOnSubmit} className={styled.form}>
            <div className={styled.email}>
            <label htmlFor="email" >🛸 Email:</label>
            <input type="email" name="email" placeholder="ingrese su email" value={userData.email} onChange={handleChange} className={styled.inputEmail} />
            {errors.email && <p className={styled.errorEmail}>{errors.email}</p>}
            </div>
            {/* <hr></hr> */}
            <div className={styled.password}>
            <label htmlFor="password" >🛸Password:</label>
            <input type="password" name="password" placeholder="ingrese su password" value={userData.password} onChange={handleChange} className={styled.inputPassword}/>
            {errors.password && <p className={styled.errorPassword}>{errors.password} </p>}
            </div>
            <button className={styled.boton}>Submit</button>
            
        </form>
        </div>
        
        
    )
}

export default Form;