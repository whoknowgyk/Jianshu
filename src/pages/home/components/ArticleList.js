import React, { PureComponent } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// Link这个组件替换a标签，会使得跳转变成单页跳转，不会重复加载html页面

class ArticleList extends PureComponent {
    render() {
        return(
            <div>
                {
                    this.props.articleList.map((item)=>{
                        return (
                            <Link to='./detail' key={item.get('id')}>
                                <ListItem>
                                    <img className='list_img' src={item.get('imgURL')} alt=''/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='abstract'>{item.get('abstract')}</p>
                                        {/*<div className='meta'></div>*/}
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    articleList: state.get('home').get('articleList'),
});

export default connect(mapStateToProps, null)(ArticleList);