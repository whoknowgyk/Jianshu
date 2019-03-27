// reducer拆分
// redux-immutable同样提供了combineReducers，并且可以将原数据转为immutable对象
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../common/header/store';

export default combineReducers({
    header: headerReducer,
});