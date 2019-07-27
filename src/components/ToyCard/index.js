import React from "react";
import "./style.css"
function ToyCard(props) {
    return (
       
            <div>
                <img className="card-img-top" alt={props.name} src={props.image} />
                {/* <span onClick={() => props.randomizeToys(props.id)} className="remove">
        𝘅
      </span> */}
            </div>
    )
}

export default ToyCard;