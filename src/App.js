import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: [
        new Date().getDate(),
        "/",
        new Date().getMonth() + 1,
        "/",
        new Date().getFullYear()
      ],
      tiempo: [
        new Date().getHours(),
        ":",
        new Date().getMinutes(),
        ":",
        new Date().getSeconds()
      ],
      reloj: setInterval(() => {
        this.setState({
          tiempo: [
            new Date().getHours(),
            ":",
            new Date().getMinutes(),
            ":",
            new Date().getSeconds()
          ]
        });
      }, 1000),
      show: false,
      btnTxtOff: "Mostrar fecha",
      btnTxtOn: "Ocultar fecha"
    };
  }

  mostrar() {
    this.setState({
      show: !this.state.show
    });
  }

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
                  <button
                    onClick={() => this.mostrar()}
                    type="button"
                    class="btn btn-primary"
                  >
                    {this.state.show
                      ? this.state.btnTxtOn
                      : this.state.btnTxtOff}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="d-flex flex-row">
              <div class="col-md-4 mx-auto">
                <div class="display">
                  <div class="display-time">{this.state.tiempo}</div>
                  <div class="display-date">
                    {this.state.show ? this.state.fecha : ""}
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

export default App;
