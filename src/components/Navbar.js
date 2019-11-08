import React from "react";

function Navbar(propts) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                {/* <a className="navbar-brand" href="#">Clicky Game</a> */}
                <ul className="navbar-nav">
                    <li>Score: {propts.score} || Top Score: {propts.totalscore}</li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar;