import React from "react";
import "./style.css";
import toy from "./toy.json"

function Header(propts) {
    return (
        <div className="jumbotron jumbotron-fluid bg">
            <div className="container">
                {/* <p class="lead">Click on an image to earn points, but don't click on any more than once!</p> */}
                <img className="logo" alt={toy.name} src={toy.image} />

                <br />
                <div className="card">
                    <div className="card-body">
                        <h5 className="text card-title">Instructions:</h5>
                        <h6 className="text card-subtitle mb-2 text-muted">Click on the character images to start playing. Try to get as many in a row without hitting the same toy twice!</h6>
                        <br />
                        <h5 className="text card-title">Score</h5>
                        <p className="text card-text">Current Score: {propts.score} | High Score: {propts.totalscore}</p>

                    </div>
                </div>

            </div>
        </div>


    )

}

export default Header;