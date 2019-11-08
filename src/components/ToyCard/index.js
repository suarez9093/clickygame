import React from "react";
import "./style.css"

function ToyCard(propts) {
    return (
       
            <div>
                <img className="card-img-top" alt={propts.name} src={propts.image} onClick={() => propts.scoreIncrement(propts.id)}/>
                {/* <span onClick={() => props.randomizeToys(props.id)} className="remove">
        𝘅
      </span> */}
            </div>
    )
}

export default ToyCard;