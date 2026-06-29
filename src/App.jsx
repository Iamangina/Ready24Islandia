import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Layout from "./Layout";
import Trips from "./components/Trips";
import TripDetails from "./components/trips/TripDetails";
import About from "./components/About";
import Training from"./components/Training";
import Soon from "./components/Soon"


function App() {
  return (
  
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/wyjazdy" element={<Trips />} />
            <Route path="wyjazdy/:id" element={<TripDetails />} />
          <Route path="/omnie" element={<About />} />
          <Route path="/szkolenia" element={<Training />} />
          <Route path="/wkrotce" element={<Soon />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;