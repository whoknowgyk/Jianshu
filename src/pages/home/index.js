import React , { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight} from './style';
import bannerImg from '../../statics/banner_img.png';
import ArticleList from './components/ArticleList';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import { connect } from 'react-redux';
import { BackTop } from './style';
import { actionCreators } from './store/index';

// 因为如果store发生变化，所有页面的render()都会重新渲染
// 因此需要实现一个shouldComponentUpdate，如果不是本页面的数据发生变化，就不需要重载本页面的render()
// PureComponent底层实现了一个shouldComponentUpdate
// 如果没有使用immutable.js管理数据，最好不要使用PureComponent
class Home extends PureComponent {
    
    static handleScrollTop(){
        window.scrollTo(0,0);
    }

    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner_img' src={bannerImg} alt='banner_img'/>
                    <div className='split-line'></div>
                    <ArticleList />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll? <BackTop onClick={Home.handleScrollTop}>回到顶部</BackTop>:null}
            </HomeWrapper>
        )
    }

    // 利用axios实现异步数据获取
    componentDidMount() {
        axios.get('./api/home.json').then((res)=>{
            const result=res.data.data;
            const action = {
                type: "change_home_data",
                articleList: result.articleList,
                recommendPicList: result.recommendPicList,
                writerList: result.writerList
            };
            this.props.changeHomeData(action);
        });
        this.bindEvents();
    }

    // 记得移除事件
    // 网页从页面上移除的时候，事件也随之移除，这样就不会对其他页面的事件造成影响了
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state) => ({
   showScroll: state.get("home").get("showScroll"),
});

const mapDispatchToProps = (dispatch) => ({
    changeHomeData(action){
        dispatch(action);
    },
    changeScrollTopShow(){
        if (document.documentElement.scrollTop>200){
            dispatch(actionCreators.toggleTopShow(true));
        }
        else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(Home);