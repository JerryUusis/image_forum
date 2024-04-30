import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< Root/>}>
            <Route path="/" index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
