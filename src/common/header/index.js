import React , { Component }from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
} from './style';


class Header extends Component{

    // 展示热门搜索框
    getListArea() {

        // 把数组转化成普通的js数组
        const newList = this.props.trending_search_list.toJS();
        const pageList = [];

        if (newList.length) {
            for (let i = this.props.page * 10; i < (this.props.page + 1) * 10; i++) {
                pageList.push(
                    // 要注意key值
                    // 当刚进入页面时，header就会被渲染，这是page是1，trending_search_list是空数组
                    // 这时候执行，newList[i]就是undefined
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                );
            }
        }
        
        if ( this.props.focused || this.props.mouseIn ){
            return (
                <SearchInfo
                    onMouseEnter={this.props.handleMouseEnter}
                    onMouseLeave={this.props.handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        {/*原来写法：this.props.handleChangePage*/}
                        {/*如果想传参的话，可以这么写*/}
                        <SearchInfoSwitch onClick={() => this.props.handleChangePage(this.props.page,this.props.totalPage,this.spinIcon)}>
                            {/*ref可以获取到真实的DOM节点*/}
                            <span ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        }
        else {
            return null;
        }
    }

    render() {
        return(
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {/*注意这里的顺序，登录在前，Aa在后，因为靠右浮动，所以实际效果出来是Aa在前，登录在后*/}
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        {/*注意，这里是classNames而不是className*/}
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused?'focused':''}
                                onFocus={()=>this.props.handleInputFocus(this.props.trending_search_list)}
                                onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <span className={this.props.focused?'focused iconfont zoom':'iconfont zoom'}>
                        &#xe64d;
                    </span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'>
                        <span className="iconfont">&#xe69b;</span>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

// 映射关系
const mapStateToProps = (state) => {
    // 将store里的数据映射到props里
    return {
        // redux拆分之后，要在state和focused中加一层header
        // focused:state.header.focused,
        // 改为immutable对象之后，就不能用原来的方法获得属性了
        focused: state.get('header').get('focused'),
        trending_search_list: state.get('header').get('trending_search_list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn'),
    }
};

// 更改关系
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(trending_search_list){
            // 搜索框变长
            const action = actionCreators.searchFocus();
            dispatch(action);
            // 点击搜索框之后，获取Ajax数据
            // 使用redux-thunk，把获取数据的过程放到action中进行处理
            if (trending_search_list.size===0){
                const action_getList=actionCreators.getList();
                dispatch(action_getList);
            }
        },
        handleInputBlur(){
            const action = actionCreators.searchBlur();
            dispatch(action);
        },
        handleMouseEnter(){
            const action = actionCreators.mouseEnter();
            dispatch(action);
        },
        handleMouseLeave(){
            const action = actionCreators.mouseLeave();
            dispatch(action);
        },
        handleChangePage(page,totalPage,spinIcon){
            if (page<totalPage-1){
                page=page+1;
            }
            else {
                page=0;
            }
            const action = actionCreators.changePage(page);
            dispatch(action);

            let originAngle=spinIcon.style.transform.replace(/[^0-9]/ig,'');
            if (originAngle){
                originAngle=parseInt(originAngle,10);
            } else {
                originAngle=0;
            }
            spinIcon.style.transform='rotate('+(originAngle+360)+'deg)';
        },
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Header);