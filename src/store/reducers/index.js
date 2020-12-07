import { combineReducers } from 'redux';
import user from './users_reducer';
//e.g. import favoritePet from './favoritePet_reducer';
const rootReducer = combineReducers({
    user
    //favoritePet
});

export default rootReducer;