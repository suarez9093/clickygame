import React from "react";
import "./style.css";
import toy from "./toy.json"

function Header() {
    return (
            <div className="jumbotron jumbotron-fluid bg">
                <div className="container">
                    {/* <p class="lead">Click on an image to earn points, but don't click on any more than once!</p> */}
                    <img className="logo" alt={toy.name} src={toy.image} />

                </div>
            </div>

       
    )

}

export default Header;