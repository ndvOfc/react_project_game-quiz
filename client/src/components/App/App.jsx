import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import Topic from "../Topic/Topic";
import Navbar from "../Navbar/Navbar";
import Cabinet from "../Cabinet/Cabinet";

import Question from "../Question/Question";
import Prifole from "../Profile/Profile";
import Profile from "../Profile/Profile";
import UserStat from "../UserStat/UserStat";




function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Navbar/>
          <UserStat/>
          <Routes>
            <Route path="/stats" element={<UserStat />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
          {/* <Profile /> */}
          {/*<Cabinet/>*/}
          {/*<Topic/>*/}

        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
