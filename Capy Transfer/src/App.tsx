import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";

import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
