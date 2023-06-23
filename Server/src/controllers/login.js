const users = require('../utils/users');

const login = (req, res) =>{
    const { email, password } = req.query; //obtener los datos email y password que recibo mediante query, hago un destructuring de query.
    
    const userFound = users.find((user) => user.email === email && user.password === password)//el metodo find busca por todo el array y el primer objeto que encuentra coincidencia nos lo da y se corta, no itera todo, al primero que encuentra coincidencia lo retorna.

    // return userFound
    // ? res.status(200).json({ access: true })
    // : res.status(404).json({ access: false })//en las consignas dice 200 pero queda mejor 404, que es el error del usuario
    // OTRA FORMA
   
    if(userFound) return res.status(200).json({access: true})
        return res.status(404).json({access: false})
    // no es buena practica usar else
}

module.exports = {
    login
}