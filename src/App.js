import React, {Component, Fragment} from 'react';
import { GlobalStyle } from './style';
import Header from './common/header/index';
import { IconFontGlobalStyle } from './statics/icon-font/iconfont';
import store from './store/index';
import { Provider } from 'react-redux';

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle/>
                <IconFontGlobalStyle/>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </Fragment>
        );
    }
}

export default App;
