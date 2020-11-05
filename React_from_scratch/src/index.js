import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AppContainer } from "react-hot-loader";

// eslint-disable-next-line no-undef
require("react-hot-loader/patch");

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root")
);

// eslint-disable-next-line no-undef
if (module.hot) {
  // eslint-disable-next-line no-undef
  module.hot.accept("./App", () => {
    // eslint-disable-next-line no-undef
    const NextApp = require("./App").default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
