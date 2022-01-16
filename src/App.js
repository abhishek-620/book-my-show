import {Route,Routes} from "react-router-dom";

//hoc
import Defaulthoc from "./hoc/Default.hoc";
//components
import Temp from "./components/temp";
  function App() {
    return (
      <>
      <Routes>
      <Defaulthoc path="/" exact element={<Temp/>}/>
      </Routes>
      </>

  );
}

export default App;
