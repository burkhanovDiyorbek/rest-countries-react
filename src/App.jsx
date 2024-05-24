import { Route, Routes, useNavigate } from "react-router-dom";
import { Country } from "./pages/Country/Country";
import { Layout } from "./Layout";
import { Home } from "./pages/Home/Home";
import { Error } from "./pages/Error/Error";
import "./App.css";
import { Sorted } from "./pages/Home/components/Sorted/Sorted";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("sorted/all");
  }, []);

  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sorted/:region" element={<Sorted />} />
        <Route path="country/:country" element={<Country />} />
      </Route>
      <Route path="*/*" element={<Error />} />
    </Routes>
  );
}

export default App;
