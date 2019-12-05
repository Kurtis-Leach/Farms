import ReduxThunk from 'redux-thunk'
import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './reducers/index'



export default () => {
    const rootReducer = combineReducers(reducers)

    const middleware = compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    const store = createStore(rootReducer, middleware)

    return store
}