import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
`
export const HomeLeft = styled.div`
    width:625px;
    float:left;
    margin-left:15px;
    padding-top: 30px;
    .banner-img{
        width:625px;
        height:270px;
        border-radius:5px;
    }
`

export const HomeRight = styled.div`
    width:280px;
    float:right;
`

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-15px;
    border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.a`
    float:left;
    margin-left:15px;
    margin-bottom:15px;
    padding-right:10px;
    height:32px;
    line-height:32px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    text-decoration:none;
    .topic-img{
        margin-right:10px;
        display:block;
        float:left;
        width:32px;
        height:32px;
        border-radius:4px;
    }
`

export const ListItem = styled.div`
    position:relative;
    overflow:hidden;
    padding:20px 10px;
    border-bottom: 1px solid #dcdcdc;
    border-radius:4px;
    .pic{
        position:absolute;
        right:10px;
        top:50%;
        margin-top:-50px;
        display:block;
        width:150px;
        height:100px;
        border-radius:4px;
        border: 1px solid #f0f0f0;
        opacity:0.9;
        transition:all .3s ease-in;
    }
    &:hover{
        background:#e5e5e5;
    }
    &:hover>.pic{
        opacity:1;
        transform: scale(1.04,1.04)
    }
`

export const ListInfo = styled.div`
    padding-right:165px;
    float:left;
    .title{
        font-size:18px;
        line-height:28px;
        font-weight:bold;
        color:#333;
        margin: -7px 0 4px;
    }
    .desc{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`

export const RecommendWrapper = styled.div`
    width:280px;
    margin:30px 0;
`

export const RecommendItem = styled.div`
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
    background-image:url(${(props) => props.imgUrl});
    background-size:contain;
`
export const WriterWrapper = styled.div`
    margin-bottom: 30px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .ewm_img{
        display: inline-block;
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }
`
export const WriterInfo = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .ewm_title{
        font-size: 15px;
        color: #333;
    }
    .description{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`
export const Writers = styled.div`
    width:280px;
    margin:20px 0;
    line-height:20px;
    font-size:14px;
    color:#969696;
`

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition: all 0.2s ease-in;
        transform-origin: center center;
    }
`
export const WriterCont = styled.div`
    margin: 0 0 20px;
    text-align: left;
    .find-more{
        margin-top:20px;
        display:block;
        padding: 7px 7px 7px 12px;
        width: 280px;
        text-align:center;
        line-height:20px;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        text-decoration: none;
        box-sizing: border-box;        
    }
`
export const WriterItem = styled.div`
    margin-top: 15px;
    line-height:20px;
    .avatar{
        display:block;
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
    }
    .avatar img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
        box-sizing: border-box;
    }
    .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        text-decoration: none;
        i{
            font-weight:700;
        }
    }
    .name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        color:#333;
    }
    .num{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`
export const MoreListBtn = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    margin: 30px auto 60px;
    padding: 15px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    display: block;
    text-decoration: none;
    cursor:pointer;
    &:hover{
        background:#9b9b9b;
    }
`
export const BackTop = styled.div`
    position: fixed;
    bottom: 80px;
    right: 80px;
    border: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
    background-color: #fff;
    transition: .1s ease-in
    cursor: pointer;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height:30px;
    display: block;
    font-size:14px;
    color:#666;

`

