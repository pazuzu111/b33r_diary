import React from 'react'


const Beers = (props) => {

    // const deleteBeer = (id) => {
    //     fetch(`/beers/${id}`, {
    //         method: 'DELETE',
    //     })
    //     .then(res => res.json())
    //     .then(res => {props.getBeers()})
    // }

    return (
        <div className="App">
        {props.dataLoaded ?
            props.beers.map((x) => {
                return (
                    <div key={x.id}>
                        <h1>{x.name}</h1>
                        <h4>brewery: {x.brewery}</h4>
                        <h4>{x.style}</h4>
                        <img src={x.image_url} alt={x.name}/>
                        <h4>ABV: {x.abv}%</h4>
                        <hr/>
                    </div>
                )
            })
        :
        <p>data not loaded</p>
        }
        </div>
    );
}

export default Beers
