import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`　
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
}`

export const IconfontStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1556345514405'); /* IE9 */
        src: url('./iconfont.eot?t=1556345514405#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPcAAsAAAAACDgAAAOOAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDUIMyATYCJAMUCwwABCAFhG0HThtEBxEVnOvIfiTGMSnrDD6qJpTnjZnggX/P91yky5IHcRLSAdIfhHYQv9QAWJ1aDWaEGJBeWPGNX57jnC/Xe/9zzHT5fGD5bTanyLCopAAcJdCAooIKaIDbgdw53zB25UUchgAsEsiDqFKtThNMNMYoAYhe3bu2x0wp0DXRAhOBq2ShRszDwJTT5RVgrv/z4iOFhAkSQ2FMbNClaicqvCn2rqEa5xtHKxcBczwdwJaBAvIAGsSAUkMvVOjKg8JS/k5TAbAwkcg3xd70e/PqXUOfD5WzI5FlukEjx/nnCRdGpB8AFSBfnxzTZsTCflCGhMJXkAIF7xqy7iXSAMAayTMVuMuVcRgCeeI36+BgbSsR4Wea4fbQJkfvcudOE9GkqfB63eM9jpMMGne3ofuYR+xEe2doU7ez40xWE2/azo25hjXr6Ix0jnuFx+M06nr3btOZ3vJNF8/cuXJAS1qSVnAXjyfQcvyaWD3t5i2WJFiropq1P2zPBEtYJ6wZ18R4t3u8f1WZpoe2MW67PfO0EH+ONG/+OP/AinLqoUNTZYWxxkcVjuq/f/XRlpXX/5mQKve18icz5fKlggXtu0143rNn5QGdOnW+dKlzp2qRaSUrda9uuKofO0rxdaWOHzfSOpeS0w8cmO5wJVXK6fHkUp3TGhw/viy6cPyxebLnvHk9kUzOC/PQ23CiS/WbWVVudg7wqcqeHuXqN5WVOnQv59V/yg0cdLZEfmFUzNc32+nu39quXaHUqzbuQZejw//EpH9PT6AEAL7x6rvq7xP+qrEKnE+dUAjsX4k+1D6sbWCZ36atAbj3IXQHTPGN06hx8LOEtGb+VWbLEq2yDaWh5UKbIRsNCiQUSKXGAv6lJYQn45jCIdYJTM6EIMlBPChM0pAamwcMbIqAC5PyYJGb6sttQhmAQuicQC4mAxAEsRckARwHRRBXkRr7GAwi+AwugoQCC0eEbmiTIQRBVCaUjAbUH4Ju1VpqFkH0Dd07S0qyffwL6QhWWKcl671iRRpjyvFxG7MFS63ABRyHOTfo1CJqnjxz3+fZlr1o0q0MgsqEktGA+kPQrVq3Oovc92/o3llSTVGF+oV0hPZhnZYWyKugtiq6lu7Hx23MFg+z1ApcoA6z6WrQy/tF1Dz5Ho6+z6iSbSuY5heVZ9wCWBg7GEIKJbQwhAs9sId6Pv6JY8eqQxZdZHVGxuA6TxXlMAAAAA==') format('woff2'),
        url('./iconfont.woff?t=1556345514405') format('woff'),
        url('./iconfont.ttf?t=1556345514405') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1556345514405#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`
