import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom:1px solid #f0f0f0;
    box-sizing:border-box;
`
export const Logo = styled.div`
    position:absolute;
    left:0;
    top:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
    
`
export const Nav = styled.div`
    width:960px;
    height:56px;
    padding-right:30px;
    margin: 0 auto;
    box-sizing:border-box;
`
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333333;
    vertical-align:middle;
    cursor:pointer;
    &.left{float:left}
    &.right{float:right;color:#969696}
    &.active{
        color:red
    }
`
export const SearchWrapper = styled.div`
    z-index:1;
    position:relative;
    float:left;
    .zoom{
        position:absolute;
        right:5px;
        bottom:3px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    padding:0 38px 0 20px;
    outline:none;
    border-radius:20px;
    background:#eeeeee;
    border:1px solid #eee;
    box-sizing:border-box;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999999
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out
    }
    &.slide-exit-active{
        width:160px;
    }
`
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:20px;
    font-size:14px;
    cursor:pointer;
    &.reg{
        color:#ea6f5a;
        border:1px solid rgba(236,97,73,.7);
    }
    &.write-btn{
        background-color: #ea6f5a;
        color:#fff;
    }
`
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;
`

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
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
export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
    padding:0 5px;
    font-size:12px;
    line-height:20px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
    cursor:pointer
`
