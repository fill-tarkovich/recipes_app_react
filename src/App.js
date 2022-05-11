import "./App.css";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/app.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
