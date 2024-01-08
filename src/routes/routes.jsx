import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { CV } from "../pages/CV";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cv" element={<CV />} />
  </Routes>
);

export default routes;
