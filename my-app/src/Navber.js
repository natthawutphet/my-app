import React from 'react'

function Navber() {
  return (
    <> 
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="index.html"><img src="assets/img/logo.png" class="logo" width="60" alt="img logo adsmanager"></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#about">ความรู้ดี และเครืองมือฟรี</a></li>
                        <li class="nav-item"><a class="nav-link" href="#projects">รับทำโฆษณาออนไลน์</a></li>
                        <li class="nav-item"><a class="nav-link" href="#signup">ความรู้ดี และเครืองมือฟรี</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
  );
}

export default Navber
