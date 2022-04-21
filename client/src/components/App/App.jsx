import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from '../../redux/store'
import Topic from "../Topic/Topic";



function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Topic/>
        <Routes>
          {/* <Route path="/groups/:id" element={<Topic/>}></Route> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
