import React from "react";

function PizzaTypes({ title }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="text-center header">
            {" "}
            TYPES OF <span className="span2"> {title}</span>
          </h3>
          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img src="Aussie-Pizza-768x414.jpg" alt="..." />
              <div className="caption">
                <h3>Margherita Pizza</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Vitae quis quasi, doloribus tenetur impedit nulla.Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
                <p>
                  <a href="#" className="btn btn-danger button" role="button">
                    <span
                      className="glyphicon glyphicon-shopping-cart"
                      aria-hidden="true"
                    ></span>{" "}
                    Add to cart
                  </a>{" "}
                  <a href="#" className="btn btn-warning butt" role="button">
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>
                    Wishlist
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img src="Aussie-Pizza-768x414.jpg" alt="..." />
              <div className="caption">
                <h3> Cheese N Corn Pizza</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Vitae quis quasi, doloribus tenetur impedit nulla.Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
                <p>
                  <a href="#" className="btn btn-danger button" role="button">
                    <span
                      className="glyphicon glyphicon-shopping-cart"
                      aria-hidden="true"
                    ></span>
                    Add to cart
                  </a>{" "}
                  <a href="#" className="btn btn-warning butt" role="button">
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>{" "}
                    Wishlist
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img src="Aussie-Pizza-768x414.jpg" alt="..." />
              <div className="caption">
                <h3>Aussie Pizza </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Vitae quis quasi, doloribus tenetur impedit Lorem, ipsum.
                  Lorem ipsum dolor sit amet.
                </p>
                <p>
                  <a href="#" className="btn btn-danger button" role="button">
                    <span
                      className="glyphicon glyphicon-shopping-cart"
                      aria-hidden="true"
                    ></span>{" "}
                    Add to cart
                  </a>{" "}
                  <a href="#" className="btn btn-warning butt" role="button">
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>{" "}
                    Wishlist
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img src="Aussie-Pizza-768x414.jpg" />
              <div className="caption">
                <h3>BBQ Chicken</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Vitae quis quasi, doloribus tenetur impedit nulla.Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
                <p>
                  <a href="#" className="btn btn-danger button" role="button">
                    <span
                      className="glyphicon glyphicon-shopping-cart"
                      aria-hidden="true"
                    ></span>{" "}
                    Add to cart
                  </a>{" "}
                  <a href="#" className="btn btn-warning  butt" role="button">
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>{" "}
                    Wishlist
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PizzaTypes;
