import React , { PureComponent } from 'react';
import { WriterWrapper, WriterInfoSwitch, WriterInfoList, WriterInfo } from '../style';
import { connect } from "react-redux";
import { actionCreators } from "../store";


class Writer extends PureComponent {
    render() {
        return(
            <WriterWrapper onLoad={this.props.writerAreaLoad(this.props.writerList)}>
                <div className='title'>
                    <span>推荐作者</span>
                    <WriterInfoSwitch onClick={() => this.props.handleChangeWriter(this.props.page,this.props.totalPage,this.spinIcon)}>
                        <span ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</span>
                        换一批
                    </WriterInfoSwitch>
                </div>
                    {this.getWriterListArea()}
            </WriterWrapper>
        )
    }

    getWriterListArea() {
        const newList = this.props.writerList.toJS();
        // console.log(this.props.page);
        const PageList = [];

        if (newList.length) {
            for (let i = this.props.page * 5; i < (this.props.page + 1) * 5; i++) {
                PageList.push(
                    // 要注意key值
                    // 当刚进入页面时，header就会被渲染，这是page是1，trending_search_list是空数组
                    // 这时候执行，newList[i]就是undefined
                    <WriterInfo key={newList[i].id}>
                        <img src={newList[i].imgURL} alt='' className='user_icon'/>
                        <a href='http://www.baidu.com' className='user_focused'>关注</a>
                        <a href='http://www.baidu.com' className='user_name'>{newList[i].nickname}</a>
                        <p className='description'>{newList[i].description}</p>
                    </WriterInfo>
                );
            }
        }

        return(
            <WriterInfoList>
                {PageList}
            </WriterInfoList>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        writerList: state.get('home').get('writerList'),
        page: state.get('home').get('page'),
        totalPage: state.get('home').get('totalPage'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // 当作者栏加载时,从store那里获取writerList
        writerAreaLoad(writerList){
            if (writerList.length===0){
                const action_getWriterList=actionCreators.getWriterList();
                dispatch(action_getWriterList);
            }
        },
        handleChangeWriter(page,totalPage,spinIcon){
            if (page<totalPage-1){
                page=page+1;
            }
            else {
                page=0;
            }
            const action = actionCreators.changeWriterList(page);
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

export default connect(mapStateToProps, mapDispatchToProps)(Writer);