import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from '../../redux/store'
import Topic from "../Topic/Topic";
import Question from "../Question/Question";



function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          Hello World
          <Topic/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
