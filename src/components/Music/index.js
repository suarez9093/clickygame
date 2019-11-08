import React, { Fragment } from "react";
import Theme from "./audio/themeSong.mp3";
import "./style.css"

function Music() {
    return (
        <Fragment>
            <audio className="player" controls autoPlay id="song">
                <source src={Theme} type="audio/mpeg" />
            </audio>
        </Fragment>
    )
};

export default Music;