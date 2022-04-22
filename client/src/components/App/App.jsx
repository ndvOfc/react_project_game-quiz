import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from '../../redux/store'
import Topic from "../Topic/Topic";
import Cabinet from "../Cabinet/Cabinet";
import Registration from "../Registration/Registration"
import Login from "../Login/Login"
import GroupList from "../GroupList/GroupList"
import Question from "../Question/Question";
import Prifole from "../Profile/Profile";
import Profile from "../Profile/Profile";




function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/registration" element={<Registration/>}></Route>
            <Route path="/cabinet" element={<Cabinet/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            {/*<GroupList/>*/}
            {/*<Registration/>*/}
            {/*<Profile/>*/}
            {/*<Cabinet/>*/}
            {/*<Topic/>*/}
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
