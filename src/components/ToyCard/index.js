import React from "react";
import "./style.css"

function ToyCard(propts) {
    return (

        <div>
            <div>
                <img className="card-img-top" alt={propts.name} src={propts.image} onClick={() => propts.scoreIncrement(propts.id)} />
            </div>
        </div>
    )
}

export default ToyCard;