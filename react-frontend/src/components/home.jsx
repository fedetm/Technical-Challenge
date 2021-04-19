import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./home.css";

class Home extends Component {
  state = {
    user: "",
    order: "",
    product: "",
  };

  userChangeHandler = (event) => {
    this.setState({ user: event.target.value });
  };

  orderChangeHandler = (event) => {
    this.setState({ order: event.target.value });
  };

  productChangeHandler = (event) => {
    this.setState({ product: event.target.value });
  };

  handleOrder = (event) => {
    console.log("Preparando la orden!");
    event.preventDefault();
    const data = this.state;
    fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  /* getUrl = (event) => {
    event.preventDefault();
    // Simple GET request using fetch
    fetch('http://127.0.0.1:5000/users/federico')
    .then(response => response.json());
  }; */

  render() {
    return (
      <div>
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <header className="Home-header">
          <link rel="stylesheet" href="./home.css" />
          <title>Home Page</title>
          <h1>Bienvenido a nuestra tienda</h1>
        </header>
        <body>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <form class="form" onSubmit={this.handleOrder}>
                  <label for="usuario">Usuario</label>
                  <form action="/" method="POST">
                    <input
                      type="text"
                      onChange={this.userChangeHandler}
                      name="content"
                      id="usuario"
                    />
                  </form>

                  <label for="orden">Orden</label>
                  <form action="/" method="POST">
                    <input
                      type="text"
                      onChange={this.orderChangeHandler}
                      name="content"
                      id="orden"
                    />
                  </form>

                  <label for="producto">Producto</label>
                  <form action="/" method="POST">
                    <input
                      type="text"
                      onChange={this.productChangeHandler}
                      name="content"
                      id="producto"
                    />
                  </form>
                  <button variant="primary">Comprar</button>
                </form>
              </Route>
            </Switch>
          </BrowserRouter>
        </body>
      </div>
    );
  }
}

export default Home;
