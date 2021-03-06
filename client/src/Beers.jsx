import React from 'react'


const Beers = (props) => {

    const deleteBeer = (id) => {
        fetch(`/beers/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => {props.getBeers()})
    }

    const updateBeer = (id) => {
        fetch(`/beers/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => {return res})
        .then(res => {props.getBeers()})
    }


    const beer = () => {
        return  props.beers.map(x => {
            return (
                <div key={x.id}>
                    <h1>{x.name}</h1>
                    <h4>brewery: {x.brewery}</h4>
                    <h4>{x.style}</h4>
                    <img src={x.image_url} alt={x.name}/>
                    <h4>ABV: {x.abv}%</h4>
                    <button onClick={() => deleteBeer(x.id)}> DELETE </button>
                    <hr/>
                </div>
            )
        })
    }

    return (
        <div className="App">
            {props.dataLoaded ? beer() : <p>data not loaded</p>}
        </div>
    );
}

export default Beers
