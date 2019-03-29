import styled from 'styled-components';

export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 620px;
    margin: 0 auto;
    padding-bottom: 40px;
    padding-top: 20px;
    box-sizing: border-box;
`;

export const Header = styled.div`
    margin: 20px 0 20px 0;
    line-height: 44px;
    font-size: 34px;
    color: #333;
    font-weight: 700;
`;

// export const ArticleAuthor = styled.div``;

export const Content = styled.div`
    overflow: hidden;
    color: #2f2f2f;
    position: relative;
    p{
        margin: 0 0 25px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.7;
    }
    .image-package{
        max-width: 503px;
        max-height: 308px;
        position: relative;
        margin: 0 auto;
        padding-bottom: 25px;
        z-index: 100;
    }
    .img-view{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    img{
        cursor: zoom-in;
        display: block;
        transition: all .15s linear;
        max-width: 100%;
        height: auto;
        z-index: 100;
    }
    
`;