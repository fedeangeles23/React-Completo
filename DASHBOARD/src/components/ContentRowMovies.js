import React from 'react';

import SmallCard from './Cards';

let moviesDb = {
    color:   "primary",
    titulo: "Peliculas en Base De Datos",
    valor: 21,
    icono: "fas fa-film",
}

let awards ={
    color:   "success",
    titulo: "Premios Totales",
    valor: 79,
    icono: "fas fa-award",
}

let actors = {
    color:   "warning",
    titulo: "Totalidad de Actores",
    valor: 49,
    icono: "fas fa-user",
}

let props = [moviesDb,awards,actors];


function ContentRowTop(){
    return (
        <React.Fragment>
        <div className="row">
            {
                props.map((descripcion, index)=>{
                    return <SmallCard  {...descripcion}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;