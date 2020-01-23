import React from "react";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav class="header navbar navbar-dark bg-dark">
          <div class="container">
            <div class="row m-auto">
              <i class="fa fa fa-clock-o fa-4x text-white" />
              <div class="h1 ml-3 my-auto text-light" href="/">
                Reloj
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div class="container">
            <div class="d-flex flex-row">
              <div class="col-md-4 mx-auto">
                <div class="panel">
                  <button type="button" class="btn btn-primary">
                    Ocultar fecha
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="d-flex flex-row">
              <div class="col-md-4 mx-auto">
                <div class="display">
                  <div class="display-time">16:34:42</div>
                  <div class="display-date">14 de enero del 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
