

function card({cityImages}) {
    return (
        cityImages.map((element) =>
            <div key={element.id} className="card">
                <img className="card-title" src={element.img} alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    <a href="#" className="btn btn-primary m-2">Prenota ora</a>
                    <a href="#" className="btn btn-primary">Vedi offerte per te</a>
                </div>
            </div>
        )
    )
}

export default card;