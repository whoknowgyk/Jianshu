import { actionTypes } from './index';
import { fromJS } from "immutable";

// immutable不可被改变 可以利用此特性来建立state
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    trending_search_list: [],
    page: 0,
    totalPage: 1,
});

export default ( state=defaultState , action )=>{
    // 不能对原state进行修改
    if (action.type === actionTypes.SEARCH_FOCUS) {
        // immutable对象不能修改，set()方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused',true);
    }
    if (action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused',false);
    }
    if (action.type === actionTypes.MOUSE_ENTER) {
        return state.set('mouseIn',true);
    }
    if (action.type === actionTypes.MOUSE_LEAVE) {
        return state.set('mouseIn',false);
    }
    if (action.type === actionTypes.CHANGE_PAGE) {
        return state.set('page',action.page);
    }
    if (action.type === actionTypes.CHANGE_LIST) {
        // immutable对象中，数组也是immutable类型
        // 因此直接用state.set('trending_search_list',action.data)会导致trending_search_list的类型从
        // immutable对象变成普通对象，类型发生了变化
        // 解决办法是在actionCreators中把原数据也变成immutable对象
        // return state.set('trending_search_list',action.data).set('totalPage',action.totalPage);
        return state.merge({
            trending_search_list: action.data,
            totalPage: action.totalPage,
        });
    }
    return state;
}