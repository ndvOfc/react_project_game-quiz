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
import TopicList from "../TopicList/TopicList";




function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <TopicList />
        
        <Routes>
          {/* <Route path="/groups/:id" element={<Topic/>}></Route> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
