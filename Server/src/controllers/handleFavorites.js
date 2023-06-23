let myFavorites = []; //es importante que NO declares este arreglo como constante ya que lo modificaremos. Por eso declaramos con let

const postFav = (req, res) => {
    const character = req.body;

    myFavorites.push(character)//yo podria hacer myFavorites.push(req.body) pero no estoy siendo descriptiva, no estoy especificando que esta llegando por el body
    
    return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const {id} = req.params;
    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);
    
    return res.status(200).json(myFavorites);
}

module.exports={
    postFav,
    deleteFav,
}