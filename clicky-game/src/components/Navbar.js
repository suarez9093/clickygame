import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Clicky Game</a>
                <ul className="navbar-nav">
                    <li>Click Image to begin game!</li>
                    <li>Score: 0 || Top Score: 0</li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar;