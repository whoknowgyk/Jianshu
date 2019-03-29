// 实现异步加载需求
// 异步加载指的是：
// 在原本情况下，每次访问页面，无论是详情页还是登录页都会在一个js文件里完成加载
// 所以，要实现点击哪个页面，就加载哪个页面的js文件，提高效率

import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    // import指的是异步加载
    loader: () => import('./'),
    loading(){
        return <div>正在加载</div>
    },
});

export default class App extends React.Component {
    render() {
        return <LoadableComponent/>;
    }
}