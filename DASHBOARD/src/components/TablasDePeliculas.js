import React, { Component } from 'react'

import Pelis from './Movie'

class Movies extends Component {

	constructor() {
		super()
		this.state = {
			moviesList: []
		}
	}

	componentDidMount() {
		fetch('/api/movies')

			.then(respuesta => {
				return respuesta.json()
			})

			.then(Pelis => {
				this.setState({ moviesList: Pelis.data })
			})

			.catch(error => console.log(error))
	}

	render() {

		return (
			<React.Fragment>
				<h1 className="h3 mb-2 text-gray-800">Todas Las Peliculas En La Base De Datos</h1>
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</tfoot>
								<tbody>
									{this.state.moviesList.map((movie, index) => {
										return <Pelis {...movie} key={index} />
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</React.Fragment>
		)

	}

}

export default Movies