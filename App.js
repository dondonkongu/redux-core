
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import Counter from './src/Counter';
import ToDo from './src/screen/ToDo';

const App = () => {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}


export default App;
