import React, { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";
import "../../App.css";
import Pricing from "./Pricing.js";
import JsonData from "./data/data.json";
import "./welcome.css";

// Définition du composant fonctionnel Welcome
// Il reçoit "setPrice" en prop depuis App.js pour permettre de modifier le prix choisi
function Welcome({ setPrice }) {
  // État local pour stocker les données de la page (issues du JSON)
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    // Chargement des données depuis le fichier JSON et stockage dans l'état
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* barre de menu en haut de la page*/}
      <Navigation />
      
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />

      {/* section Pricing permet de choisir un prix et de mettre à jour la prop price*/}
      <Pricing setPrice={setPrice} />

      <Testimonials data={landingPageData.Testimonials} />
      
      <Contact data={landingPageData.Contact} />
    </div>
  );
}

export default Welcome;
