import {Route} from "react-router-dom";

//hoc
import Defaulthoc from "./hoc/Default.hoc";
//components
import HomePage from "./pages/Home.page";
  function App() {
    return (
      <>
      <Route>

      <Defaulthoc path="/" exact component={HomePage}/>
      </Route>
      </>

  );
}

export default App;
