import { applyMiddleware, createStore } from 'redux';
import { initialState } from './reducers/app';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

export interface ReduxState {
    app: typeof initialState;
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
export default store;
