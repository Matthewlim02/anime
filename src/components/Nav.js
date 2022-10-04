import React from "react";
import { Link } from 'react-router-dom';

function NavHeader() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-dark" id="mainNav">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">LOGO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navUL">
                    <Link to="/">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" id="navButtons">Home</a>
                        </li>
                    </Link>
                    <Link to="randomanime">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" id="navButtons">Anime</a>
                        </li>
                    </Link>
                    
                    <li class="nav-item">
                    <a class="nav-link" href="#">About Me</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search anime" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                </div>
                </div>
            </nav>
        </div>
    );
}

export default NavHeader;