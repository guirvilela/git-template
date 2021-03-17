import { createGlobalStyle } from 'styled-components';

import gitBg from './assets/Github.svg';

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    background: #FFFFFF;
    outline: 0;
    box-sizing: border-box;
    background: #F0F0F5 url(${gitBg}) no-repeat 70% top ;
    font-family: 'Roboto';
    color: #3A3A3A;
}
`;

export default GlobalStyle;
