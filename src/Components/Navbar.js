import React from 'react'
export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light " style={{background:"#d5d4d5",height:"80px"}}>
            <div class="container w-50 d-flex justify-content-center" >
                <div class="" id="navbarNav">
                    <ul class="navbar-nav" >
                        <li class="nav-item pt-2 pb-2">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item pt-2 pb-2">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item pt-2 pb-2">
                            <a class="nav-link" href="#">Stock</a>
                        </li>
                        <li class="nav-item pt-2 pb-2">
                            <a class="nav-link" href="#">Statistics</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
