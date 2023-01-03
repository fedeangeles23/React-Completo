import React from 'react';
import meme1 from '../assets/images/memeProgramacion.webp'
import meme2 from '../assets/images/taPotenteAnonimus.jpg'

function NotFound(){
    return(
        <div className="text-center">
            <img src={meme1} alt="Digital House"/>
            <h1 >Error 404 - Página no encontrada</h1>
            <img className="w-50" src={meme2} alt="Digital House"/>
        </div>
    )
}


export default NotFound;