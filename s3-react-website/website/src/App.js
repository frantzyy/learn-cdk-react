import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>S3 React Website using CDK Patterns</p>
        <a
          className="App-link"
          href="https://github.com/cdk-patterns/serverless/blob/master/s3-react-website/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about the CDK pattern here
        </a>
      </header>
    </div>
  );
}

export default App;
