import React, {PureComponent, Fragment} from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import Header from './common/header/index';
import { IconFontGlobalStyle } from './statics/icon-font/iconfont';
import store from './store/index';
import { Provider } from 'react-redux';
import Home from './pages/home';
// 这样写Detail就变成了一个异步组件
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends PureComponent {
    render() {
        return (
            <Fragment>
                <GlobalStyle/>
                <IconFontGlobalStyle/>
                <Provider store={store}>
                    {/*路由*/}
                    {/*BrowserRouter代表路由，Route代表一个一个的路由规则*/}
                    <BrowserRouter>
                        <div>
                            <Header/>
                            {/*<Route path={'/'} exact render={()=><div>home</div>}></Route>*/}
                            <Route path={'/'} exact component={Home}></Route>
                            {/*<Route path={'/detail'} exact render={()=><div>detail</div>}></Route>*/}
                            <Route path={'/detail'} exact component={Detail}></Route>
                            <Route path={'/write'} exact component={Write}></Route>
                            <Route path={'/login'} exact component={Login}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>
            </Fragment>
        );
    }
}

export default App;
