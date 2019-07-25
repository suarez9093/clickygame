import React from "react";

function ToyCard(props) {
    return (
        <div className="card">
            <img alt={props.name} src={props.image} />
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Role:</strong> {props.role}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ToyCard;