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
import TopicList from "../TopicList/TopicList";




function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
<<<<<<< HEAD
          <TopicList />
        
        <Routes>
          {/* <Route path="/groups/:id" element={<Topic/>}></Route> */}
        </Routes>
=======
        <div className="App">
          {/*<Login/>*/}
          {/*<Registration/>*/}
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/registration" element={<Registration/>}></Route>
            {/*<GroupList/>*/}
            {/*<Registration/>*/}
            {/*<Profile/>*/}
            {/*<Cabinet/>*/}
            {/*<Topic/>*/}
          </Routes>
        </div>
>>>>>>> 9736f2deb1b1c41d84c60889263992770b7dd93e
      </Provider>
    </BrowserRouter>
  );
}

export default App;
