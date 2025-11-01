import React from 'react'

const MovieCard = ({ title, rating, poster }) => {
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={poster} className="card-img-top" alt={poster} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Rating: {rating}</p>
                    {rating >= 8 && <span className="badge">Recommended</span>}
                </div>
            </div>
        </>
    )
}

export default MovieCard