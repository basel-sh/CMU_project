import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import MainDash from "./main";
import StarSystemRendering from "./SolarSystem";
import Storytelling from "./Components/Storytelling";
import PlanetGame from "./Components/PlanetGame"; // اللعبة

export default function App() {
  // بيانات مبدئية للعبة (يمكن استبدالها بالـ backend لاحقًا)
  const gamePlanets = [
    { name: "Kepler-22b", habitable: true, radius: "2.4 Earth radii", distance: "600 ly" },
    { name: "Proxima Centauri b", habitable: true, radius: "1.3 Earth radii", distance: "4.2 ly" },
    { name: "TRAPPIST-1d", habitable: false, radius: "0.77 Earth radii", distance: "40 ly" },
    { name: "Kepler-442b", habitable: true, radius: "1.34 Earth radii", distance: "1200 ly" }
  ];

  return (
    <div className="mainappdiv">
      <Routes>
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<MainDash />} />
          <Route path="StarSystemRendering" element={<StarSystemRendering />} />
        </Route>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Storytelling */}
        <Route path="/storytelling" element={<Storytelling />} />

        {/* Planet Game */}
        <Route path="/game" element={<PlanetGame planets={gamePlanets} />} />
      </Routes>

      {/* Footer ثابت لكل الصفحات */}
      <Footer />
    </div>
  );
}

