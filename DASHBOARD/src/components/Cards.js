import React from 'react';
import PropTypes from 'prop-types';

function cards(props){
    return(
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.titulo}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.valor}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${props.icono} fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

cards.defaultProps = {
    color: "No Title",
    titulo: "success",
    valor: "No cuatity",
    icono: "fa-clipboard-list",
}

cards.propTypes = {
    atritutes: PropTypes.shape({

        titulo: PropTypes.string.isRequired,

        color: PropTypes.string.isRequired,

        valor: PropTypes.oneOfType([

            PropTypes.string,
            PropTypes.number

        ]).isRequired,

        icono: PropTypes.string.isRequired
    })
}



export default cards;