import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Layout from "./Layout";


function App() {
  return (
  
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;