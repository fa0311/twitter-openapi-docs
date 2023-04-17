import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function App() {
  return (
    <SwaggerUI url="https://raw.githubusercontent.com/fa0311/twitter-openapi/main/openapi/openapi-3.0.yaml" />
  );
}

export default App;
