import React, { Component } from 'react'
import Genre from './Genre';

class GenresInDb extends Component {
    
    constructor() {
        super()
        this.state = {
            genresList: []
        }
    }

    componentDidMount() {
        fetch('/api/genres')

            .then(respuesta => {
                return respuesta.json()
            })

            .then(genres => {
                this.setState({ genresList: genres.data })
            })

            .catch(error => console.log(error))
    }


    cambiarFondo () {
        document.querySelector(".card-body").classList.toggle = 'bg-secondary'
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver = {this.cambiarFondo}>Todos Los Géneros</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">

                                {this.state.genresList.map((genre, index) => {
                                    return <Genre {...genre} key={index} />
                                })}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default GenresInDb