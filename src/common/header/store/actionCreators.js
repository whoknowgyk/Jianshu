import { actionTypes } from './index';
import axios from 'axios';
import { fromJS } from "immutable";

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    // 求总共有多少页
    // 总数据量处以每页10个数据再取整
    totalPage: Math.ceil(data.length/10),
});

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR,
});

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER,
});

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE,
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page,
});

// 原本返回的都是对象，但是用了redux-thunk之后，返回的就可以是函数了
export const getList = () => {
    return (dispatch) => {
        // 如果成功就执行then 如果失败执行catch里的方法
        axios.get('/api/headerList.json').then((res) => {
            // 获取数据之后，要对store中的数据进行修改
            // 需要发送action给reducer
            const data = res.data;
            const action = changeList(data.data);
            dispatch(action);
        }).catch(() => {
            console.log('error');
        });
    }
};