import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index:0;
    position:absolute;
    left:0;
    top:56px;
    right:0;
    bottom:0;
    background:#eee;
`
export const LoginBox = styled.div`
    width:400px;
    height:220px;
    margin:120px auto;
    padding-top:35px;
    background:#fff;
    box-shadow: 0 0 9px rgba(0,0,0,.1);
    box-sizing: border-box;
`

export const Input = styled.input`
    display:block;
    width:200px;
    height:30px;
    line-height:30px;
    padding: 0 10px;
    margin:15px auto;
    color:#777;
    outline:none;
`   
export const Button = styled.div`
    width:220px;
    height:36px;
    line-height:36px;
    color:#fff;
    font-size:16px;
    background:#3194d0;
    border-radius:18px;
    margin:10px auto;
    text-align:center;
    cursor:pointer;
`
