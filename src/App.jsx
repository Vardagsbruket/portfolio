import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes/routes";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="page-container"> {routes}</div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
