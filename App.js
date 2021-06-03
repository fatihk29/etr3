import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import productsReducer from './src/store/reducers/product';
import MainNavigator from './src/navigation/StackNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

const App = props => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
