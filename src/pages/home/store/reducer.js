import { fromJS } from "immutable";
import { actionTypes } from "./index";

const defaultState = fromJS({
    articleList: [],
    recommendPicList: [],
    writerList: [],
    page: 0,
    totalPage: 2,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        articleList: fromJS(action.articleList),
        recommendPicList: fromJS(action.recommendPicList),
        writerList: fromJS(action.writerList)
    });
};

const getWriterList = (state, action) => {
  return state.merge({
      writerList: action.writerList,
      totalPage: action.totalPage,
  });
};

export default (state = defaultState, action) => {
    if (action.type === "change_home_data") {
        return changeHomeData(state, action);
    }
    if (action.type === actionTypes.GET_WRITER_LIST) {
        // return state.set('trending_search_list',action.data).set('totalPage',action.totalPage);
        return getWriterList(state, action);
    }
    if (action.type === actionTypes.CHANGE_WRITER_LIST) {
        return state.set('page',action.page);
    }
    if (action.type === actionTypes.TOGGLE_SCROLL_SHOW) {
        return state.set('showScroll',action.flag)
    }
    return state;
}