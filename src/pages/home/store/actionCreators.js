// import { fromJS } from "immutable";
import { actionTypes } from './index';

export const getWriterList = () => ({
    type: actionTypes.GET_WRITER_LIST,
});

// 这里记得要传参数
export const changeWriterList = (page) => ({
    type: actionTypes.CHANGE_WRITER_LIST,
    page,
});

export const toggleTopShow = (flag) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    flag,
});