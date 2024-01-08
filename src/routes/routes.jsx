import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { CV } from "../pages/CV";
import { Contact } from "../pages/Contact";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cv" element={<CV />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default routes;
