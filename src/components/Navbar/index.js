import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
            <div className="row">
                <div className="col-md-4">
                    <h2><a href="." className="text-white" id="app-name"> Friends Clicky Game </a> </h2>
                </div>
                <div className="col-md-4">
                <h2 className="text-white">Click an image to start the game! </h2>
                </div>
                <div className="col-md-4">
                <h2 className="text-white">Scores: </h2>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
