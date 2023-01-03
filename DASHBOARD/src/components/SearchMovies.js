import React from 'react';

import { useState, useEffect, useRef } from 'react';

function SearchMovies(){
	const keyword = 'action';
	// Credenciales de API
	const apiKey = 'http://www.omdbapi.com/?i=action&apikey=e2fa6e61';
	
	const [movie, setMovie] = useState([])
	
	const [loading, setLoading] = useState(false)

 	const agregarPeli = (e) => {
		e.PreventDefault()
		let nuevaPeli = e.target.nuevaPeli.value
		setMovie ([
			...movie,
			nuevaPeli
		])
		e.target.nuevaPeli.value = ''
	} 

	useEffect(() => {
		setLoading (true)
		fetch(apiKey)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setMovie(data)
				setLoading(false)
			})
		.catch(error => console.error(error))
	}, [])

	useEffect(() => {
		console.log("Actualizado!!")
	}, [movie]) 

	if(loading){
		return (
			<div>
				<h1>Cargando...</h1>
			</div>
		)
	}
	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={agregarPeli}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Buscar</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2> Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							movie.length > 0 && movie.map((peli, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{peli.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={peli.Poster}
														alt={peli.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{peli.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movie.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Revisa la apiKey</div>
			}
		</div>
	)
}

export default SearchMovies;
