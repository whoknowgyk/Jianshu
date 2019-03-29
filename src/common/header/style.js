import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
`;

// 注意这里的logo图片引入方法，不能使用传统的url方式进行引入，因为webpack在打包的时候并非依照项目的路径
// 需要使用import进行引入，然后再使用$符+{}的形式进行引用
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding-right: 70px;
    // 加这句话的话就不用因为padding调整width和height了
    box-sizing: border-box;
    height: 100%;
    //background: papayawhip;
`;

// 注意这里&符的用法
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        //background: papayawhip;
        line-height: 30px;
        text-align: center;
        &.focused{
            background: #777;
            color: white;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    // 同级加& 子集不加
    &.focused{
        width: 240px;
    }
    // 利用CSSTransition实现动画效果
    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    //height: 100px;
    padding: 20px 20px;
    box-sizing: border-box;
    //background: papayawhip;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
    margin-bottom: 10px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.div`
    cursor: pointer;
    float: right;
    font-size: 13px;
    // 旋转
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        // transform: rotate(0deg);
        transform-origin: center;
    }
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #787878;
    font-size: 12px;
    margin-right: 10px;
    margin-bottom: 15px;
    cursor: pointer;
    box-sizing: border-box;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
    //background: papayawhip;

`;

export const Button = styled.button`
    float: right;
    width: 80px;
    height: 38px;
    line-height: 24px;
    font-size: 15px;
    border-radius: 20px;
    margin: 9px 5px 0 15px;
    padding: 0 20px;
    border: 1px solid #ec6149;
    
    &.reg{
        color: #ec6149;
    }
    &.writing{
        margin: 8px 15px 0;
        width: 100px;
        height: 40px;
        color: #fff;
        background: #ec6149;
        font-weight: 400;
        padding: 6px 12px;
    }
`;