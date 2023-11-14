import { Routes, Route } from "react-router-dom";
import Welcome from "./page/Welcome";
import HelloWorld from "./components/HelloWorld/HelloWorld";

function App() {

  return (
    <div>
      <Routes>
        <Route index element={<HelloWorld />} />
      </Routes>
    </div>
  );
}

export default App;
