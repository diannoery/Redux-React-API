import React, { Component } from "react";
//import Image from "../../image.jpg";
class Home extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        >
          <div className="container-fluid">
            <div className="row mt-4">
              <div className="col">
                <div class="jumbotron jumbotron-fluid">
                  <div class="container">
                    <h1 class="display-4">Welcome To Home</h1>
                    <p class="lead"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
