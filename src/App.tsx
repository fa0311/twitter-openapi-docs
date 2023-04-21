import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const App = () => {
  const HideResolverErrorsPlugin = () => {
    return {
      statePlugins: {
        err: {
          wrapSelectors: {
            allErrors: (ori: () => any[]) => () => {
              return ori().filter((err) => err.get("source") !== "resolver");
            },
          },
        },
      },
    };
  };

  return (
    <SwaggerUI
      url="assets/openapi/openapi-3.0.yaml"
      // url="https://raw.githubusercontent.com/fa0311/twitter-openapi/main/dist/openapi-3.0.yaml"
      plugins={[HideResolverErrorsPlugin]}
    />
  );
};

export default App;
