import {createStore, applyMiddleware, compose} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import rootReducer from '../Reducer/rootReducer'
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
    key: 'root',
    whitelist: ['authData'],
  };

  const middlewares = [thunkMiddleware];
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export default () => {
    let store = createStore(
        persistedReducer,
        compose(applyMiddleware(...middlewares)),
      );

  let persistor = persistStore(store, [{manualPersist: true}]);
  return {store, persistor};
}