import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Layout from "./Layout";
import Trips from "./components/Trips";


function App() {
  return (
  
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/wyjazdy" element={<Trips />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;