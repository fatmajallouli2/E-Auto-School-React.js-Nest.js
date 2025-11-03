import React from "react";
export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        {/* Titre et description de la section */}
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We offer you several services that facilitate the smooth running of
            work within your driving school :
          </p>
        </div>

        {/* Liste des services */}
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  {/* Icône du service */}
                  <i className={d.icon}></i>
                  {/* Description du service */}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
