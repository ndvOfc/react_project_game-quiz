import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from '../../redux/store'
import Topic from "../Topic/Topic";

import Cabinet from "../Cabinet/Cabinet";

import Question from "../Question/Question";
import Prifole from "../Profile/Profile";
import Profile from "../Profile/Profile";




function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Profile/>
          <Cabinet/>
          {/*<Topic/>*/}
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
