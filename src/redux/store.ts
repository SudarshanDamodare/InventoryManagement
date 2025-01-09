import { createStore } from 'redux';
import rootReducer from './reducer';

export type StoreType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;