import { Provider } from 'react-redux';
import logo from '../assets/images/logo.svg';
import Routers from '../config';
import store from '../config/Redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routers/>
    </Provider>
  );
}

export default App;
