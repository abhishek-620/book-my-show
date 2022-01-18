import {Route} from "react-router-dom";

//hoc
import Defaulthoc from "./hoc/Default.hoc";
import Moviehoc from "./hoc/Movie.hoc";
//components
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
  function App() {
    return (
      <>
      <Route>

      <Defaulthoc path="/" exact component={HomePage}/>
      <Moviehoc path="/movie/:id" exact component={Movie}/>
      </Route>
      </>

  );
}

export default App;
