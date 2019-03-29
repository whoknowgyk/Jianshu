import React , { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from "react-redux";

class Recommend extends PureComponent {
    render() {
        return(
            <RecommendWrapper>
                {
                    this.props.recommendPicList.map((item)=>{
                        return (
                            <RecommendItem key={item.get('id')}>
                                <img src={item.get('imgURL')} alt=''/>
                            </RecommendItem>
                        );
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    recommendPicList: state.get('home').get('recommendPicList'),
});

export default connect(mapStateToProps, null)(Recommend);