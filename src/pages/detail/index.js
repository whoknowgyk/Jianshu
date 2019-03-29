import React , { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';

class Detail extends PureComponent {
    render() {
        return(
            <DetailWrapper>
                <Header>吃橙子的好处有哪些？给你100个吃橙子的理由！</Header>
                {/*<ArticleAuthor></ArticleAuthor>*/}
                <Content>
                    <p>橙子又被叫做柑子、金环、柳丁，酸甜的口感使绝大多数人都喜欢。经常吃橙子，能对人体产生不少很好的功能和疗效。所以，趁着这个橙子上市的秋季，多买几斤橙子，补充一下每日所需维生素C哦!可能大家还是很想知道，除了补充维生素，吃橙子还有什么好处呢?</p>
                    <div className='image-package'>
                        <div className='image-view'>
                            <img alt='' src='https://upload-images.jianshu.io/upload_images/9147522-484f79ac17717a11?imageMogr2/auto-orient/strip%7CimageView2/2/w/503/format/webp'/>
                        </div>
                    </div>
                    <p>橙子吃起来甜中带酸，能够很好地消食健胃。当吃完饭感觉腹胀不舒服，或者吃得太过油腻时，可以吃一个橙子或者喝一杯橙汁，能够消除腹中油腻的感觉，帮助促进消化。</p>
                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail;