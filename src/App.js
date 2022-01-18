import {Route} from "react-router-dom";
import axios from "axios";

//hoc
import Defaulthoc from "./hoc/Default.hoc";
import Moviehoc from "./hoc/Movie.hoc";
//components
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;
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
