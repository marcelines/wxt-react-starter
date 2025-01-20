import reactLogo from "@/assets/react.svg";
import wxtLogo from "/wxt.svg";
import { sendMessage } from "webext-bridge/popup";

import "./App.css";

function App() {
  const handleLogoClick = async (url: string) => {
    console.log("Sending message to background script...");
    const response = await sendMessage(
      "ACTION",
      {
        data: url,
      },
      "background"
    );

    console.log("Received response:", response);
  };

  return (
    <>
      <div>
        <a href="https://wxt.dev" target="_blank">
          <img src={wxtLogo} className="logo" alt="WXT logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WXT + React</h1>
      <div className="card">
        <button onClick={() => handleLogoClick("https://wxt.dev")}>
          Click me to send a message to the background script
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the WXT and React logos to learn more
      </p>
    </>
  );
}

export default App;
