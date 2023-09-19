import { ChangeEvent, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const App = () => {
  const urlList = [
    "https://raw.githubusercontent.com/fa0311/twitter-openapi/main/dist/docs/openapi-3.0.yaml",
    "https://raw.githubusercontent.com/fa0311/twitter-openapi/main/dist/compatible/openapi-3.0.yaml",
    "https://raw.githubusercontent.com/fa0311/twitter-openapi/dev/dist/docs/openapi-3.0.yaml",
    "https://raw.githubusercontent.com/fa0311/twitter-openapi/dev/dist/compatible/openapi-3.0.yaml",
  ];
  const [urlIndex, setUrlIndex] = useState(0);

  return (
    <>
      <div className="swagger-ui">
        <span className="servers-title">URL</span>
        <div className="servers">
          <label htmlFor="servers">
            <select
              id="servers"
              onChange={({ target }) => setUrlIndex(Number(target.value))}
            >
              {urlList.map((url, index) => (
                <option key={url} value={index}>
                  {url}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <SwaggerUI key={urlIndex} url={urlList[urlIndex]} />
    </>
  );
};

export default App;
