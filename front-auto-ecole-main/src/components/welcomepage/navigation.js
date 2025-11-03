import React from "react";
import { useHistory } from "react-router-dom";

export const Navigation = (props) => {
  let history = useHistory(); // Permet de naviguer vers d'autres pages sans recharger
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="row">
          {/* Logo à gauche */}
          <div className="col-xs-2 col-md-2 col-xl-2">
            <a href="#" className="page-scroll">
              <img id="logo-img" src="/img/Logo.png" alt=""></img>
            </a>
          </div>

          {/* Bouton menu responsive (pour petit écran) */}
          <div className="col-xs-10 col-md-10 col-xl-10">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
          </div>

          {/* Liens de navigation */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  OUR APPLICATION
                </a>
              </li>
              <li>
                <a href="#pricing" className="page-scroll">
                  PRICING
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li>
              
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
              <li>
                <a href="/SignUp" className="page-scroll">
                  <button
                    className="btn-custom-sc"
                    onClick={() => {
                      history.push("/SignUp");
                    }}
                  >
                    Sign Up
                  </button>
                </a>
              </li>
              <li>
                <a href="/SignIn" className="page-scroll">
                  <button
                    className="btn-custom-sc"
                    onClick={() => {
                      history.push("/SignIn");
                    }}
                  >
                    Sign In
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
