import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner_img {
        width: 625px;
        height: 270px;
        cursor: pointer;
        border-radius: 6px;
        margin-bottom: 35px;
    }
    .split-line{
        margin: -5px 0 15px;
        border-top: 1px solid #f0f0f0;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    margin: 0 0 15px;
    line-height: 20px;
    box-sizing: border-box;
    position: relative;
    .list_img{
        position: absolute;
        top: 50%;
        margin-top: -60px;
        right: 0;
        width: 150px;
        height: 100px;
        display: block;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
        cursor: pointer;
        box-sizing: border-box;
    }
`;

export const ListInfo = styled.div`
    padding-right: 165px;
    float: left;
    .title {
        line-height: 1.5;
        font-size: 18px;
        font-weight: 700;
        color: #333;
        margin: -7px 0 4px;
        display: inherit;
    }
    .abstract {
        margin: 0 0 8px;
        line-height: 24px;
        font-size: 13px;
        color: #999;
        display: block;
    }
    .meta {
        padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }
`;

export const HomeRight = styled.div`
    padding: 30px 0 0;
    width: 280px;
    float: left;
    margin-left: 40px;
    box-sizing: border-box;
`;

export const RecommendWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
    box-sizing: border-box;
`;

export const RecommendItem = styled.div` 
    img {
        width: 280px;
        height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
        cursor: pointer;
        box-sizing: border-box;
        vertical-align: middle;
    }
`;

export const WriterWrapper = styled.div`
    //margin-bottom: 20px;
    padding-top: 20px;
    font-size: 13px;
    text-align: center;
    box-sizing: border-box;
    .title{
        text-align: left;
        span{
            font-size: 14px;
            color: #969696;
        }
    }
`;

export const WriterInfoSwitch = styled.div`
    float: right;
    display: inline-block;
    font-size: 14px;
    color: #969696;
    cursor: pointer;
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

export const WriterInfoList = styled.div`
    margin: 0 0 20px;
    text-align: left;
`;

export const WriterInfo = styled.div`
    //overflow: hidden;
    margin-top: 15px;
    line-height: 20px;
    box-sizing: border-box;
    .user_icon{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        cursor: pointer;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .user_focused{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        font-weight: 400;
        text-decoration: none;
    }
    .user_name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        text-decoration: none;
        color: #333;
    }
    .description{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`;
