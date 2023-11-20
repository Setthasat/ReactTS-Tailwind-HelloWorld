import { Routes, Route } from "react-router-dom";
import Welcome from "./page/Welcome";
import HelloWorld from "./page/Helloworld";

const App : React.FC = () => {

  return (
    <div>
      <Routes>
        <Route index element={<HelloWorld />} />
      </Routes>
    </div>
  );
}

export default App;
