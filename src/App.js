import {Route} from "react-router-dom";

//hoc
import Defaulthoc from "./hoc/Default.hoc";
//components
import Temp from "./components/temp";
  function App() {
    return (
      <>
      <Route>

      <Defaulthoc path="/" exact component={Temp}/>
      </Route>
      </>

  );
}

export default App;
