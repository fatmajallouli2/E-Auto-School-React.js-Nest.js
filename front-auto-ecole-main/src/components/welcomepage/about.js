import React from "react";
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* Colonne gauche : image */}
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/admin photo.jpg"
              className="img-responsive-2"
              alt=""
            />{" "}
          </div>

          {/* Colonne droite : texte et liste */}
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>

              {/* Sous-titre */}
              <h3>Why Choose Us?</h3>

              <div className="list-style">
                {/* Première liste */}
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <h6>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </h6>
                  </ul>
                </div>

                {/* Deuxième liste */}
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <h6>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </h6>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
